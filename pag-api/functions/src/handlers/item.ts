import * as twttr from 'twitter-text';

import { ResponseManager } from '../response-manager';
import { TwitterClient } from '../services/twitter';
import { Firestore } from '../services/firestore';
import { Account } from './account';
import { scraping } from '../services/scraper';

export class ItemHandler {

  readonly PAG_TAG = 'pag';

  resManager;
  twitterClient: TwitterClient;
  firestoreClient: Firestore;
  req;
  res;

  constructor(req, res) {
    this.resManager = new ResponseManager();
    this.twitterClient = new TwitterClient();
    this.firestoreClient = Firestore.instance;
    this.req = req;
    this.res = res;
    this.resManager.setCorsHeader(this.res);
  }

  invoke() {
    switch (this.req.method) {
      case 'POST':
        return this.syncItems()
          .then(res => res)
          .catch(err => {
            console.log('[debug] post items failed: ', err);
            this.resManager.returnErr(this.res, 500);
          });
      case 'GET':
        return this.getItems()
          .then(res => res)
          .catch(err => {
            console.log('[debug] get items failed: ', err);
            this.resManager.returnErr(this.res, 500);
          });
      default:
        return this.res.status(405).send();
    }
  }

  async getItems() {
    try {
      const { accountId } = this.req.query;
      if (!accountId) { return this.resManager.returnErr(this.res, 400); }
      const account: Account = await this.firestoreClient.getAccountById(accountId);
      if (!account) { return this.resManager.returnErr(this.res, 404); }
      const items = await this.firestoreClient.getItems(accountId);
      return this.res.status(200).send(items);
    } catch (err) {
      throw new Error(err);
    }
  }

  async syncItems() {
    try {
      const { accountId } = this.req.body;
      if (!accountId) { return this.resManager.returnErr(this.res, 400); }
      const account: Account = await this.firestoreClient.getAccountById(accountId);
      if (!account) { return this.resManager.returnErr(this.res, 404); }
      const tweets = await this.twitterClient.getAllTweets(account.screenName, account.latestSearchTweetId);
      const latestTweet = tweets ? tweets[0] : null;
      const pagTweets = await this.getPagTweets(tweets);
      const promises = [];
      pagTweets.forEach(tweet => {
        promises.push(this.generateItem(tweet, accountId));
      });
      const items = await Promise.all(promises).then(v => v.filter(item => (item)));
      console.log('[debug] new items: ', items);
      if (items && 0 < items.length) { // itemがあれば、firestoreに追加
        await this.firestoreClient.addItems(items);
      }
      if (latestTweet) { // latestTweetがあれば、latestSearchTweetIdを更新
        await this.firestoreClient.updateLatestSearchTweet(accountId, latestTweet.id_str);
      }
      return this.res.status(200).send(items);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPagTweets(tweets) {
    const pagTweets = tweets.filter(t => {
      const pagTweet = t.entities.hashtags.find(tag => tag.text === this.PAG_TAG);
      return pagTweet ? true : false;
    });
    return pagTweets;
  }

  async generateItem(tweet, accountId: string): Promise<Item> {
    const id = tweet.id_str;
    const url = tweet.entities.urls[0] ? tweet.entities.urls[0].expanded_url : null;
    if (url === null) { return Promise.resolve(null); } // urlがない場合はnullを返す
    const { title=null, img=null } = url ? await scraping(url) : { title: null, img: null };
    const tags = tweet.entities.hashtags.map(t => t.text).filter(t => t !== this.PAG_TAG);
    const createdAt = new Date(tweet.created_at);
    let text = tweet.text;
    const entities = twttr.extractEntitiesWithIndices(text);
    entities.forEach((entity) => {
      const replaceTxt = tweet.text.substring(entity.indices[0], entity.indices[1]);
      text = text.replace(replaceTxt, '');
    });
    text = text.trim();
    const item: Item = { id, title, img, url, tags, createdAt, accountId, comment: text };
    return Promise.resolve(item);
  }
}

export interface Item {
  id: string;
  title: string;
  img: string;
  comment: string;
  tags: string[];
  url: string;
  createdAt: Date;
  accountId: string;
}

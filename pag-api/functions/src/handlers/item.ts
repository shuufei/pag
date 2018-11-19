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
      const { id } = this.req.query;
      if (!id) { return this.resManager.returnErr(this.res, 400); }
      const account: Account = await this.firestoreClient.getAccountById(id);
      if (!account) { return this.resManager.returnErr(this.res, 404); }
      const tweets = await this.getPagTweets(account);
      const promises = [];
      tweets.forEach(tweet => {
        promises.push(this.generateItem(tweet));
      });
      const items = await Promise.all(promises);
      console.log('--- items: ', items);
      // urlがあるツイートであれば、スクレイピングを行い、結果をfirestoreに登録
      // firestoreからitem一覧を取得し返す
      return this.res.status(200).send(items);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPagTweets(account: Account) {
    const tweets = await this.twitterClient.getAllTweets(account.accountId, account.latestSearchTweetId);
    const pagTweets = tweets.filter(t => {
      const pagTweet = t.entities.hashtags.find(tag => tag.text === this.PAG_TAG);
      return pagTweet ? true : false;
    });
    return pagTweets;
  }

  async generateItem(tweet): Promise<Item> {
    const url = tweet.entities.urls[0] ? tweet.entities.urls[0].expanded_url : null;
    const { title, img } = url ? await scraping(url) : { title: null, img: null };
    const tags = tweet.entities.hashtags.map(t => t.text).filter(t => t !== this.PAG_TAG);
    const createdAt = new Date(tweet.created_at);
    let text = tweet.text;
    const entities = twttr.extractEntitiesWithIndices(text);
    entities.forEach((entity) => {
      const replaceTxt = tweet.text.substring(entity.indices[0], entity.indices[1]);
      text = text.replace(replaceTxt, '');
    });
    text = text.trim();
    const item: Item = { title, img, url, tags, createdAt, comment: text };
    return Promise.resolve(item);
  }
}

export interface Item {
  title: string;
  img: string;
  comment: string;
  tags: string[];
  url: string;
  createdAt: Date;
}

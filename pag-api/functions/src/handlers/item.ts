import { ResponseManager } from '../response-manager';
import { TwitterClient } from '../services/twitter';
import { Firestore } from '../services/firestore';

import { Account } from './account';

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
            console.log('[debug] post account failed: ', err);
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
      // urlがあるツイートであれば、スクレイピングを行い、結果をfirestoreに登録
      // firestoreからitem一覧を取得し返す
      return this.res.status(200).send(tweets);
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
}
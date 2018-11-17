import { ResponseManager } from '../response-manager';
import { TwitterClient } from '../services/twitter';
import { Firestore } from '../services/firestore';

export class ItemHandler {

  resManager;
  twitterClient;
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
      const account = await this.firestoreClient.getAccountById(id);
      // latestSearchTweetID以降のすべてのtweetを検索
      // #pagのhashtagがついてるものを洗い出す
      // urlがあるツイートであれば、スクレイピングを行い、結果をfirestoreに登録
      // firestoreからitem一覧を取得し返す
      return this.res.status(200).send(account);
    } catch (error) {
      throw new Error(error);
    }
  }
}
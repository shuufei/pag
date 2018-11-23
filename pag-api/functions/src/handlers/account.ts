import { ResponseManager } from '../response-manager';
import { TwitterClient } from '../services/twitter';
import { Firestore } from '../services/firestore';

export class AccountHandler {

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
        return this.postAccount()
          .then(res => res)
          .catch(err => {
            console.log('[debug] post account failed: ', err);
            this.resManager.returnErr(this.res, 500);
          });
      case 'OPTIONS':
        return this.res.status(200).send();
      default:
        return this.res.status(405).send();
    }
  }

  async postAccount() {
    try {
      const { screenName } = this.req.body;
      if (!screenName) { return this.resManager.returnErr(this.res, 400); }
      const account = await this.firestoreClient.getAccountByAccountId(screenName); // 登録済みユーザか？
      if (account) {
        return this.res.status(200).send(account);
      }
      const twitterUser = await this.twitterClient.getUser(screenName);
      if (!twitterUser) {
        this.resManager.returnErr(this.res, 404);
        return;
      }
      const resAccount: Account = this.parseAccountResponse(twitterUser);
      await this.registAccount(resAccount);
      return this.res.status(200).send(resAccount);
    } catch (error) {
      console.log('Post Account Failed: ', error);
      this.resManager.returnErr(this.res, 500);
    }
  }

  private parseAccountResponse(twitterUser): Account {
    const id = twitterUser.id_str;
    const screenName = twitterUser.screen_name;
    const name = twitterUser.name;
    const img = twitterUser.profile_image_url.replace(/_normal./, '.');
    const latestSearchTweetId = twitterUser.status ? twitterUser.status.id_str : null;
    return { id, screenName, name, img, latestSearchTweetId };
  }

  private async registAccount(account: Account): Promise<void> {
    try {
      await this.firestoreClient.addAccount(account);
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export interface Account {
  id?: string;
  screenName: string;
  name: string;
  img: string;
  latestSearchTweetId: string;
}

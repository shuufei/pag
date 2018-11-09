import { ResponseManager } from '../response-manager';
import { TwitterClient } from '../services/twitter';
import { Firestore } from '../services/firestore';

export class AccountHandler {

  resManager;
  twitterClient;
  firestoreClient;
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
            console.log('--- post account promise catch: ', err);
            this.resManager.returnErr(this.res, 500);
          });
      default:
        return this.res.status(405).send();
    }
  }

  async postAccount() {
    try {
      const { account } = this.req.body;
      if (!account) { return this.resManager.returnErr(this.res, 400); }
      const twitterUser = await this.twitterClient.getUser(account);
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
    const accountId = twitterUser.screen_name;
    const name = twitterUser.name;
    const img = twitterUser.profile_image_url.replace(/_normal./, '.');
    return { id, accountId, name, img };
  }

  private async registAccount(account: Account): Promise<void> {
    try {
      const exist = await this.firestoreClient.isExistAccount(account.id);
      if (exist) { return; }
      this.firestoreClient.addAccount(account);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export interface Account {
  id: string;
  accountId: string;
  name: string;
  img: string;
}

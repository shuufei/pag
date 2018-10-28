import { ResponseManager } from '../response-manager';
import { TwitterClient } from '../services/twitter';

export class AccountHandler {

  resManager;
  twitterClient;
  req;
  res;

  constructor(req, res) {
    this.resManager = new ResponseManager();
    this.twitterClient = new TwitterClient();
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
      return this.res.status(200).send('Get account.');
    } catch (error) {
      this.resManager.returnErr(this.res, 500);
    }
  }
}

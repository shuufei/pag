import * as twitter from 'twitter';
import * as KEY from '../../.twitter-key.js';

export class TwitterClient {
  client;

  constructor() {
    this.client = new twitter(KEY);
  }

  getUser(accountName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const params = {screen_name: accountName};
      this.client.get('users/show', params, (error, user, response) => {
        if (error) {
          console.log('[debug] twitter /users/show failed: ', error);
          resolve(null);
        }
        resolve(user);
      });
    });
  }
}

export interface User {
  id: string;
}

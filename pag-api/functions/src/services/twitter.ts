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

  getTweets(userName: string, sinceId: string) {
    return new Promise((resolve, reject) => {
      const params = {
        screen_name: userName,
        count: 200,
        since_id: sinceId
      };
      this.client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
          console.log('[debug] twitter /users/show failed: ', error);
          resolve(null);
        }
        resolve(tweets);
      });
    });
  }
}

export interface User {
  id: string;
}

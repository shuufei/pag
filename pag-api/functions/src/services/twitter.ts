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

  getTweets(accountId: string, sinceId: string, maxId: string, count: number): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const params = {
        screen_name: accountId,
        count,
        since_id: sinceId ? sinceId : undefined,
        max_id: maxId ? maxId : undefined
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

  getAllTweets(accountId: string, sinceId: string): Promise<any[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const MAX_LOOP_COUNT = 10;
        const COUNT = 200;
        let tweets = [];
        let maxId;
        for (let i = 0; i < MAX_LOOP_COUNT; i++) {
          const res = await this.getTweets(accountId, sinceId, maxId, COUNT);
          const isRemainig = (res.length === COUNT);
          if (maxId) { res.shift(); } // maxIdが指定されていれば先頭のtweetを削除
          if (res.length === 0) { return resolve(tweets); }
          tweets = [ ...tweets, ...res ];
          if (isRemainig) { // まだTweetが残っていればcontinue
            const latestTweets = res[res.length - 1];
            maxId = latestTweets.id_str;
            continue;
          } else {
            return resolve(tweets);
          }
        }
        return resolve(tweets);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export interface User {
  id: string;
}

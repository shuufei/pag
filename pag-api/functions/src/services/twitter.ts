import * as twitter from 'twitter';
import * as KEY from '../../.twitter-key.js';

export class TwitterClient {
  client;

  constructor() {
    this.client = new twitter(KEY);
  }

  getUser(screenName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const params = {screen_name: screenName};
      this.client.get('users/show', params, (error, user, response) => {
        if (error) {
          console.log('[debug] twitter /users/show failed: ', error);
          resolve(null);
        }
        resolve(user);
      });
    });
  }

  getTweets(screenName: string, sinceId: string, maxId: string, count: number): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const params = {
        screen_name: screenName,
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

  getAllTweets(screenName: string, sinceId: string): Promise<any[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const MAX_LOOP_COUNT = 10;
        const COUNT = 200;
        let tweets = [];
        let maxId;
        for (let i = 0; i < MAX_LOOP_COUNT; i++) {
          const res = await this.getTweets(screenName, sinceId, maxId, COUNT);
          const isRemainig = (res.length === COUNT);
          if (maxId) { res.shift(); } // maxIdが指定されていれば先頭のtweetを削除
          if (res.length === 0) {
            resolve(tweets);
            return;
          }
          tweets = [ ...tweets, ...res ];
          if (isRemainig) { // まだTweetが残っていればcontinue
            const latestTweets = res[res.length - 1];
            maxId = latestTweets.id_str;
            continue;
          } else {
            resolve(tweets);
            return;
          }
        }
        resolve(tweets);
        return;
      } catch (error) {
        reject(error);
      }
    });
  }
}

export interface User {
  id: string;
}

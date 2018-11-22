import * as firebase from 'firebase-admin';

import { Account } from '../handlers/account';
import { Item } from '../handlers/item';

const ACCOUNTS_COLLECTION = 'accounts';
const ITEMS_COLLECTION = 'items';

export class Firestore {

  private static _instance: Firestore;

  db;

  private constructor() {
    this.db = firebase.firestore();
    const setting = { timestampsInSnapshots: true };
    this.db.settings(setting);
  }

  static get instance(): Firestore {
    if (!this._instance) {
      this._instance = new Firestore();
    }
    return this._instance;
  }

  async isExistAccount(id: string): Promise<boolean> {
    try {
      const account = await this.getAccountById(id);
      return account ? true : false;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getAccountById(id: string): Promise<any> {
    try {
      const accountsRef = this.db.collection(ACCOUNTS_COLLECTION);
      const doc = await accountsRef.doc(id).get();
      if (doc.exists) {
        return doc.data();
      } else {
        return null;
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getAccountByAccountId(screenName: string): Promise<any> {
    try {
      let account;
      const snapshot = await this.db.collection(ACCOUNTS_COLLECTION).where('screenName', '==', screenName).get();
      snapshot.forEach(doc => {
        if (doc.exists) { account = doc.data(); }
      });
      return account;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getItems(accountId: string): Promise<any[]> {
    try {
      const items = [];
      const snapshot = await this.db.collection(ITEMS_COLLECTION).where('accountId', '==', accountId).get();
      snapshot.forEach(doc => {
        if (doc.exists) {
          items.push(doc.data());
        }
      });
      return items;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async addAccount(data: Account): Promise<void> {
    try {
      await this.db.collection(ACCOUNTS_COLLECTION).doc(data.id).set({
        id: data.id,
        name: data.name,
        screenName: data.screenName,
        img: data.img,
        latestSearchTweetId: data.latestSearchTweetId
      });
      return;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async updateLatestSearchTweet(id, tweetId): Promise<void> {
    try {
      const ref = this.db.collection(ACCOUNTS_COLLECTION).doc(id);
      await ref.update({latestSearchTweetId: tweetId});
      return;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async addItems(items: Item[]): Promise<any> {
    try {
      const batch = this.db.batch();
      items.forEach(item => {
        batch.set(this.db.collection(ITEMS_COLLECTION).doc(item.id), item);
      });
      return batch.commit();
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

import * as firebase from 'firebase-admin';

import { Account } from '../handlers/account';

const ACCOUNTS_COLLECTION = 'accounts';

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
      throw new Error(err);
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
      throw new Error(err);
    }
  }

  async getAccountByAccountId(accountId: string): Promise<any> {
    try {
      let account;
      const snapshot = await this.db.collection(ACCOUNTS_COLLECTION).where('accountId', '==', accountId).get();
      snapshot.forEach(doc => {
        if (doc.exists) { account = doc.data(); }
      });
      return account;
    } catch (err) {
      throw new Error(err);
    }
  }

  async addAccount(data: Account): Promise<void> {
    try {
      await this.db.collection(ACCOUNTS_COLLECTION).doc(data.id).set({
        name: data.name,
        accountId: data.accountId,
        img: data.img,
        latestSearchTweetId: data.latestSearchTweetId
      });
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}

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
    let account;
    try {
      const accountsRef = this.db.collection(ACCOUNTS_COLLECTION);
      const snapshot = await accountsRef.where('id', '==', id).get();
      snapshot.forEach(doc => {
        account = doc.data();
      });
      return account ? true : false;
    } catch (err) {
      throw new Error(err);
    }
  }

  async addAccount(data: Account): Promise<void> {
    try {
      await this.db.collection(ACCOUNTS_COLLECTION).doc(data.id).set({
        name: data.name,
        accountId: data.accountId,
        img: data.img
      });
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}

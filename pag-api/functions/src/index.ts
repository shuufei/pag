import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseConfig from '../firebase-config.js';

admin.initializeApp(firebaseConfig);

import { AccountHandler } from './handlers/account';
import { ItemHandler } from './handlers/item';

exports.accounts = functions.https.onRequest((req, res) => {
  const handler = new AccountHandler(req, res);
  return handler.invoke();
});

exports.items = functions.https.onRequest((req, res) => {
  const handler = new ItemHandler(req, res);
  return handler.invoke();
})

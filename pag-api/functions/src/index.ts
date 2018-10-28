import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

import { AccountHandler } from './handlers/account';

exports.accounts = functions.https.onRequest((req, res) => {
  const handler = new AccountHandler(req, res);
  return handler.invoke();
});

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  // mock
  getAccount(accountId: string): Promise<GetAccountResponse> {
    return new Promise((resolve, reject) => {
      const account: GetAccountResponse = {
        id: 'xxxxxx',
        accountId: accountId,
        name: 'fei',
        img: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg'
      };
      setTimeout(() => {
        if (accountId) {
          resolve(account);
        } else {
          reject();
        }
      }, 1500);
    });
  }
}


export interface GetAccountResponse {
  id: string;
  accountId: string;
  name: string;
  img: string;
}

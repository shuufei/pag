import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';

import { Account } from 'src/app/components/molecules/account-name/account-name.component';
import { AccountsStore } from './accounts.store';

@Injectable({ providedIn: 'root' })
export class AccountsService {

  constructor(
    private accountsStore: AccountsStore,
  ) { }

  get() {
  }

  add() {
  }

  changeCurrentAccount(account: Account): void {
    this.accountsStore.setState(state => ({ ...state, currentAccount: account }));
  }

  setAccounts(accounts: Account[]): void {
    const currentAccount: Account = accounts[0];
    this.accountsStore.setState(state => ({ ...state, accounts, currentAccount }));
  }

  addAccount(account: Account): void {
    this.accountsStore.setState(state => ({ ...state, accounts: [ ...state.accounts, account ] }));
  }

  removeAccount(account: Account): void {
    this.accountsStore.setState(state => {
      const accounts = [ ...state.accounts ];
      const index = accounts.findIndex(v => (v.id === account.id && v.name === account.name));
      if (0 <= index) {
        accounts.splice(index, 1);
      }
      return { ...state, accounts };
    });
  }

  // for debug
  setInitialAccounts(): void {
    const accounts: Account[] = this.getAccounts();
    this.setAccounts(accounts);
  }

  // mock
  private getAccounts(): Account[] {
    return [
      {
        id: 'id-1',
        name: '@digitalfei',
        imgUrl: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg'
      },
      {
        id: 'id-2',
        name: '@alphabet'
      }
    ];
  }

}

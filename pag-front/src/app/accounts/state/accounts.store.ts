import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { Account } from 'src/app/components/molecules/account-name/account-name.component';

export interface AccountsState {
  accounts: Account[];
  currentAccount: Account;
}

export function createInitialState(): AccountsState {
  return {
    accounts: [],
    currentAccount: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'accounts' })
export class AccountsStore extends Store<AccountsState> {

  constructor() {
    super(createInitialState());
  }

}

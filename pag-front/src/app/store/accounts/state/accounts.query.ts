import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AccountsStore, AccountsState } from './accounts.store';

@Injectable({ providedIn: 'root' })
export class AccountsQuery extends Query<AccountsState> {

  constructor(protected store: AccountsStore) {
    super(store);
  }

}

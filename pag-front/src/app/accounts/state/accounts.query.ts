import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AccountsStore, AccountsState } from './accounts.store';
import { Account } from './account.model';

@Injectable({ providedIn: 'root' })
export class AccountsQuery extends QueryEntity<AccountsState, Account> {

  constructor(protected store: AccountsStore) {
    super(store);
  }

}

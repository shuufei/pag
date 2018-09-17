import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Account } from './account.model';

export interface AccountsState extends EntityState<Account> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'accounts' })
export class AccountsStore extends EntityStore<AccountsState, Account> {

  constructor() {
    super();
  }

}


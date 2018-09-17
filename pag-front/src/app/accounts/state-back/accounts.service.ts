import { Injectable } from '@angular/core';
import { ID, guid } from '@datorama/akita';

import { AccountsStore } from './accounts.store';
import { Account, createAccount } from './account.model';

@Injectable({ providedIn: 'root' })
export class AccountsService {

  constructor(
    private accountsStore: AccountsStore,
  ) {}

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.accountsStore.set(entities);
    // });
  }

  add(id: string | number, name: string, imgUrl: string) {
    const account: Account = createAccount({
      // id: guid(),
      id, name, imgUrl
    });
    this.accountsStore.add(account);
  }

}

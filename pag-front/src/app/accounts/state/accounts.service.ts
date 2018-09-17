import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { AccountsStore } from './accounts.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AccountsService {

  constructor(private accountsStore: AccountsStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.accountsStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.accountsStore.add(entity);
    // });
  }

}

import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';

import { ItemsStore } from './items.store';

@Injectable({ providedIn: 'root' })
export class ItemsService {

  constructor(
    private itemsStore: ItemsStore,
  ) { }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.itemsStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.itemsStore.add(entity);
    // });
  }

}

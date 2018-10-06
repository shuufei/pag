import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';

import { ItemsStore } from './items.store';
import { Item } from 'src/app/components/organisms/item/item.component';

@Injectable({ providedIn: 'root' })
export class ItemsService {

  constructor(
    private itemsStore: ItemsStore,
  ) {}

  get() {
  }

  add() {
  }

  setItems(master: Item[], filtered: Item[]): void {
    this.itemsStore.setState(state => ({ ...state, master, filtered }));
  }

  // setMasterItems(items: Item[]): void {
  //   this.itemsStore.setState(state => ({ ...state, master: items }));
  // }

  setFilteredItems(items: Item[]): void {
    this.itemsStore.setState(state => ({ ...state, filtered: items }));
  }

  setLoading(loading: boolean): void {
    this.itemsStore.setLoading(loading);
  }

}

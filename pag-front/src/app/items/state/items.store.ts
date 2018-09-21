import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { Item } from 'src/app/components/organisms/item/item.component';

export interface ItemsState {
  master: Item[];
  filtered: Item[];
}

export function createInitialState(): ItemsState {
  return {
    master: [],
    filtered: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'items' })
export class ItemsStore extends Store<ItemsState> {

  constructor() {
    super(createInitialState());
  }

}


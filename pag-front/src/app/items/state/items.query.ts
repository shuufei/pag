import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ItemsStore, ItemsState } from './items.store';
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class ItemsQuery extends QueryEntity<ItemsState, Item> {

  constructor(protected store: ItemsStore) {
    super(store);
  }

}

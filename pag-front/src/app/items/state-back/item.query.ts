import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ItemStore, ItemState } from './item.store';
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class ItemQuery extends QueryEntity<ItemState, Item> {

  constructor(protected store: ItemStore) {
    super(store);
  }

}

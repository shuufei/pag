import { Injectable } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { ItemsStore } from './items.store';
import { ItemsQuery } from './items.query';
import { Item } from 'src/app/components/organisms/item/item.component';
import { Label } from 'src/app/components/atoms/label/label.component';
import { Account } from 'src/app/components/molecules/account-name/account-name.component'
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ItemsService {

  constructor(
    private itemsStore: ItemsStore,
    private itemsQuery: ItemsQuery,
    private api: ApiService
  ) {}

  get() {
  }

  add() {
  }

  setStore(master: Item[], filtered: Item[]): void {
    this.itemsStore.setState(state => ({ ...state, master, filtered }));
  }

  setFilteredItems(items: Item[]): void {
    this.itemsStore.setState(state => ({ ...state, filtered: items }));
  }

  setLoading(loading: boolean): void {
    this.itemsStore.setLoading(loading);
  }

  setMasterItems(items: Item[]): void {
    this.itemsStore.setState(state => ({ ...state, master: items }));
  }

  async getItemsByAccount(account: Account): Promise<Item[]> {
    try {
      this.setLoading(true);
      if (!environment.testMode) {
        await this.api.syncItems(account);
      }
      const items: Item[] = await this.api.getItems(account);
      this.setLoading(false);
      return items;
    } catch (error) {
      this.setLoading(false);
      throw new Error(error);
    }
  }

  filterItemsByTags(tags: string[]): Item[] {
    const filtered: Item[] = this.getFilteredItemsByMasterAndTags(this.itemsQuery.getSnapshot().master, tags);
    return filtered;
  }

  getFilteredItemsByMasterAndTags(master: Item[], tags: string[]): Item[] {
    const filtered: Item[] = [];
    master.forEach(item => {
      const itemTags: string[] = item.tags.map((t: Label) => t.label);
      let match = true;
      tags.forEach(tag => {
        if (!itemTags.includes(tag)) {
          match = false;
        }
      });
      if (match) {
        const matchedItem: Item = item;
        const newTags: Label[] = [];
        matchedItem.tags.forEach((t: Label) => {
          const _tag: Label = { label: t.label, active: false };
          if (tags.includes(t.label)) { _tag.active = true; }
          newTags.push(_tag);
        });
        filtered.push({ ...matchedItem, tags: newTags });
      }
    });
    return filtered;
  }

}

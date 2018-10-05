import { Injectable } from '@angular/core';

import { ItemsQuery, ItemsService, ItemsState } from './state';
import { Account } from 'src/app/components/molecules/account-name/account-name.component'
import { Item } from 'src/app/components/organisms/item/item.component';
import { Label } from 'src/app/components/atoms/label/label.component';

@Injectable({
  providedIn: 'root'
})
export class ItemsUtilService {

  constructor(
    private itemsQuery: ItemsQuery,
    private itemsService: ItemsService
  ) {}

  setItems(account: Account): void {
    if (!account) { return; }
    const items: Item[] = this.getItems();
    const filtered: Item[] = items;
    // TODO: filter process
    this.itemsService.setItems(items, filtered);
  }

  // setFilterObserver(): void {
  //   this.itemsQuery.select(state => state.master)
  //     .subscribe(items => {
  //       // TODO: filter process
  //       this.itemsService.setFilteredItems(items);
  //     });
  // }

  filterItemsByTags(tags: string[]): void {
    const current: Item[] = [ ...this.itemsQuery.getSnapshot().master ];
    const filtered: Item[] = [];
    current.forEach(item => {
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
    this.itemsService.setFilteredItems(filtered);
  }

  // mock
  private getItems(): Item[] {
    return [
      {
        id: '1',
        title: 'Angularの状態管理設計',
        comment: 'RxJSやAkitaなどの活用法',
        thumbUrl: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Development', active: false },
          { label: 'Angular', active: false }
        ],
        star: false
      },
      {
        id: '2',
        title: 'Design Sysmte Management',
        comment: 'Design System管理法',
        thumbUrl: 'https://cdn-static-1.medium.com/_/fp/icons/monogram-mask.KPLCSFEZviQN0jQ7veN2RQ.svg',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Design System', active: false },
          { label: 'Design', active: false }
        ],
        star: false
      },
      {
        id: '3',
        title: 'Design Ecosystem In Lagos',
        comment: 'Design Ecosystem by Phase',
        thumbUrl: 'https://phase.com/wp-content/uploads/2018/08/lagos_featured-1.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Design', active: false },
          { label: 'Design Tool', active: false },
          { label: 'Phase', active: false }
        ],
        star: false
      },
      {
        id: '4',
        title: 'Atomic Design by Angular',
        comment: 'Atomic DesignをAngularで実践した例',
        thumbUrl: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Design', active: false },
          { label: 'Angular', active: false }
        ],
        star: false
      },
      {
        id: '1',
        title: 'Angularの状態管理設計',
        comment: 'RxJSやAkitaなどの活用法',
        thumbUrl: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Development', active: false },
          { label: 'Angular', active: false }
        ],
        star: false
      },
      {
        id: '2',
        title: 'Design Sysmte Management',
        comment: 'Design System管理法',
        thumbUrl: 'https://cdn-static-1.medium.com/_/fp/icons/monogram-mask.KPLCSFEZviQN0jQ7veN2RQ.svg',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Design System', active: false },
          { label: 'Design', active: false }
        ],
        star: false
      },
      {
        id: '3',
        title: 'Design Ecosystem In Lagos',
        comment: 'Design Ecosystem by Phase',
        thumbUrl: 'https://phase.com/wp-content/uploads/2018/08/lagos_featured-1.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Design', active: false },
          { label: 'Design Tool', active: false },
          { label: 'Phase', active: false }
        ],
        star: false
      },
      {
        id: '4',
        title: 'Atomic Design by Angular',
        comment: 'Atomic DesignをAngularで実践した例',
        thumbUrl: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Design', active: false },
          { label: 'Angular', active: false }
        ],
        star: false
      },
      {
        id: '1',
        title: 'Angularの状態管理設計',
        comment: 'RxJSやAkitaなどの活用法',
        thumbUrl: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Development', active: false },
          { label: 'Angular', active: false }
        ],
        star: false
      },
      {
        id: '2',
        title: 'Design Sysmte Management',
        comment: 'Design System管理法',
        thumbUrl: 'https://cdn-static-1.medium.com/_/fp/icons/monogram-mask.KPLCSFEZviQN0jQ7veN2RQ.svg',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Design System', active: false },
          { label: 'Design', active: false }
        ],
        star: false
      },
      {
        id: '3',
        title: 'Design Ecosystem In Lagos',
        comment: 'Design Ecosystem by Phase',
        thumbUrl: 'https://phase.com/wp-content/uploads/2018/08/lagos_featured-1.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Design', active: false },
          { label: 'Design Tool', active: false },
          { label: 'Phase', active: false }
        ],
        star: false
      },
      {
        id: '4',
        title: 'Atomic Design by Angular',
        comment: 'Atomic DesignをAngularで実践した例',
        thumbUrl: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        tags: [
          { label: 'Design', active: false },
          { label: 'Angular', active: false }
        ],
        star: false
      }
    ];
  }
}

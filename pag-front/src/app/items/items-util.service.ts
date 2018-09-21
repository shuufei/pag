import { Injectable } from '@angular/core';

import { ItemsQuery, ItemsService, ItemsState } from './state';
import { Account } from 'src/app/components/molecules/account-name/account-name.component'
import { Item } from 'src/app/components/organisms/item/item.component';

@Injectable({
  providedIn: 'root'
})
export class ItemsUtilService {

  constructor(
    private itemsQuery: ItemsQuery,
    private itemsService: ItemsService
  ) {}

  setItems(account: Account): void {
    const items: Item[] = this.getItems();
    this.itemsService.setMasterItems(items);
  }

  setFilterObserver(): void {
    this.itemsQuery.select(state => state.master)
      .subscribe(items => {
        // TODO: filter process
        this.itemsService.setFilteredItems(items);
      });
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
      }
    ];
  }
}

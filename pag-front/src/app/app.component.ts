import { Component, OnInit } from '@angular/core';

import { Account } from 'src/app/components/molecules/account-name/account-name.component';
import { AccountListCard } from 'src/app/components/organisms/account-list-card/account-list-card.component';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { Item } from 'src/app/components/organisms/item/item.component';

@Component({
  selector: 'pag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentAccount: Account;
  accountListCard: AccountListCard;
  items: Item[];
  tags: NavTag[];

  constructor() {}

  ngOnInit(): void {
    const accounts: Account[] = this.getAccounts();
    this.currentAccount = accounts[0];
    this.accountListCard = {
      accounts,
      currentAccount: this.currentAccount
    };
    this.tags = this.getTags();
    this.items = this.getItems();
  }

  // mock
  private getAccounts(): Account[] {
    return [
      {
        id: 'id-1',
        name: '@digitalfei',
        imgUrl: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg'
      },
      {
        id: 'id-2',
        name: '@alphabet'
      }
    ];
  }
  private getTags(): NavTag[] {
    return [
      { tag: 'Development', count: 42 },
      { tag: 'Design', count: 40 },
      { tag: 'Angular', count: 28 },
      { tag: 'UI', count: 27 },
      { tag: 'Design System', count: 20 },
      { tag: 'Service Worker', count: 11 },
      { tag: 'Typogpraphy', count: 5 },
      { tag: 'Long long to long tag name super long', count: 1 }
    ];
  }
  private getItems(): Item[] {
    return [
      {
        id: 1,
        title: 'Angularの状態管理設計',
        comment: 'RxJSやAkitaなどの活用法',
        thumbUrl: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        labels: [
          { label: 'Development', active: false },
          { label: 'Angular', active: false }
        ],
        star: false
      },
      {
        id: 2,
        title: 'Design Sysmte Management',
        comment: 'Design System管理法',
        thumbUrl: 'https://cdn-static-1.medium.com/_/fp/icons/monogram-mask.KPLCSFEZviQN0jQ7veN2RQ.svg',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        labels: [
          { label: 'Design System', active: false }
        ],
        star: false
      },
      {
        id: 3,
        title: 'Design Ecosystem In Lagos',
        comment: 'Design Ecosystem by Phase',
        thumbUrl: 'https://phase.com/wp-content/uploads/2018/08/lagos_featured-1.png',
        url: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
        labels: [
          { label: 'Design', active: false },
          { label: 'Design Tool', active: false },
          { label: 'Phase', active: false }
        ],
        star: false
      }
    ];
  }
}

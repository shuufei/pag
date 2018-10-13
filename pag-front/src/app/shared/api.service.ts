import { Injectable } from '@angular/core';

import { Account } from 'src/app/components/molecules/account-name/account-name.component'
import { Item } from 'src/app/components/organisms/item/item.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  // mock
  getAccount(accountId: string): Promise<GetAccountResponse> {
    return new Promise((resolve, reject) => {
      const account1 = {
        id: 'yyyy',
        accountId: accountId,
        name: 'muza',
        img: 'https://pbs.twimg.com/profile_images/659710386069897216/C5GLKeIW_bigger.png'
      };
      const account2 = {
        id: 'vvvv',
        accountId: accountId,
        name: 'nyanko',
        img: 'https://pbs.twimg.com/profile_images/956867108020744193/wbXnVRKn_bigger.jpg'
      };
      const account3 = {
        id: 'wwww',
        accountId: accountId,
        name: 'ota',
        img: 'https://pbs.twimg.com/profile_images/1031892122251620352/JIR_mpEY_bigger.jpg'
      };
      const account4: GetAccountResponse = {
        id: 'xxxxxx',
        accountId: accountId,
        name: 'fei',
        img: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg'
      };
      const accounts = [ account1, account2, account3, account4 ]
      const n = Math.round(Math.random() * 3);
      setTimeout(() => {
        if (accountId) {
          resolve(accounts[n]);
        } else {
          reject();
        }
      }, 1500);
    });
  }

  // mock
  getItems(account: Account): Promise<Item[]> {
    const items: Item[] = [
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:01.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:02.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:03.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:04.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:05.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:06.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:07.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:08.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:09.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:10.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:11.000Z')
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
        star: false,
        createdAt: new Date('2018-10-01T00:00:12.000Z')
      }
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
        // resolve([]);
      }, 2000);
    });
  }

}


export interface GetAccountResponse {
  id: string;
  accountId: string;
  name: string;
  img: string;
}

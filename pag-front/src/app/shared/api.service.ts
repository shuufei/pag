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
      const account: GetAccountResponse = {
        id: 'xxxxxx',
        accountId: accountId,
        name: 'fei',
        img: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg'
      };
      setTimeout(() => {
        if (accountId) {
          resolve(account);
        } else {
          reject();
        }
      }, 1500);
    });
  }

  // mock
  getItems(account: Account): Promise<Item[]> {
    const items = [
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

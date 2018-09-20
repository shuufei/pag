import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Account } from 'src/app/components/molecules/account-name/account-name.component'
import { AccountListCard } from 'src/app/components/organisms/account-list-card/account-list-card.component';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { Item } from 'src/app/components/organisms/item/item.component';
import { AccountsService, AccountsQuery } from 'src/app/accounts/state';
import { TagsService, TagsQuery, TagsState } from 'src/app/tags/state';
import { TagsUtliService } from 'src/app/tags/tags-utli.service';

@Component({
  selector: 'pag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  accountListCard: AccountListCard;
  items: Item[];
  tags$: Observable<NavTag[]>;

  private accounts$: Observable<Account[]>;
  private currentAccount$: Observable<Account>;

  constructor(
    private accountsService: AccountsService,
    private accountsQuery: AccountsQuery,
    private tagsService: TagsService,
    private tagsQuery: TagsQuery,
    private tagsUtil: TagsUtliService
  ) {
    this.onClickedAccount = this.onClickedAccount.bind(this);
    this.onClickedTag = this.onClickedTag.bind(this);
    this.setObserver();

    // for debug
    this.tagsQuery.select(state => state).subscribe(state => console.log('### check selected tags: ', state.selectedTags));
  }

  ngOnInit(): void {
    this.accounts$.subscribe(accounts => {
      if (!this.accountsQuery.getSnapshot().currentAccount) {
        const currentAccount = accounts[0];
        this.accountsService.changeCurrentAccount(currentAccount);
      }
      this.accountListCard = {
        ...this.accountListCard,
        accounts
      };
    });
    this.currentAccount$.subscribe(account => {
      this.accountListCard = {
        ...this.accountListCard,
        currentAccount: account
      };
    });
    this.tagsService.setTags([]);
    // this.accountsService.setInitialAccounts(); // for debug.
    this.items = this.getItems();
  }

  onClickedAccount(...args: any[]): void {
    const ACCOUNT_INDEX = 0;
    const account = args[ACCOUNT_INDEX];
    this.accountsService.changeCurrentAccount(account);
  }

  onClickedTag(...args: any[]): void {
    const NAV_TAG_INDEX = 0;
    const navTag: NavTag = args[NAV_TAG_INDEX];
    if (navTag.selected) {
      this.tagsUtil.addSelectedTag(navTag.tag);
    } else {
      this.tagsUtil.removeSelectedTag(navTag.tag);
    }
  }

  private setObserver(): void {
    this.accounts$ = this.accountsQuery.select(state => state.accounts);
    this.currentAccount$ = this.accountsQuery.select(state => state.currentAccount);
    this.tags$ = this.tagsQuery.select(state => state.navTags);
  }

  // private setCurrentAccountItems() {
  //   // get current account.
  //   // show empty state if accounts is none.
  //   // get current account items from firestore.
  // }

  // private setInitalData() {
  //   const accounts: Account[] = this.getAccounts();
  //   accounts.forEach(({ id, name, imgUrl }: Account) => {
  //     this.accountsService.add(id, name, imgUrl);
  //   });
  // }

  // mock
  private getItems(): Item[] {
    return [
      {
        id: '1',
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
        id: '2',
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
        id: '3',
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

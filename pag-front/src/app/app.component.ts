import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// service or store
import { AppUtilService } from './app-util.service';
import { AccountsService, AccountsQuery } from 'src/app/store/accounts/state';
import { TagsService, TagsQuery, TagsState } from 'src/app/store/tags/state';
import { ItemsQuery, ItemsService } from 'src/app/store/items/state';

// interface
import { Account } from 'src/app/components/molecules/account-name/account-name.component'
import { AccountListCard } from 'src/app/components/organisms/account-list-card/account-list-card.component';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { Item } from 'src/app/components/organisms/item/item.component';

@Component({
  selector: 'pag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private readonly DEFAULT_TITLE = 'All';

  items$: Observable<Item[]>;
  tags$: Observable<NavTag[]>;
  selectedTags$: Observable<string[]>;
  loading$: Observable<boolean>;

  itemsTitle: string;
  accountListCard: AccountListCard;
  sortedTags: NavTag[];
  initializedNavTags: boolean;
  accountsIsNotRegisted: boolean;
  loadedItems: boolean;
  loadingMessage: string;
  itemIsEmpty: boolean;

  private accounts$: Observable<Account[]>;
  private currentAccount$: Observable<Account>;

  constructor(
    private appUtil: AppUtilService,
    private accountsService: AccountsService,
    private accountsQuery: AccountsQuery,
    private tagsService: TagsService,
    private tagsQuery: TagsQuery,
    private itemsQuery: ItemsQuery,
    private itemsService: ItemsService
  ) {
    this.sortedTags = [];
    this.initializedNavTags = false;
    this.itemsTitle = this.DEFAULT_TITLE;
    this.accountsIsNotRegisted = false;
    this.itemIsEmpty = false;
    this.onClickedAccount = this.onClickedAccount.bind(this);
    this.onClickedTag = this.onClickedTag.bind(this);
    this.onClickedInitializeAccount = this.onClickedInitializeAccount.bind(this);
    this.setObserver();
  }

  ngOnInit(): void {
    // this.accountsService.setInitialAccounts(); // for debug
    this.accounts$.subscribe(accounts => {
      if (!(accounts && 0 < accounts.length)) { this.accountsIsNotRegisted = true; }
      this.accountListCard = {
        ...this.accountListCard,
        accounts
      };
    });
    this.currentAccount$.subscribe(account => {
      this.initializedNavTags = false;
      this.itemsService.setItemsByAccount(account);
      this.accountListCard = {
        ...this.accountListCard,
        currentAccount: account
      };
    });
    this.items$.subscribe(items => {
      if (this.loadedItems && items && 0 === items.length) {
        this.itemIsEmpty = true;
        return;
      }
      if (this.initializedNavTags) {
        const existNavTags: NavTag[] = this.appUtil.generateNavTagsFromItems(items);
        const navTags: NavTag[] = this.appUtil.mergeMasterNavTag(existNavTags);
        this.tagsService.setTags(navTags);
      } else {
        const navTags: NavTag[] = this.appUtil.generateNavTagsFromItems(items);
        this.tagsService.setTags(navTags);
        if (0 < items.length) { this.initializedNavTags = true; }
      }
    });
    this.tags$.subscribe(async(navTags) => {
      if (this.initializedNavTags) {
        await this.appUtil.sleepByPromise(200);
      }
      this.sortedTags = this.appUtil.sortNavTags(navTags);
    });
    this.selectedTags$.subscribe(tags => {
      this.itemsTitle = tags && 0 < tags.length ? tags.join(' / ') : this.DEFAULT_TITLE;
      this.itemsService.filterItemsByTags(tags);
    });
    this.loading$.subscribe(loading => this.loadedItems = !loading);
  }

  onClickedAccount(...args: any[]): void {
    const ACCOUNT_INDEX = 0;
    const account: Account = args[ACCOUNT_INDEX];
    const current: Account = this.accountsQuery.getSnapshot().currentAccount;
    if (account.id !== current.id) {
      this.accountsService.changeCurrentAccount(account);
    }
  }

  onClickedTag(...args: any[]): void {
    const NAV_TAG_INDEX = 0;
    const navTag: NavTag = args[NAV_TAG_INDEX];
    if (navTag.selected) {
      this.tagsService.addSelectedTag(navTag.tag);
    } else {
      this.tagsService.removeSelectedTag(navTag.tag);
    }
  }

  async onClickedInitializeAccount(...args: any[]): Promise<void> {
    const ACCOUNT_INDEX = 0;
    if (args && args[ACCOUNT_INDEX]) {
      this.itemsService.setLoading(true);
      this.loadingMessage = 'アカウントデータ取得中...';
      this.accountsIsNotRegisted = false;
      await this.appUtil.sleepByPromise(1500);
      this.accountsService.setAccounts([args[ACCOUNT_INDEX]]);
    }
  }

  private setObserver(): void {
    this.accounts$ = this.accountsQuery.select(state => state.accounts);
    this.currentAccount$ = this.accountsQuery.select(state => state.currentAccount);
    this.tags$ = this.tagsQuery.select(state => state.navTags);
    this.selectedTags$ = this.tagsQuery.select(state => state.selectedTags);
    this.items$ = this.itemsQuery.select(state => state.filtered);
    this.loading$ = this.itemsQuery.selectLoading();
  }
}

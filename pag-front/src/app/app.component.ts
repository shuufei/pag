import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

// service or store
import { AppUtilService } from './app-util.service';
import { AccountsService, AccountsQuery } from 'src/app/store/accounts/state';
import { TagsService, TagsQuery } from 'src/app/store/tags/state';
import { ItemsQuery, ItemsService } from 'src/app/store/items/state';

// interface
import { Account } from 'src/app/components/molecules/account-name/account-name.component'
import { AccountListCard } from 'src/app/components/organisms/account-list-card/account-list-card.component';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { Item } from 'src/app/components/organisms/item/item.component';

// constant
import { SortOption } from 'src/app/components/organisms/sort-option-card/sort-option-card.component';

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
  accountsIsNotRegisted: boolean;
  loadedItems: boolean;
  loadingMessage: string;
  itemIsEmpty: boolean;
  existSelectedTags: boolean;
  isOpenAccountEditDialog: boolean;
  latestSort: boolean;  // TODO: sortの状態もAkitaで管理

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
    this.itemsTitle = this.DEFAULT_TITLE;
    this.accountsIsNotRegisted = false;
    this.itemIsEmpty = false;
    this.existSelectedTags = false;
    this.isOpenAccountEditDialog = false;
    this.accountListCard = { accounts: [], currentAccount: null };
    this.latestSort = true;
    this.setEvent();
    this.setObserver();
  }

  async ngOnInit(): Promise<void> {
    // this.accountsService.setInitialAccounts(); // for debug
    await this.setPreviousData();
    this.setSubscription();
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

  onClickedReset(): void {
    this.tagsService.setSelectedTags([]);
  }

  openAccountEditDialog(): void {
    this.isOpenAccountEditDialog = true;
  }

  closeAccountEditDialog(): void {
    this.isOpenAccountEditDialog = false;
  }

  onAddAccount(account: Account): void {
    this.accountsService.addAccount(account);
  }

  onRemoveAccount(account: Account): void {
    this.accountsService.removeAccount(account);
  }

  onChangeSort(sort): void {
    const currentItems = [ ...this.itemsQuery.getSnapshot().filtered ];
    let items: Item[];
    switch (sort) {
      case SortOption.latest:
        this.latestSort = true;
        items = this.sortItemsByLatest(currentItems);
        break;
      case SortOption.oldest:
        this.latestSort = false;
        items = this.sortItemsByOldest(currentItems);
        break;
    }
    if (items && 0 < items.length) {
      this.itemsService.setFilteredItems(items);
    }
  }

  onClickItem(...args): void {
    const ITEM_INDEX = 0;
    window.open(args[ITEM_INDEX].url);
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

  private setEvent(): void {
    this.onClickedAccount = this.onClickedAccount.bind(this);
    this.onClickedTag = this.onClickedTag.bind(this);
    this.onClickedInitializeAccount = this.onClickedInitializeAccount.bind(this);
    this.onClickedReset = this.onClickedReset.bind(this);
    this.openAccountEditDialog = this.openAccountEditDialog.bind(this);
    this.onAddAccount = this.onAddAccount.bind(this);
    this.onRemoveAccount = this.onRemoveAccount.bind(this);
    this.onChangeSort = this.onChangeSort.bind(this);
  }

  private async setPreviousData(): Promise<void> {
    const { accounts, currentAccount } = this.accountsQuery.getSnapshot();
    const { navTags, selectedTags } = this.tagsQuery.getSnapshot();
    if (0 < accounts.length && currentAccount) {
      this.accountListCard = { accounts, currentAccount };
      let items: Item[];
      let filtered: Item[];
      this.existSelectedTags = selectedTags && 0 < selectedTags.length;
      if (this.existSelectedTags) { // 選択ずみのtagがある場合は、filterをかける
        items = await this.itemsService.getItemsByAccount(currentAccount);
        filtered = this.itemsService.getFilteredItemsByMasterAndTags(items, selectedTags);
        this.itemsTitle = selectedTags.join(' / ');
      } else {
        items = await this.itemsService.getItemsByAccount(currentAccount);
        filtered = items;
        this.itemsTitle = this.DEFAULT_TITLE;
      }
      this.itemsService.setStore(items, this.sortItemsByLatest(filtered));
      const navTagsOfItems: NavTag[] = this.appUtil.generateNavTagsFromItems(filtered);
      const mergedNavTags: NavTag[] = this.appUtil.mergeMasterNavTag(navTagsOfItems);
      this.sortedTags = 0 < navTags.length ? this.appUtil.sortNavTags(mergedNavTags) : this.appUtil.sortNavTags(navTagsOfItems);
      this.tagsService.setTags(this.sortedTags);
    } else {
      this.accountsIsNotRegisted = true;
    }
  }

  private setSubscription(): void {
    // 初回のデータ分は処理済みなので無視
    this.accounts$.pipe(skip(1)).subscribe(accounts => {
      this.accountListCard = {
        ...this.accountListCard,
        accounts
      };
    });
    this.currentAccount$.pipe(skip(1)).subscribe(async(account) => {
      const items: Item[] = await this.itemsService.getItemsByAccount(account);
      const navTags: NavTag[] = this.appUtil.generateNavTagsFromItems(items);
      this.tagsService.setStore(navTags, []);
      const sorted: Item[] = this.latestSort ? this.sortItemsByLatest(items) : this.sortItemsByOldest(items);
      this.itemsService.setStore(items, sorted);
      this.accountListCard = {
        ...this.accountListCard,
        currentAccount: account
      };
    });
    this.items$.pipe(skip(1)).subscribe(items => {
      if (this.loadedItems && items && 0 === items.length) {
        this.itemIsEmpty = true;
        return;
      }
      this.itemIsEmpty = false;
      const existNavTags: NavTag[] = this.appUtil.generateNavTagsFromItems(items);
      const navTags: NavTag[] = this.appUtil.mergeMasterNavTag(existNavTags);
      this.tagsService.setTags(navTags);
    });
    this.tags$.pipe(skip(1)).subscribe(async(navTags) => {
      await this.appUtil.sleepByPromise(200);
      this.sortedTags = this.appUtil.sortNavTags(navTags);
    });
    this.selectedTags$.pipe(skip(1)).subscribe(tags => {
      this.existSelectedTags = tags && 0 < tags.length;
      this.itemsTitle = this.existSelectedTags ? tags.join(' / ') : this.DEFAULT_TITLE;
      this.itemsService.filterItemsByTags(tags);
    });
    this.loading$.pipe(skip(1)).subscribe(loading => this.loadedItems = !loading);
  }

  private sortItemsByLatest(items: Item[]): Item[] {
    return this.appUtil.sortItemsByCreatedAt(items, false);
  }

  private sortItemsByOldest(items: Item[]): Item[] {
    return this.appUtil.sortItemsByCreatedAt(items, true);
  }
}

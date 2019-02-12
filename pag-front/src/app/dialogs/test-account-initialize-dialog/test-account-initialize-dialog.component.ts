import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService, GetAccountResponse } from 'src/app/shared/api.service';
import { Account } from 'src/app/components/molecules/account-name/account-name.component';
import { ItemsService } from 'src/app/store/items/state';

@Component({
  selector: 'pag-test-account-initialize-dialog',
  templateUrl: './test-account-initialize-dialog.component.html',
  styleUrls: ['./test-account-initialize-dialog.component.scss', '../dialog-styles.scss']
})
export class TestAccountInitializeDialogComponent implements OnInit {
  @Input() open: boolean;
  @Input() setAccountEvent: Function;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  readonly TEST_ACCOUNT = '@digital_fei';

  step: string;
  accountId: string;
  account: GetAccountResponse;
  error: boolean;

  constructor(
    private api: ApiService,
    private itemsService: ItemsService
  ) {
    this.setAccount = this.setAccount.bind(this);
  }

  ngOnInit() {
  }

  async setTestAccount(): Promise<void> {
    this.itemsService.setLoading(true);
    this.close.emit();
    this.account = await this.api.getAccount(this.TEST_ACCOUNT);
    this.setAccount();
  }

  setAccount(): void {
    const account: Account = {
      id: this.account.id,
      name: this.account.accountId,
      imgUrl: this.account.img
    };
    if (this.setAccountEvent) {
      this.setAccountEvent(account);
    }
  }

}

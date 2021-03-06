import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService, GetAccountResponse } from 'src/app/shared/api.service';
import { Account } from 'src/app/components/molecules/account-name/account-name.component';
import { ItemsService } from 'src/app/store/items/state';

@Component({
  selector: 'pag-account-initialize-dialog',
  templateUrl: './account-initialize-dialog.component.html',
  styleUrls: ['./account-initialize-dialog.component.scss', '../dialog-styles.scss']
})
export class AccountInitializeDialogComponent implements OnInit {
  @Input() open: boolean;
  @Input() setAccountEvent: Function;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  readonly STEP = {
    accountInput: 'accountInput',
    accountSearching: 'accounSearching',
    accountConfirm: 'accountConfirm',
    accountSetting: 'accountSetting'
  };
  readonly CONFIRM_CONTENTS_WIDTH = '200px';
  readonly TEST_ACCOUNT = '@hey_degital';

  step: string;
  accountId: string;
  account: GetAccountResponse;
  error: boolean;

  constructor(
    private api: ApiService,
    private itemsService: ItemsService
  ) {
    this.step = this.STEP.accountInput;
    this.setAccount = this.setAccount.bind(this);
  }

  ngOnInit() {
  }

  onChangeAccountId(accountId: string): void {
    this.accountId = accountId;
  }

  moveStep(step: string): void {
    this.step = step;
  }

  async searchAccount(): Promise<void> {
    this.step = this.STEP.accountSearching;
    try {
      this.account = await this.api.getAccount(this.accountId);
      this.step = this.STEP.accountConfirm;
    } catch (error) {
      this.error = true;
      this.step = this.STEP.accountInput;
    }
  }

  toInitialInputStep(): void {
    this.accountId = undefined;
    this.error = false;
    this.step = this.STEP.accountInput;
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

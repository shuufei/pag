import { Component, OnInit, Input } from '@angular/core';

import { ApiService, GetAccountResponse } from 'src/app/shared/api.service';

@Component({
  selector: 'pag-account-initialize-dialog',
  templateUrl: './account-initialize-dialog.component.html',
  styleUrls: ['./account-initialize-dialog.component.scss']
})
export class AccountInitializeDialogComponent implements OnInit {
  @Input() open: boolean;
  @Input() startTestAccountEvent: Function;

  readonly STEP = {
    accountInput: 'accountInput',
    accountSearching: 'accounSearching',
    accountConfirm: 'accountConfirm',
    accountSetting: 'accountSetting'
  };
  readonly CONFIRM_CONTENTS_WIDTH = '200px';

  step: string;
  accountId: string;
  account: GetAccountResponse;
  error: boolean;

  constructor(
    private api: ApiService
  ) {
    this.step = this.STEP.accountInput;
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

}

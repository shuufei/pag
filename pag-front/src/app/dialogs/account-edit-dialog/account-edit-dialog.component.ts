import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService, GetAccountResponse } from 'src/app/shared/api.service';
import { Account } from 'src/app/components/molecules/account-name/account-name.component';

@Component({
  selector: 'pag-account-edit-dialog',
  templateUrl: './account-edit-dialog.component.html',
  styleUrls: ['./account-edit-dialog.component.scss', '../dialog-styles.scss']
})
export class AccountEditDialogComponent implements OnInit {
  @Input() open: boolean;
  @Input() accounts: Account[];
  @Input() removeAccountEvent: Function;
  @Input() addAccountEvent: Function;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  readonly STEP = {
    top: 'top',
    removeConfirm: 'removeConfirm',
    add: 'add',
    accountSearching: 'accounSearching',
    addConfirm: 'addConfirm'
  };
  readonly CONTENTS_WIDTH = '275px';

  step: string;
  resultMessage: string;
  accountOfRemoveConfirm: Account;
  accountId: string;
  newAccount: Account;
  errorOfAddAccount: boolean;

  constructor(
    private api: ApiService
  ) {
    this.step = this.STEP.top;
    this.errorOfAddAccount = false;
    this.toAddStep = this.toAddStep.bind(this);
    this.addAccount = this.addAccount.bind(this);
    this.removeAccount = this.removeAccount.bind(this);
  }

  ngOnInit() {
  }

  toTopStep(): void { this.step = this.STEP.top; }

  toAddStep(): void { this.step = this.STEP.add; }

  toRemoveStep(account: Account): void {
    this.step = this.STEP.removeConfirm;
    this.accountOfRemoveConfirm = account;
  }

  onChangeAccountId(accountId: string): void {
    this.accountId = accountId;
  }

  toInitialTopStep(): void  {
    this.initialize();
    this.toTopStep();
  }

  toInitialAddStep(): void {
    this.initialize();
    this.toAddStep();
  }

  addAccount(): void {
    if (this.addAccountEvent) { this.addAccountEvent(); }
    this.initialize();
    this.resultMessage = '追加しました。';
    this.toTopStep();
  }

  removeAccount(): void {
    if (this.removeAccountEvent) { this.removeAccountEvent(); }
    this.initialize();
    this.resultMessage = '削除しました。';
    this.toTopStep();
  }

  closeDialog(): void {
    this.initialize();
    this.close.emit();
  }

  async searchAccount(): Promise<void> {
    this.step = this.STEP.accountSearching;
    try {
      this.newAccount = await this.api.getAccount(this.accountId);
      this.step = this.STEP.addConfirm;
    } catch (error) {
      this.errorOfAddAccount = true;
      this.step = this.STEP.add;
    }
  }

  private initialize(): void {
    this.newAccount = undefined;
    this.accountId = undefined;
    this.accountOfRemoveConfirm = undefined;
    this.resultMessage = undefined;
    this.errorOfAddAccount = false;
  }

}

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
    loading: 'loading',
    addConfirm: 'addConfirm'
  };
  readonly CONTENTS_WIDTH = '275px';

  step: string;
  resultMessage: string;
  accountOfRemoveConfirm: Account;
  accountId: string;
  newAccount: GetAccountResponse;
  errorOfAddAccount: boolean;
  loadingMessage: string;

  constructor(
    private api: ApiService
  ) {
    this.step = this.STEP.top;
    this.errorOfAddAccount = false;
    this.loadingMessage = '読み込み中...';
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
    if (this.addAccountEvent) {
      this.addAccountEvent({
        id: this.newAccount.id,
        name: this.newAccount.accountId,
        imgUrl: this.newAccount.img
      });
    }
    const accountName = this.newAccount.accountId;
    this.initialize();
    this.loadingMessage = 'アカウント追加中...';
    this.step = this.STEP.loading;
    this.resultMessage = `${accountName}を追加しました。`;
    setTimeout(() => {
      this.toTopStep();
    }, 1500);
  }

  removeAccount(): void {
    if (this.removeAccountEvent) { this.removeAccountEvent(this.accountOfRemoveConfirm); }
    const accountName = this.accountOfRemoveConfirm.name;
    this.initialize();
    this.loadingMessage = 'アカウント削除中...';
    this.step = this.STEP.loading;
    this.resultMessage = `${accountName}を削除しました。`;
    setTimeout(() => {
      this.toTopStep();
    }, 1500);
  }

  closeDialog(): void {
    this.initialize();
    this.close.emit();
    this.step = this.STEP.top;
  }

  async searchAccount(): Promise<void> {
    this.loadingMessage = 'Tweitterアカウントを検索中...';
    this.step = this.STEP.loading;
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

import { Component, OnInit, Input } from '@angular/core';

import { Account } from 'src/app/components/molecules/account-name/account-name.component';

@Component({
  selector: 'pag-account-list-card',
  templateUrl: './account-list-card.component.html',
  styleUrls: ['./account-list-card.component.scss']
})
export class AccountListCardComponent implements OnInit {
  @Input() accounts: Account[];
  @Input() currentAccount: Account;
  @Input() accountClickEvent: Function;
  @Input() addClickEvent: Function;

  open: boolean;
  openHeightClass: string;

  constructor() {
    this.open = false;
  }

  ngOnInit() {
    if (this.accounts && MAX_ACCOUNT_LENGTH < this.accounts.length) {
      this.accounts = this.accounts.slice(0, MAX_ACCOUNT_LENGTH);
    }
  }

  toggleOpen(): void {
    this.open = !this.open;
    if (this.open) {
      this.openHeightClass = `open-${this.accounts.length}`;
    } else {
      this.openHeightClass = undefined;
    }
  }

}

export const MAX_ACCOUNT_LENGTH = 5;
export interface AccountListCard {
  accounts: Account[];
  currentAccount: Account;
  accountClickEvent?: Function;
  addClickEvent?: Function;
}

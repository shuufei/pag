import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Account } from 'src/app/components/molecules/account-name/account-name.component';

@Component({
  selector: 'pag-account-list-card',
  templateUrl: './account-list-card.component.html',
  styleUrls: ['./account-list-card.component.scss'],
  animations: [
    trigger('cardState', [
      state('open', style({
        opacity: 1
      })),
      state('close', style({
        opacity: 0
      })),
      transition('close <=> open', animate('300ms 5000ms ease-out'))
    ])
  ]
})
export class AccountListCardComponent implements OnInit {
  @Input() accounts: Account[];
  @Input() currentAccount: Account;

  open: boolean;
  openHeightClass: string;
  cardState: string;

  constructor() {
    this.open = false;
    this.cardState = 'close';
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
      this.cardState = 'open';
    } else {
      this.openHeightClass = undefined;
      this.cardState = 'close';
    }
  }

}

export const MAX_ACCOUNT_LENGTH = 5;

import { Component, OnInit, Input } from '@angular/core';

import { AccountListCard } from 'src/app/components/organisms/account-list-card/account-list-card.component';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';

@Component({
  selector: 'pag-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() accountListCard: AccountListCard;
  @Input() navTags: NavTag[];
  @Input() navTagClickEvent: Function;

  constructor() { }

  ngOnInit() {
  }

  onChangeInput(text: string) {
    // TODO: search
    console.log('change input: ', text);
  }

}


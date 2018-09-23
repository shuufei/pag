import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as uuidv4 from 'uuid/v4';

import { AccountListCard } from 'src/app/components/organisms/account-list-card/account-list-card.component';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';

@Component({
  selector: 'pag-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnChanges {
  @Input() accountListCard: AccountListCard;
  @Input() navTags: NavTag[];
  @Input() navTagClickEvent: Function;
  @Input() accountClickEvent: Function;
  @Input() addAccountClickEvent: Function;

  inputResetToken: string;
  filteredNavTags: NavTag[];

  constructor() { }

  ngOnInit() {
    this.inputResetToken = uuidv4();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.navTags) {
      this.inputResetToken = uuidv4();
      this.filteredNavTags = changes.navTags.currentValue;
    }
  }

  onChangeInput(text: string) {
    if (typeof text === 'string' ) {
      this.filterNavTags(text);
    }
  }

  private filterNavTags(key: string): void {
    if (!this.navTags) { return; }
    this.filteredNavTags = this.navTags.filter((navTag: NavTag) => {
      const re = new RegExp(key, 'i');
      return re.test(navTag.tag);
    });
  }

}


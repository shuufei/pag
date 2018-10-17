import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';

@Component({
  selector: 'pag-tag-list-card',
  templateUrl: './tag-list-card.component.html',
  styleUrls: ['./tag-list-card.component.scss']
})
export class TagListCardComponent implements OnInit, OnChanges {
  @Input() navTags: NavTag[];
  @Input() navTagClickEvent: Function;
  @Input() isShowResetBtn: boolean;
  @Input() resetBtnClickEvent: Function;

  filteredNavTags: NavTag[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.navTags) {
      this.filteredNavTags = changes.navTags.currentValue;
    }
  }

  onChangeInput(text: string): void {
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

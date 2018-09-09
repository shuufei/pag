import { Component, OnInit, Input } from '@angular/core';

import { color, options } from 'src/app/components/atoms/txt/txt-values';

@Component({
  selector: 'pag-nav-tag',
  templateUrl: './nav-tag.component.html',
  styleUrls: ['./nav-tag.component.scss']
})
export class NavTagComponent implements OnInit {
  @Input() tag: string;
  @Input() count: number;
  @Input() status: SelectStatus;
  @Input() clickEvent: Function;

  options = options;
  txtColor: string;

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  ngOnInit() {
    switch (this.status) {
      case SelectStatuses.selected:
        this.txtColor = color.white;
        break;
      case SelectStatuses.disable:
        this.txtColor = color.primaryGray;
        break;
      default:
        this.txtColor = color.black;
        break;
    }
  }

  onClick(event: Event): void {
    event.stopPropagation();
    if (this.clickEvent && this.status !== SelectStatuses.disable) {
      const navTag: NavTag = {
        tag: this.tag,
        count: this.count,
        status: this.status
      };
      this.clickEvent(navTag);
    }
  }

}

export type SelectStatus = 'selected' | 'selectable' | 'disable';
export const SelectStatuses = {
  selectable: 'selectable',
  selected: 'selected',
  disable: 'disable'
};
export interface NavTag {
  tag: string;
  count: number;
  status: SelectStatus;
}


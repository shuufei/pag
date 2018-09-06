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

  options = options;
  txtColor: string;

  constructor() { }

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

}

export type SelectStatus = 'selected' | 'selectable' | 'disable';
export const SelectStatuses = {
  selectable: 'selectable',
  selected: 'selected',
  disable: 'disable'
};

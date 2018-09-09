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
  @Input() selected: boolean;
  @Input() disable: boolean;
  @Input() clickEvent: Function;

  options = options;
  txtColor: string;

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  ngOnInit() {
    this.setTxtColor();
  }

  onClick(event: Event): void {
    event.stopPropagation();
    if (!this.disable) {
      this.selected = this.selected ? false : true;
      this.setTxtColor();
      if (this.clickEvent) {
        const navTag: NavTag = {
          tag: this.tag,
          count: this.count,
          selected: this.selected,
          disable: this.disable
        };
        this.clickEvent(navTag);
      }
    }
  }

  private setTxtColor(): void {
    if (this.disable) {
      this.txtColor = color.primaryGray;
    } else {
      if (this.selected) {
        this.txtColor = color.white;
      } else {
        this.txtColor = color.black;
      }
    }
  }

}

export interface NavTag {
  tag: string;
  count: number;
  selected?: boolean;
  disable?: boolean;
}


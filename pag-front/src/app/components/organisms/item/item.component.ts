import { Component, OnInit, Input } from '@angular/core';

import { Label } from 'src/app/components/atoms/label/label.component';
import { iconNames } from 'src/app/components/atoms/icon/icon-values';

@Component({
  selector: 'pag-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() comment: string;
  @Input() url: string;
  @Input() thumbUrl: string;
  @Input() labels: Label[];
  @Input() star: boolean;
  @Input() clickEvent: Function;
  @Input() starClickEvent: Function;

  starIcon: string;

  constructor() {
    this.starIcon = iconNames.starDeactive;
    this.onClick = this.onClick.bind(this);
    this.onClickStar = this.onClickStar.bind(this);
  }

  ngOnInit() {
    this.setStarIcon();
  }

  onClick() {
    if (this.clickEvent) {
      const item: Item = this.getItemObj();
      this.clickEvent(item);
    }
  }

  onClickStar(event: Event) {
    event.stopPropagation();
    this.star = !this.star;
    this.setStarIcon();
    if (this.starClickEvent) {
      const item: Item = this.getItemObj();
      this.starClickEvent(item);
    }
  }

  private setStarIcon(): void {
    this.starIcon = this.star ? iconNames.starActive : iconNames.starDeactive;
  }

  private getItemObj(): Item {
    return {
      id: this.id,
      title: this.title,
      comment: this.comment,
      url: this.url,
      thumbUrl: this.thumbUrl,
      labels: this.labels,
      star: this.star
    };
  }

}

export interface Item {
  id: string;
  title: string;
  comment: string;
  url: string;
  thumbUrl: string;
  labels: Label[];
  star: boolean;
}

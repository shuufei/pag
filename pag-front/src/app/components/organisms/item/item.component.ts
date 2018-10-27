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
  @Input() tags: Label[];
  @Input() star: boolean;
  @Input() clickEvent: Function;
  @Input() createdAt: Date;

  openLink: string = iconNames.openLink;

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  ngOnInit() {
  }

  onClick() {
    if (this.clickEvent) {
      const item: Item = this.getItemObj();
      this.clickEvent(item);
    }
  }

  private getItemObj(): Item {
    return {
      id: this.id,
      title: this.title,
      comment: this.comment,
      url: this.url,
      thumbUrl: this.thumbUrl,
      tags: this.tags,
      star: this.star,
      createdAt: this.createdAt
    };
  }

}

export interface Item {
  id: string;
  title: string;
  comment: string;
  url: string;
  thumbUrl: string;
  tags: Label[];
  star: boolean;
  createdAt: Date;
}

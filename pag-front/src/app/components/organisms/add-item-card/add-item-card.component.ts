import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-add-item-card',
  templateUrl: './add-item-card.component.html',
  styleUrls: ['./add-item-card.component.scss']
})
export class AddItemCardComponent implements OnInit {
  @Input() addItemEvent: Function;
  @Input() enable: boolean;

  url: string;

  constructor() {
    this.addItem = this.addItem.bind(this);
  }

  ngOnInit() {
  }

  onChangeUrl(url: string): void {
    if (!url) { return; }
    this.url = url;
  }

  onChangeTag(tag): void {}

  addItem(): void {
    this.addItemEvent(this.url);
  }

  openHowToPage(): void {
    // TODO: specify url
    window.open();
  }

}

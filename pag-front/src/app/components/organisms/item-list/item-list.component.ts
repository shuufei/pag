import { Component, OnInit, Input } from '@angular/core';

import { Item } from 'src/app/components/organisms/item/item.component';

@Component({
  selector: 'pag-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];
  @Input() itemClickEvent: Function;

  constructor() { }

  ngOnInit() {
  }

}

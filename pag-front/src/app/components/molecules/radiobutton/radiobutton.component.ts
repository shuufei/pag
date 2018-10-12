import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as uuidv4 from 'uuid/v4';

import { iconNames } from 'src/app/components/atoms/icon/icon-values';

@Component({
  selector: 'pag-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit, OnChanges {
  @Input() items: string[];
  @Input() defaultItem: string;
  @Output() changeItem: EventEmitter<string> = new EventEmitter();

  radioBtnItems: ExpandItem[];
  form;

  constructor() {
    this.radioBtnItems = [];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const items = changes.items.currentValue;
    if (items) {
      items.forEach(item => {
        const icon = item === this.defaultItem ? iconNames.radiobtnActive : iconNames.radiobtnDeactive;
        this.radioBtnItems.push({
          text: item,
          id: `item-${uuidv4()}`,
          icon
        });
      });
    }
    const defaultItem = changes.defaultItem.currentValue;
    if (defaultItem) {
      this.form = new FormGroup({
        item: new FormControl(defaultItem)
      });
    }
  }

  onChangeItem(): void {
    this.radioBtnItems.forEach((item, i) => {
      if (item.text === this.form.value.item) {
        this.radioBtnItems[i].icon = iconNames.radiobtnActive;
      } else {
        this.radioBtnItems[i].icon = iconNames.radiobtnDeactive;
      }
    });
    this.changeItem.emit(this.form.value.item);
  }

}

interface ExpandItem {
  text: string;
  id: string;
  icon: string;
}

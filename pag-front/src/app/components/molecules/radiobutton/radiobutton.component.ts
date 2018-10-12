import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as uuidv4 from 'uuid/v4';

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
        this.radioBtnItems.push({
          text: item,
          id: `item-${uuidv4()}`
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
    this.changeItem.emit(this.form.value.item);
  }

}

interface ExpandItem {
  text: string;
  id: string;
}

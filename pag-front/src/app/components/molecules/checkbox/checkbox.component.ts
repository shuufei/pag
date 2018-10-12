import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { iconNames } from 'src/app/components/atoms/icon/icon-values';

@Component({
  selector: 'pag-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() item: string;
  @Input() checked: boolean;
  @Output() changeCheck: EventEmitter<boolean> = new EventEmitter();

  checkedIcon = iconNames.checkboxActive;
  nocheckedIcon = iconNames.checkboxDeactive;

  constructor() { }

  ngOnInit() {
  }

  onChangeCheck(): void {
    this.checked = !this.checked;
    this.changeCheck.emit(this.checked);
  }

}

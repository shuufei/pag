import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pag-input-txt',
  templateUrl: './input-txt.component.html',
  styleUrls: ['./input-txt.component.scss']
})
export class InputTxtComponent implements OnInit, OnChanges {
  @Input() placeholder: string;
  @Input() defaultValue: string;
  @Input() resetToken: string;
  @Output() input: EventEmitter<string> = new EventEmitter();

  text: string;

  constructor() { }

  ngOnInit() {
    this.setDefaultValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.resetToken) {
      this.setDefaultValue();
      this.onChangeInput(this.text);
    }
  }

  onChangeInput(text: string): void {
    this.input.emit(text);
  }

  setDefaultValue(): void {
    this.text = this.defaultValue ? this.defaultValue : '';
  }

}

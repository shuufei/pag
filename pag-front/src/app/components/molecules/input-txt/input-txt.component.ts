import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pag-input-txt',
  templateUrl: './input-txt.component.html',
  styleUrls: ['./input-txt.component.scss']
})
export class InputTxtComponent implements OnInit {
  @Input() placeholder: string;
  @Output() input: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangeInput(text): void {
    this.input.emit(text);
  }

}

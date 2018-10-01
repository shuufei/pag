import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pag-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() label: string;
  @Input() active: boolean;
  @Input() clickEvent: Function;
  @Input() size: ButtonSize;
  @Input() type: ButtonType;

  styleClasses: string[];

  DEFAULT_SIZE: ButtonSize = 'm';
  DEFAULT_TYPE: ButtonType = 'block';

  constructor() {
    this.styleClasses = [];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setClasses();
  }

  setClasses(): void {
    const classes: string[] = [];
    if (this.active === false) { classes.push('deactive'); }
    const type: ButtonType = this.type ? this.type : this.DEFAULT_TYPE;
    const size: ButtonSize = this.size ? this.size : this.DEFAULT_SIZE;
    this.styleClasses = [ ...classes, type, size ];
  }

}

type ButtonSize = 's' | 'm' | 'l';
type ButtonType = 'block' | 'inline';

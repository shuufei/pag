import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() active: boolean;
  @Input() clickEvent: Function;

  constructor() { }

  ngOnInit() {
  }

  isActive(): boolean {
    return this.active ? this.active : false;
  }

  onClick(event): void {
    console.log('click button: ', event);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'pag-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        top: '8%',
        opacity: 0
      })),
      transition('void => *', [
        animate('0.3s ease-out')
      ]),
      transition('* => void', [
        animate('0.25s ease-out')
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {
  @Input() open: boolean;
  @Input() showCloseIcon: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

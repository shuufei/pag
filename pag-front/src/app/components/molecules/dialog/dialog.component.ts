import { Component, OnInit, Input } from '@angular/core';
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
        top: '12%',
        opacity: 0
      })),
      transition('void => *', [
        animate('0.3s ease-out')
      ]),
      transition('* => void', [
        animate('0.3s ease-out')
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {
  @Input() open: boolean;

  constructor() { }

  ngOnInit() {
  }

}

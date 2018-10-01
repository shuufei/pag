import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-account-initialize-dialog',
  templateUrl: './account-initialize-dialog.component.html',
  styleUrls: ['./account-initialize-dialog.component.scss']
})
export class AccountInitializeDialogComponent implements OnInit {
  @Input() open: boolean;

  constructor() { }

  ngOnInit() {
  }

}

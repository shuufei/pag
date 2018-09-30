import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-loading-dialog',
  templateUrl: './loading-dialog.component.html',
  styleUrls: ['./loading-dialog.component.scss']
})
export class LoadingDialogComponent implements OnInit {
  @Input() open: boolean;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}

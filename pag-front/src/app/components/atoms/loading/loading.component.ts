import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() borderWidth: BorderWidth;

  constructor() { }

  ngOnInit() {
  }

}

type BorderWidth = 'light' | 'regular' | 'bold';

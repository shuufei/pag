import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-account-name',
  templateUrl: './account-name.component.html',
  styleUrls: ['./account-name.component.scss']
})
export class AccountNameComponent implements OnInit {
  @Input() name: string;
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {
  }

}

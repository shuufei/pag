import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-account-img',
  templateUrl: './account-img.component.html',
  styleUrls: ['./account-img.component.scss']
})
export class AccountImgComponent implements OnInit {
  @Input() url: string;

  readonly DEFAULT = 'assets/icon/user-icon.svg';

  constructor() { }

  ngOnInit() {
  }

  getUrl(): string { return this.url ? `url(${this.url})` : `url(${this.DEFAULT})`; }

}

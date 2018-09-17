import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-account-name',
  templateUrl: './account-name.component.html',
  styleUrls: ['./account-name.component.scss']
})
export class AccountNameComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() imgUrl: string;
  @Input() clickEvent: Function;

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  ngOnInit() {
  }

  onClick() {
    if (this.clickEvent) {
      this.clickEvent({id: this.id, name: this.name, imgUrl: this.imgUrl});
    }
  }

}

export interface TwitterAccount {
  twitterId: string;
  name: string;
  imgUrl?: string;
}

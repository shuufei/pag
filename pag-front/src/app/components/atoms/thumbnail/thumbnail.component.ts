import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  @Input() url: string;

  private readonly DEFAULT = 'assets/image/thumbnail.svg';

  constructor() { }

  ngOnInit() {
  }

  getUrl() {
    return this.url ? `url(${this.url})` : `url(${this.DEFAULT})`;
  }

}

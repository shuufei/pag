import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

  getUrl() { return `url(${this.url})`; }

}

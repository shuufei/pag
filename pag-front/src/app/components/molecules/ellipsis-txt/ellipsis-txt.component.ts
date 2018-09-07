import { Component, OnInit, Input } from '@angular/core';

import { options } from 'src/app/components/atoms/txt/txt-values';

@Component({
  selector: 'pag-ellipsis-txt',
  templateUrl: './ellipsis-txt.component.html',
  styleUrls: ['./ellipsis-txt.component.scss']
})
export class EllipsisTxtComponent implements OnInit {
  @Input() text: string;
  @Input() min: string;
  @Input() max: string;
  @Input() fix: string;
  @Input() size: string;
  @Input() weight: string;
  @Input() color: string;

  options = options;

  constructor() { }

  ngOnInit() {
  }

}

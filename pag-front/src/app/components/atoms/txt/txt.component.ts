import { Component, OnInit, Input } from '@angular/core';

import { size, weight, color } from './txt-values';

@Component({
  selector: 'pag-txt',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.scss']
})
export class TxtComponent implements OnInit {
  @Input() text: string;
  @Input() size: string;
  @Input() weight: string;
  @Input() color: string;
  @Input() options: string[];

  private readonly DEFAULT = {
    size: size.m,
    weight: weight.regular,
    color: color.black
  };

  classes: string[];

  constructor() { }

  ngOnInit() {
    const _size = this.size ? this.size : this.DEFAULT.size;
    const _weight = this.weight ? this.weight : this.DEFAULT.weight;
    const _color = this.color ? this.color : this.DEFAULT.color;
    const options = this.options ? this.options : [];
    this.classes = [ _size, _weight, _color, ...options ];
  }

}

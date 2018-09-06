import { Component, OnInit, Input } from '@angular/core';

import { iconPath } from './icon-values';

@Component({
  selector: 'pag-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

  getIconSrc() {
    const path = iconPath[this.icon];
    return path ? path : '';
  }

}

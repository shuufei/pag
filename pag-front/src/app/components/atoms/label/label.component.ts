import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() label: string;
  @Input() active: boolean;

  constructor() { }

  ngOnInit() {
  }

}

export interface Label {
  label: string;
  active: boolean;
}

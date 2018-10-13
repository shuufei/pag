import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-sort-option-card',
  templateUrl: './sort-option-card.component.html',
  styleUrls: ['./sort-option-card.component.scss']
})
export class SortOptionCardComponent implements OnInit {
  @Input() changeSortEvent: Function;

  constructor() { }

  ngOnInit() {
  }

}
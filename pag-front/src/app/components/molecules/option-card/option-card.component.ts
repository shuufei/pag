import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pag-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {
  @Input() title: string;
  @Input() size: OptionCardSize;

  open: boolean;

  constructor() {
    this.open = false;
  }

  ngOnInit() {
  }

  toggleOpen(): void {
    this.open = !this.open;
  }

  getOpenClasses(): string[] {
    const classes: (string | OptionCardSize)[] = [];
    if (this.open) { classes.push('open'); }
    classes.push(this.size ? this.size : 's');
    return classes;
  }

}

type OptionCardSize = 's' | 'm';

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

  toggleOpen(event): void {
    this.open = !this.open;
    event.stopPropagation();
  }

  getOpenClasses(): string[] {
    const classes: (string | OptionCardSize)[] = [];
    if (this.open) { classes.push('open'); }
    classes.push(this.size ? this.size : 's');
    return classes;
  }

  stopEvent(event): void {
    event.stopPropagation();
  }

}

type OptionCardSize = 'xs' | 's' | 'm' | 'l';

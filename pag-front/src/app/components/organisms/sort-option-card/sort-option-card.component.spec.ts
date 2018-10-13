import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortOptionCardComponent } from './sort-option-card.component';

describe('SortOptionCardComponent', () => {
  let component: SortOptionCardComponent;
  let fixture: ComponentFixture<SortOptionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortOptionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

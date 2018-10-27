import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListCardComponent } from './tag-list-card.component';

describe('TagListCardComponent', () => {
  let component: TagListCardComponent;
  let fixture: ComponentFixture<TagListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisTxtComponent } from './ellipsis-txt.component';

describe('EllipsisTxtComponent', () => {
  let component: EllipsisTxtComponent;
  let fixture: ComponentFixture<EllipsisTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllipsisTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

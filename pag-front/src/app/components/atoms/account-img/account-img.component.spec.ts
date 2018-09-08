import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountImgComponent } from './account-img.component';

describe('AccountImgComponent', () => {
  let component: AccountImgComponent;
  let fixture: ComponentFixture<AccountImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

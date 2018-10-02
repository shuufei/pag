import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInitializeDialogComponent } from './account-initialize-dialog.component';

describe('AccountInitializeDialogComponent', () => {
  let component: AccountInitializeDialogComponent;
  let fixture: ComponentFixture<AccountInitializeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInitializeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInitializeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

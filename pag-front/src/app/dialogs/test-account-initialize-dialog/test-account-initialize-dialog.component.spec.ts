import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAccountInitializeDialogComponent } from './test-account-initialize-dialog.component';

describe('TestAccountInitializeDialogComponent', () => {
  let component: TestAccountInitializeDialogComponent;
  let fixture: ComponentFixture<TestAccountInitializeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAccountInitializeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccountInitializeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

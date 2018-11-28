import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountInitializeDialogComponent } from 'src/app/dialogs/account-initialize-dialog/account-initialize-dialog.component';
import { AccountEditDialogComponent } from './account-edit-dialog/account-edit-dialog.component';
import { TestAccountInitializeDialogComponent } from './test-account-initialize-dialog/test-account-initialize-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  declarations: [
    AccountInitializeDialogComponent,
    AccountEditDialogComponent,
    TestAccountInitializeDialogComponent
  ],
  exports: [
    AccountInitializeDialogComponent,
    AccountEditDialogComponent,
    TestAccountInitializeDialogComponent
  ]
})
export class DialogsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountInitializeDialogComponent } from 'src/app/dialogs/account-initialize-dialog/account-initialize-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  declarations: [
    AccountInitializeDialogComponent
  ],
  exports: [
    AccountInitializeDialogComponent
  ]
})
export class DialogsModule { }

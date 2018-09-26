import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { NavTagComponent } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { EllipsisTxtComponent } from './ellipsis-txt/ellipsis-txt.component';
import { InputTxtComponent } from './input-txt/input-txt.component';
import { AccountNameComponent } from './account-name/account-name.component';
import { ButtonComponent } from './button/button.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NavTagComponent,
    EllipsisTxtComponent,
    InputTxtComponent,
    AccountNameComponent,
    ButtonComponent,
    DialogComponent
  ],
  exports: [
    NavTagComponent,
    EllipsisTxtComponent,
    InputTxtComponent,
    AccountNameComponent,
    ButtonComponent,
    DialogComponent
  ]
})
export class MoleculesModule { }

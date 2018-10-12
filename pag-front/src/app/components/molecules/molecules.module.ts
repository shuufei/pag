import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { NavTagComponent } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { EllipsisTxtComponent } from './ellipsis-txt/ellipsis-txt.component';
import { InputTxtComponent } from './input-txt/input-txt.component';
import { AccountNameComponent } from './account-name/account-name.component';
import { ButtonComponent } from './button/button.component';
import { DialogComponent } from './dialog/dialog.component';
import { OptionCardComponent } from './option-card/option-card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavTagComponent,
    EllipsisTxtComponent,
    InputTxtComponent,
    AccountNameComponent,
    ButtonComponent,
    DialogComponent,
    OptionCardComponent,
    CheckboxComponent,
    RadiobuttonComponent
  ],
  exports: [
    NavTagComponent,
    EllipsisTxtComponent,
    InputTxtComponent,
    AccountNameComponent,
    ButtonComponent,
    DialogComponent,
    OptionCardComponent,
    CheckboxComponent,
    RadiobuttonComponent
  ]
})
export class MoleculesModule { }

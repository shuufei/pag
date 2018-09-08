import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { AccountListCardComponent } from './account-list-card/account-list-card.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AtomsModule,
    MoleculesModule
  ],
  declarations: [
    AccountListCardComponent
  ],
  exports: [
    AccountListCardComponent
  ]
})
export class OrganismsModule { }

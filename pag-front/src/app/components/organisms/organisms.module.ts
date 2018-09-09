import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { AccountListCardComponent } from './account-list-card/account-list-card.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule
  ],
  declarations: [
    AccountListCardComponent,
    ItemComponent
  ],
  exports: [
    AccountListCardComponent,
    ItemComponent
  ]
})
export class OrganismsModule { }

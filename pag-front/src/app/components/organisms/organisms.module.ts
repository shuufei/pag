import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { AccountListCardComponent } from './account-list-card/account-list-card.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule
  ],
  declarations: [
    AccountListCardComponent,
    ItemComponent,
    ItemListComponent,
    NavComponent
  ],
  exports: [
    AccountListCardComponent,
    ItemComponent,
    ItemListComponent,
    NavComponent
  ]
})
export class OrganismsModule { }

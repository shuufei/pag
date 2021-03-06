import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { AccountListCardComponent } from './account-list-card/account-list-card.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { SortOptionCardComponent } from './sort-option-card/sort-option-card.component';
import { AddItemCardComponent } from './add-item-card/add-item-card.component';
import { TagListCardComponent } from './tag-list-card/tag-list-card.component';

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
    NavComponent,
    HeaderComponent,
    LoadingDialogComponent,
    SortOptionCardComponent,
    AddItemCardComponent,
    TagListCardComponent
  ],
  exports: [
    AccountListCardComponent,
    ItemComponent,
    ItemListComponent,
    NavComponent,
    HeaderComponent,
    LoadingDialogComponent,
    SortOptionCardComponent,
    AddItemCardComponent,
    TagListCardComponent
  ]
})
export class OrganismsModule { }

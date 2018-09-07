import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { NavTagComponent } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { EllipsisTxtComponent } from './ellipsis-txt/ellipsis-txt.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [
    NavTagComponent,
    EllipsisTxtComponent
  ],
  exports: [
    NavTagComponent,
    EllipsisTxtComponent
  ]
})
export class MoleculesModule { }

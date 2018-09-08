import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { NavTagComponent } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { EllipsisTxtComponent } from './ellipsis-txt/ellipsis-txt.component';
import { InputTxtComponent } from './input-txt/input-txt.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [
    NavTagComponent,
    EllipsisTxtComponent,
    InputTxtComponent
  ],
  exports: [
    NavTagComponent,
    EllipsisTxtComponent,
    InputTxtComponent
  ]
})
export class MoleculesModule { }

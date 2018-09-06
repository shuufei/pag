import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { NavTagComponent } from 'src/app/components/molecules/nav-tag/nav-tag.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [
    NavTagComponent
  ],
  exports: [
    NavTagComponent
  ]
})
export class MoleculesModule { }

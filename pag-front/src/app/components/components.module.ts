import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ],
  exports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ],
  declarations: []
})
export class ComponentsModule { }

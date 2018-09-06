import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxtComponent } from './txt/txt.component';
import { LabelComponent } from './label/label.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TxtComponent,
    LabelComponent,
    ThumbnailComponent,
    IconComponent
  ],
  exports: [
    TxtComponent,
    LabelComponent,
    ThumbnailComponent,
    IconComponent
  ]
})
export class AtomsModule { }

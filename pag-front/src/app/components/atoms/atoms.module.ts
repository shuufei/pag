import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxtComponent } from './txt/txt.component';
import { LabelComponent } from './label/label.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { IconComponent } from './icon/icon.component';
import { AccountImgComponent } from './account-img/account-img.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TxtComponent,
    LabelComponent,
    ThumbnailComponent,
    IconComponent,
    AccountImgComponent
  ],
  exports: [
    TxtComponent,
    LabelComponent,
    ThumbnailComponent,
    IconComponent,
    AccountImgComponent
  ]
})
export class AtomsModule { }

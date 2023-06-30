import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrosshairPage } from './crosshair.page';

import { CrosshairPageRoutingModule } from './crosshair-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CrosshairPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrosshairPage]
})
export class CrosshairPageModule {}

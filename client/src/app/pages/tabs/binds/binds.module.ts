import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindsPage } from './binds.page';

import { BindsPageRoutingModule } from './binds-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BindsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BindsPage]
})
export class BindsPageModule {}

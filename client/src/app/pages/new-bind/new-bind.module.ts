import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBindPageRoutingModule } from './new-bind-routing.module';

import { NewBindPage } from './new-bind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewBindPageRoutingModule
  ],
  declarations: [NewBindPage]
})
export class NewBindPageModule {}

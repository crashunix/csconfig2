import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBindPage } from './new-bind.page';

const routes: Routes = [
  {
    path: '',
    component: NewBindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewBindPageRoutingModule {}

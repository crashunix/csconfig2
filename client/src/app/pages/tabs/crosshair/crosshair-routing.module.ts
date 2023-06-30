import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrosshairPage } from './crosshair.page';

const routes: Routes = [
  {
    path: '',
    component: CrosshairPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrosshairPageRoutingModule {}

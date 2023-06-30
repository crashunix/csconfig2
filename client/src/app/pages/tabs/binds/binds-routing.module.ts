import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindsPage } from './binds.page';

const routes: Routes = [
  {
    path: '',
    component: BindsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindsPageRoutingModule {}

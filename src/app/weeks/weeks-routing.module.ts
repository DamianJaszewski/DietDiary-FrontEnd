import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeksPage } from './weeks.page';

const routes: Routes = [
  {
    path: '',
    component: WeeksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeksPageRoutingModule {}

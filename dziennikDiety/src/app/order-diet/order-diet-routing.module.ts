import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDietPage } from './order-diet.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDietPageRoutingModule {}

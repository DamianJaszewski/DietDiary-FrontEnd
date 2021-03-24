import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDietPageRoutingModule } from './order-diet-routing.module';

import { OrderDietPage } from './order-diet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDietPageRoutingModule
  ],
  declarations: [OrderDietPage]
})
export class OrderDietPageModule {}

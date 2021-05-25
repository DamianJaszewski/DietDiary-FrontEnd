import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeksPageRoutingModule } from './weeks-routing.module';

import { WeeksPage } from './weeks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeksPageRoutingModule
  ],
  declarations: [WeeksPage]
})
export class WeeksPageModule {}

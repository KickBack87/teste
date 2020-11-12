import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfracaoPageRoutingModule } from './infracao-routing.module';

import { InfracaoPage } from './infracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfracaoPageRoutingModule
  ],
  declarations: [InfracaoPage]
})
export class InfracaoPageModule {}

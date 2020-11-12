import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfracaoPage } from './infracao.page';

const routes: Routes = [
  {
    path: '',
    component: InfracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfracaoPageRoutingModule {}

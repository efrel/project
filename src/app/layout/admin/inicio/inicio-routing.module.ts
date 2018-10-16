import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    data: {
      title: 'Inicio',
      icon: 'icon-home',
      caption: 'Página principal',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }

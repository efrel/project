import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { InicioComponent } from './inicio.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [InicioComponent]
})
export class InicioModule { }

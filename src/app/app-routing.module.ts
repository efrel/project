import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import {EmailModule} from './theme/email/email.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin/inicio',
        pathMatch: 'full'
      },
      {
        path: 'admin',
        loadChildren: './layout/admin/admin.module#AdminModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'page/auth',
        loadChildren: './theme/auth/auth.module#AuthModule'
      },
      {
        path: 'page/maintenance/error',
        loadChildren: './theme/maintenance/error/error.module#ErrorModule'
      },
      {
        path: 'page/maintenance/coming-soon',
        loadChildren: './theme/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      },
      {
        path: 'page/maintenance/offline-ui',
        loadChildren: './theme/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      },
      {
        path: 'page/email/email-template',
        loadChildren: './theme/email/email-template/email-template.module#EmailTemplateModule'
      },
      {
        path: 'cm/landing',
        loadChildren: './theme/landing/landing.module#LandingModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'admin/inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

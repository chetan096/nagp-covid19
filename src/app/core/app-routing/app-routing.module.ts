import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '@app/core/error-page/error-page-component.component';


export const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
},
{
  path: 'dashboard',
  loadChildren: () => import('@app/feature/dashboard/dashboard.module').then(m => m.DashboardModule)
},
{
  path: 'news',
  loadChildren: () => import('@app/feature/news/news.module').then(m => m.NewsModule)
},
{
  path: 'precautions',
  loadChildren: () => import('@app/feature/precautions/precautions.module').then(m => m.PrecautionsModule)
},
{
  path: 'login',
  loadChildren: () => import('@app/feature/login/login.module').then(m => m.LoginModule)
},
{
  path: '**',
  component: ErrorPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

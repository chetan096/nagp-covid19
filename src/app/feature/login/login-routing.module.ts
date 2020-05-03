import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { AdminLoginComponent } from '@app/feature/login/admin-login/admin-login.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminLoginComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { AdminLoginComponent } from '@app/feature/login/admin-login/admin-login.component';
import { LoginRoutingModule } from '@app/feature/login/login-routing.module';
import { CoreModule } from '@app/core/core.module';


@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CoreModule
  ], exports: [
    AdminLoginComponent
  ]
})
export class LoginModule {
}

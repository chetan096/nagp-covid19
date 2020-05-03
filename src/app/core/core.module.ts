import { HeaderComponent } from '@app/core/header/header.component';
import { ErrorPageComponent } from '@app/core/error-page/error-page-component.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsStoreService } from '@app/core/services/news/news-store.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [ErrorPageComponent, HeaderComponent],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    SharedModule
  ], exports: [
    SharedModule,
    ErrorPageComponent,
    HeaderComponent,
    HttpClientModule
  ]
})
export class CoreModule {
}

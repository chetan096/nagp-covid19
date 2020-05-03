import { CoreModule } from '@app/core/core.module';
import { NewsService } from '@app/core/services/news/news.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from '@app/feature/news/news/news.component';
import { SharedModule } from '@app/shared/shared.module';
import { NewsStoreService } from '@app/core/services/news/news-store.service';
import { NewsListComponent } from '@app/feature/news/news-list/news-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AddNewsComponent } from '@app/feature/news/add-news/add-news.component';


@NgModule({
  declarations: [NewsComponent, AddNewsComponent, NewsListComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    // override HTTPClientModule CoreModule otherwise overridden get/post will not work
    HttpClientInMemoryWebApiModule.forFeature(NewsStoreService, { dataEncapsulation: false }),
    HttpClientModule,
    CoreModule
  ], exports: [
    NewsComponent,
    AddNewsComponent,
    NewsListComponent
  ],
})
export class NewsModule {
}

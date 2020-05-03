import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewsComponent } from '@app/feature/news/add-news/add-news.component';
import { NewsListComponent } from '@app/feature/news/news-list/news-list.component';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { NewsComponent } from '@app/feature/news/news/news.component';


const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: 'list',
        component: NewsListComponent
      },
      {
        path: 'add',
        component: AddNewsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

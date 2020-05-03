import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrecautionsComponent } from '@app/feature/precautions/precautions/precautions.component';


const routes: Routes = [
  {
    path: '',
    component: PrecautionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrecautionsRoutingModule { }

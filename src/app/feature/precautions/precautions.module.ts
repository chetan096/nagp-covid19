import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecautionsComponent } from '@app/feature/precautions/precautions/precautions.component';
import { PrecautionsRoutingModule } from '@app/feature/precautions/precautions-routing.module';
import { CoreModule } from '@app/core/core.module';


@NgModule({
  declarations: [PrecautionsComponent],
  imports: [
    CommonModule,
    PrecautionsRoutingModule,
    CoreModule
  ], exports: [
    PrecautionsComponent
  ]
})
export class PrecautionsModule {
}

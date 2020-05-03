import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from 'primeng/table';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DateTransformer } from '@app/shared/pipes/date-transformer/date-transformer.pipe';
import { TabTextTransform } from '@app/shared/pipes/tab-tranformer/tab-transformer.pipe';
import { FormControlErrorComponent } from '@app/shared/components/form-control-error/form-control-error.component';

@NgModule({
  declarations: [TabTextTransform, FormControlErrorComponent, DateTransformer],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    TableModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    ToolbarModule,
    CardModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    TableModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    FormControlErrorComponent,
    CardModule,
    DialogModule,
    ButtonModule,
    DateTransformer,
    TabTextTransform,
    RouterModule
  ]
})
export class SharedModule {
}

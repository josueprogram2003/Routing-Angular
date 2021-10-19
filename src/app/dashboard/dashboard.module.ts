import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDashboardComponent } from './presentation/views/view-dashboard/view-dashboard.component';
import { PageDashboardComponent } from './presentation/pages/page-dashboard/page-dashboard.component';



@NgModule({
  declarations: [
    PageDashboardComponent,
    ViewDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PageDashboardComponent
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from '../shared/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent, 
  ],
  exports:[
    HeaderComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule]
})
export class PagesModule { }

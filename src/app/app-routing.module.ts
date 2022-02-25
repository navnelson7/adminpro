import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes =[
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'grafica1', component: Grafica1Component},
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

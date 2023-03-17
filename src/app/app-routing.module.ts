import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { NonPageFoundComponent } from './pages/non-page-found/non-page-found.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'charts', component: ChartsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      
    ] 
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  
  { path: '**', component: NonPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

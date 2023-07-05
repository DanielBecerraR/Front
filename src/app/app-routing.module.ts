import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/Login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { ServicesComponent } from './components/Services/services.component';

const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent},
  { path: 'Services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginregComponent } from './loginreg/loginreg.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginregComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

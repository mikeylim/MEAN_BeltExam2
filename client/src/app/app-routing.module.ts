import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginregComponent } from './loginreg/loginreg.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: '',
    component: LoginregComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'lets_play',
    component: PlayComponent
  },
  {
    path: 'new_question',
    component: QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

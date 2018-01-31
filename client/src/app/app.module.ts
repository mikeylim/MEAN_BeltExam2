import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginregComponent } from './loginreg/loginreg.component';
import { MainService } from './main.service';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { QuestionComponent } from './question/question.component';
import { FilterPipe } from './filter.pipe'


@NgModule({
  declarations: [
    AppComponent,
    LoginregComponent,
    HomeComponent,
    PlayComponent,
    QuestionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }

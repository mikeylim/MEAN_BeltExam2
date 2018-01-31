import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';
import { FilterPipe } from './../filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;
  games: object[] = [];
  questions: object[] = [];
  hasQuestion: boolean;
  message: string = "";

  constructor(private _mainService: MainService, private _router: Router) { 
    this.user = "";
    this._mainService.gameObserver.subscribe((games) => {
      this.games = games;      
    })    
  }

  checkUser() {
    this._mainService.checkUser((res) => {
      if(res){
        this.user = res.user.name;
      } else{
        this._router.navigate(["/"]);
      }
    })
  }

  showAllGames() {
    this._mainService.showAllGames((res) => {
    })
  }
  
  getAllQuestions() {
    this._mainService.getAllQuestions((res) => {      
    })
  }

  ngOnInit() {
    this.checkUser();
    this.showAllGames();
    this.getAllQuestions();
    this._mainService.questionObserver.subscribe((questions) => {
      this.questions = questions
      if(this.questions.length == 0) {
        this.hasQuestion = false;
      } else{
        this.hasQuestion = true;
      }
    })
    this._mainService.currentMessage.subscribe(message => this.message = message);
  }
}
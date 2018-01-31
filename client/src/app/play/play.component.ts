import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  user: string;
  allQuestions: object[];
  threeQuestions: object[];
  answerObj: object;
  ans: object;
  score: number;
  // correct answers
  ca1: string;
  ca2: string;
  ca3: string;
  percentage: number;
  games: object[];
  message: string;

  constructor(private _mainService: MainService, private _router: Router) { 
    this._mainService.questionObserver.subscribe((allQuestions) => {
      this.allQuestions = allQuestions;
    })    
    this.ans = { ans1: "", ans2: "", ans3: "" };
    this.score = 0;
    this.ca1 = "";
    this.ca2 = "";
    this.ca3 = "";
    this.answerObj = { name: "", score: "", percentage: ""};
    this.percentage = 0.0;
    this.threeQuestions = [];
    this.message = "";
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

  getAllQuestions() {
    this._mainService.getAllQuestions((res) => {
      // get random questions three times      
      for(let num = 0; num < 3; num++) {
        // Fisher-Yates Shuffle      
        for (var i = res.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = res[i];
          res[i] = res[j];
          res[j] = temp;
        }        
        // get first three question objects
        var rndQuestion1 = res[0];
        var rndQuestion2 = res[1];
        var rndQuestion3 = res[2];
      }
      // push three random questions to an array
      this.threeQuestions.push(rndQuestion1);
      this.threeQuestions.push(rndQuestion2);
      this.threeQuestions.push(rndQuestion3);

      this.ca1 = rndQuestion1._answers[0].correctAnswer;
      this.ca2 = rndQuestion2._answers[0].correctAnswer;
      this.ca3 = rndQuestion3._answers[0].correctAnswer;
    })
  }

  submitAnswers() {
    if(this.ans["ans1"] == this.ca1) {
      this.score++;
    }
    if(this.ans["ans2"] == this.ca2) {
      this.score++;
    }
    if(this.ans["ans3"] == this.ca3) {
      this.score++;
    }
    this.percentage = Math.round((this.score / 3) * 1000) / 10;
    this.answerObj["name"] = this.user;
    this.answerObj["score"] = this.score;
    this.answerObj["percentage"] = this.percentage;

    
    if(this.answerObj["score"] == 0){
      this._mainService.changeMessage("Maybe time to read some books? 0/3 (0%)");
    } else if(this.answerObj["score"] == 1){
      this._mainService.changeMessage("Close, you can do this! 1/3 (33.3%)");
    } else if(this.answerObj["score"] == 2){
      this._mainService.changeMessage("Almost there! 2/3 (66.7%)");
    } else if(this.answerObj["score"] == 3){
      this._mainService.changeMessage("That was great! You got 3/3 (100%)");
    }
    
    this._mainService.submitAnswers(this.answerObj, (res) => {
      if(res){
        this.showAllGames();
        this._router.navigate(['Home']);
      } else{
        this._router.navigate(['/lets_play']);
      }
    })
  }
  
  showAllGames() {
    this._mainService.showAllGames((res) => {
    })
  }
  
  ngOnInit() {
    this.checkUser(); 
    this.getAllQuestions();
    this._mainService.currentMessage.subscribe(message => this.message = message);
  }
}
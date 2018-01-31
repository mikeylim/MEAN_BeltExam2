import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: object;
  message: string;

  constructor(private _mainService: MainService, private _router: Router) { 
    this.question = { content: "", correctAnswer: "", fakeAnswer1: "", fakeAnswer2: ""};
    this.message = "";
  }

  addQuestion() {
    this.message = "Your question was successfully added!"
    this._mainService.addQuestion(this.question, (res)=>{
      if(res){
        this._router.navigate(['Home']);
      } else{
        this._router.navigate(['/new_question']);
      }
    })
  }

  ngOnInit() {
  }

}

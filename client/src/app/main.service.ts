import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Router } from '@angular/router';

@Injectable()
export class MainService {
  usersArray: object[];
  users: BehaviorSubject<any[]> = new BehaviorSubject([]);
  questions: object[];
  questionObserver: BehaviorSubject<any[]> = new BehaviorSubject([]);
  games: object[];
  gameObserver: BehaviorSubject<any[]> = new BehaviorSubject([]);
  messageObserver: BehaviorSubject<string> = new BehaviorSubject(""); 
  currentMessage = this.messageObserver.asObservable();
  constructor(private _http: Http) {
    this.usersArray = [];
    this.questions = [];  
    this.games = [];  
  }
  
  loginReg(user, cb){
    this._http.post('/loginReg', user).subscribe((res)=>{
      return cb(res.json());
    })
  }
  
  checkUser(cb){
    this._http.get('/checkUser').subscribe((res)=>{
      return cb(res.json());
    })
  }

  addQuestion(question, cb){
    this._http.post('/addQuestion', question).subscribe((res) => {
      this.questions.push(res.json());
      this.questionObserver.next(this.questions);
      // return res.json();
      return cb(res.json());
    })
  }

  changeMessage(message: string) {
    this.messageObserver.next(message);
  }

  getAllQuestions(cb) {
    this._http.get('/getAllQuestions').subscribe((res) => {
      this.questionObserver.next(res.json());
      return cb(res.json());
    })
  }

  submitAnswers(answerObj, cb){
    this._http.post('/submitAnswers', answerObj).subscribe((res) => {
      this.games.push(res.json());
      this.gameObserver.next(this.games);
      return cb(res.json());
    })
  }

  showAllGames(cb) {
    this._http.get('/showAllGames').subscribe((res) => {
      this.gameObserver.next(res.json());
      return cb(res.json());
    }) 
  }
}
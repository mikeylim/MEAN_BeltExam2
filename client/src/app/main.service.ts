import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Router } from '@angular/router';

@Injectable()
export class MainService {
  usersArray: object[];
  users: BehaviorSubject<any[]> = new BehaviorSubject([])
  constructor(private _http: Http) {
    
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
}
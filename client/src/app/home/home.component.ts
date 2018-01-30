import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;
  usersArray: object[] = [];
  bucket: object;
  bucketsArray: object[] = []; 

  constructor(private _mainService: MainService, private _router: Router) { 
    this.user = "";
    this._mainService.users.subscribe((usersArray) => {
      this.usersArray = usersArray;
    })
  }

  checkUser(){
    this._mainService.checkUser((res) => {
      if(res){
        this.user = res.user.name;
      } else{
        this._router.navigate(["/"]);
      }
    })
  }

  ngOnInit() {
    this.checkUser();
  }

}

import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {
  user: object;
  constructor(private _mainService: MainService, private _router: Router) {
    this.user = { name: "" };
  }

  ngOnInit() {
  }
  
  loginReg(){
    this._mainService.loginReg(this.user, (res)=>{   
      if(res.user){
        this._router.navigate(['Home']);
      } else{
        this._router.navigate(['/']);
      }
    })
  }
}
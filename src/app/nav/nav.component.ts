import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  islogin : boolean=false;


  constructor(private _AuthService:AuthService ,private _TrendingService:TrendingService) { }

  ngOnInit(): void {
    this._AuthService.currentUser.subscribe(()=>{
      if(this._AuthService.currentUser.getValue() != null){
        this.islogin = true;
      }
      else{
        this.islogin = false
      }
    })
   }

   Logout(){
    this._AuthService.Logout();
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl:string='https://route-egypt-api.herokuapp.com/';

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('userinfo')){
      this.decodeUserData();
    }
   }

  currentUser= new BehaviorSubject(null);



  signUp(data:object):Observable<any>
  {
    return this._HttpClient.post(this.baseurl+'signup',data);
  }
  signIn(data:object):Observable<any>
  {
    return this._HttpClient.post(this.baseurl+'signin',data);
  }

  decodeUserData(){
    let data:any = localStorage.getItem('userinfo');
    let decodedData:any = jwtDecode(data);
    this.currentUser.next(decodedData);
  }

  Logout(){
    localStorage.removeItem('userinfo');
    this.currentUser.next(null);
    this._Router.navigate(['/login']);
  }

}



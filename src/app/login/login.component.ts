import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup=new FormGroup({
    "email" : new FormControl(null ,  [Validators.email , Validators.required]),
    "password" : new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z]{1}[0-9]{5,15}$/)]),
  });

  constructor(private _Auth:AuthService , private _Router:Router) { }

  errorMessage:string='';

  login(data:FormGroup){
    this._Auth.signIn(data.value).subscribe({
      next:(data)=> {
        if(data.message == 'success'){
          localStorage.setItem('userinfo',data.token);
          this._Auth.decodeUserData();
          this._Router.navigate(['/home']);
        }
        else{
          this.errorMessage='Email or password is incorrect';
        }
      }
    })
  }

  ngOnInit(): void {
  }

}

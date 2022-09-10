import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerform:FormGroup=new FormGroup({
    "first_name" : new FormControl(null,[Validators.required , Validators.maxLength(12) , Validators.minLength(3)]),
    "last_name" : new FormControl(null,[Validators.required , Validators.maxLength(12) , Validators.minLength(3)]),
    "email" : new FormControl(null ,  [Validators.email , Validators.required]),
    "password" : new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z]{1}[0-9]{5,15}$/)]),
    "age" : new FormControl(null , [Validators.required, Validators.min(10) , Validators.max(80)])
  });

  errorMessage:string='';
  constructor(private _Auth:AuthService , private _Router:Router) { }

  register(data:FormGroup){
    if(this.registerform.invalid){
      return;
    }
    this._Auth.signUp(data.value).subscribe({
      next:(data)=>
      {
        if(data.message =='success'){
          this._Router.navigate(['/login']);
        }else{
          this.errorMessage="Email is Aready registered";
        }
      }
    })
  }
  ngOnInit(): void {
  }

}

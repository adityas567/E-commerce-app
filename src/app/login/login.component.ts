import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 loginForm!: FormGroup;
 formData:any;
 constructor(private api:ApiService,private formbuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.loginForm=this.formbuilder.group(
      {
        username:['',Validators.required],
        password:['',Validators.required]
      }
    )
  }
   loginValidate()
  {
    let reqObj :any = {};

    reqObj.username = this.loginForm.controls['username'].value;
    reqObj.password = this.loginForm.controls['password'].value;
    this.api.userLogin(reqObj).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token',res.token)
      this.router.navigate(['/','all_product'])

    },(err)=>{
      console.log(err)
    })
  
    
    }
  
    
  }


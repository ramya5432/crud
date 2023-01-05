import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login' ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  loginForm: FormGroup;
  // submitted: boolean | undefined;
 username:any;
 password:any;
  messageService: any;
 user:any;
  
  constructor(private router: Router,private fb:FormBuilder,private info:ServiceService,
    private toast:NgToastService,) { 
    this.loginForm=fb.group({
      username: ['', ([Validators.required,Validators.minLength(3),Validators.maxLength(8)])],
      password:['',[Validators.required,  Validators.minLength(6),Validators.maxLength(15)]]
    })
  }
  
 

  onSubmit(){
   
    console.log(this.loginForm.value);
   debugger
    this.username="ramya"; 
   this.password="ramya9*";
//   this.info.getusers().subscribe((res)=>{
//    const username=res.find((a:any)=>{
//   return a.username == this.loginForm.value.username && this.password == this.loginForm.value.password
// })
//   })
    if(this.username == this.loginForm.value.username && this.password == this.loginForm.value.password){ 
      localStorage.setItem('username',JSON.stringify(this.loginForm.value.username))
      localStorage.setItem('username',JSON.stringify(this.loginForm.value.password))
  // this.messageService.add({severity:'success', summary: 'Success', detail: 'successfully login'});
  // setTimeout(() => {
    this.toast.success({detail:"Success Message",summary:"Login success",duration:5000})
    this.router.navigate(['./home']);
  // },1000)
     
       }
  
     else{

    
      this.toast.error({detail:"Warnning Message",summary:"Invalid username or password",duration:5000});
    // this.messageService.add({severity:'error', summary: 'Error', detail: 'invalid credentials'});

    }
  
    }
  get f (){
    return this.loginForm.controls;
    
  }
  reg(){
    this.router.navigate(['./register'])
  }
  
  ngOnInit(): void {
  }

 
  
}
 
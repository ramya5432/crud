import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';



import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm!: FormGroup ;
  submitted = false;
  


  constructor( private formBuilder: FormBuilder ,private info:ServiceService, 
    private toast:NgToastService, private router:Router) { 

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.registerForm.valid){
    
      this.info.registerform(this.registerForm.value)
    .subscribe((res)=>{
      console.log(res);
      this.toast.success({detail:"Success Message",summary:"Add success",duration:5000})
      //  alert('Registration successful');
      this.registerForm.reset();
      this.router.navigate(['./login'])
    })
    }
     if(this.registerForm.invalid) {
      this.toast.error({detail:"Error Message", summary:"Please fiil fields",duration:5000})
    
     }
  }
  ngOnInit(): void {
  }

}

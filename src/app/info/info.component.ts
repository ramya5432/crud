import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-info',
  templateUrl:'./info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  users:any[]=[];
  Form !: FormGroup;
  FirstName:any;
  LastName:any;
  Email:any;
  MobileNumber:any;
  Roles:any;
  Departments:any;
  id:any;
 use:any;

 showaddbutton:boolean=true;
 showupdatebutton:boolean=false;

 exampleModal:any;
 searchText!: string;
  isNextDisabled!: boolean;
 
  constructor(private fb:FormBuilder,private info:ServiceService,private toast:NgToastService, ) {
    this.createform();
    
   }
createform(){
  this.Form=this.fb.group({
    FirstName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[ a-zA-Z]+$')]],
    LastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[ a-zA-Z]+$')]],
    Email:['', [Validators.required, Validators.email]],
    MobileNumber:['',[Validators.required, Validators.minLength(10)]],
    Departments:['',Validators.required],
    Roles:['',Validators.required],
    ISACTIVE:true,
    id: ['',[Validators.required]]
  })
  
}


   get f() {
    return this.Form.controls;
  }


  //  Add details
   onSubmit(){
     debugger;

// this.exampleModal=Object.assign({},this.Form.value);

  debugger;
    this.info.adddetails(this.Form.value)
    .subscribe((res) => {
      console.log(res);  
      // this.use = this.Form.value;
      // this.createform();
       this.toast.success({detail:"Success Message",summary:"Add success",duration:5000});
       this.Form.reset();
       this.getusers();
    });
  //    if(this.Form.invalid){

  //  this.toast.warning({detail:"Warning Message",summary:"please fill the fields",duration:5000})
  //  }
  }
   


// get details
  getusers(){
    debugger;
   
     this.info.getdetails().subscribe((repeat)=>{
      this.users=repeat;
      console.log(this.users);
     
    })
  }

// delete details
  deleteuser(use:any){
    debugger;
    this.info.deletedetails(use.id).subscribe(()=>{
      // console.log(employees.id);
      console.log(this.users);
      this.toast.success({detail:"Success Message",summary:"Data deleted success",duration:5000})
      this.getusers();
      
    })  
  }


  //details bind to form
  updateuser(use:any){
    
    this.showaddbutton=false;
    this.showupdatebutton=true;
    this.Form.controls['FirstName'].setValue(use.FirstName);
    this.Form.controls['LastName'].setValue(use.LastName);
    this.Form.controls['Email'].setValue(use.Email);
    this.Form.controls['MobileNumber'].setValue(use.MobileNumber);
    this.Form.controls['Departments'].setValue(use.Departments);
    this.Form.controls['Roles'].setValue(use.Roles);
    this.Form.controls['id'].setValue(use.id);
  }

  // update details
  updatedetails(){ 

debugger; 
// this.exampleModal=Object.assign({},this.Form.value)

   this.info.update(this.Form.value.id,this.Form.value)
    .subscribe(res => {
      // this.createform();
      // this.Form.reset();
      this.toast.success({detail:"Success Message",summary:"Data update success",duration:5000})
      this.getusers();
      
    })

  }

  
  ngOnInit(): void {
    this.getusers();
    
  }

  
   
  
}




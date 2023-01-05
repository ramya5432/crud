import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpOptions: any;
  
  constructor(private http:HttpClient ) { }

  // url="http://localhost:3000/data";
 url="http://localhost:3000/add/";

  
  // users(body:any){
  //   // debugger;
  //   return this.http.post<any>(this.url, body);
    
  // }



  getdetails():Observable<any>{
   
    debugger;
    // let httpHeaders = new HttpHeaders({
    //   'content-type':'application/json',
    //   'Authorization':'asdf'
    // });
    // let httpHeaders =new HttpHeaders({'ramya':'121'})
    //    httpHeaders = httpHeaders.set("key","123@")
    let myparams = new HttpParams();
    myparams = myparams.set("id","val1");
    myparams = myparams.set("names",["ramya","sandhya","renuka"] as any)
    return this.http.get<any>(this.url);
   
  }
  deletedetails(id:number){
    // debugger;

    return this.http.delete<any>(`http://localhost:3000/add/${id}`);
    
    
  }

  adddetails(body:any){
    // debugger;
    return this.http.post<any>(this.url,body);
    
  }

  update(id:number,body:any){
    return this.http.put<any>(this.url+id,body);
  }



  
  registerform(body:any){
  
    return this.http.post<any>(`http://localhost:3000/data`,body)
  }

  getusers(){
   
    return this.http.get<any>(`http://localhost:3000/data`)
  }

  validateuser(username: any,password: any){
    return this.http.post<any>(`http://localhost:3000/data`,username+password)
  }

}

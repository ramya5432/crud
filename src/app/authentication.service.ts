import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  [x: string]: any;

  url=" http://localhost:3000/data";

  constructor(private http:HttpClient) { 
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  login(username: string, password: string){
   
    this.http.post<any>(this.url,{username,password});
  }
}

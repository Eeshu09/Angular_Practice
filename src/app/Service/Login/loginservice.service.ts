import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  

  constructor(private http:HttpClient) { }
  addUser(user:any){
    localStorage.setItem("loginUser",JSON.stringify(user));
    console.log(user);
  }
}

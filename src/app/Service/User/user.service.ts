import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../Interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }
   getUser(){
    const url="https://jsonplaceholder.typicode.com/users"
    return this.http.get(url);
   }
   deleteUser(id:any)
   {
    const url=`https://jsonplaceholder.typicode.com/users/${id}`
    return this.http.delete(url);

   }
   addUser(user:User){
    debugger
    const url="https://jsonplaceholder.typicode.com/users"
    return this.http.post(url,user);
   }
}

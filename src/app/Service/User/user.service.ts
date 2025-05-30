import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../Interface/user';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }

getFakeUser():Observable<any[]>{
  return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
}

   getUser():Observable<any>{
    const url="https://localhost:7182/api/Use"
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
   }
   deleteUser(id:any)
   {
    const url=`https://jsonplaceholder.typicode.com/users/${id}`
    return this.http.delete(url);

   }
   addUser(user:User){
    debugger
    const url="https://localhost:7182/api/User"
    return this.http.post(url,user);
   }
    private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client-side error:', error.error.message);
    } else {
      // Server-side error
      console.error(`Server error ${error.status}: ${error.message}`);
    }

    // You can customize the error message here
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}

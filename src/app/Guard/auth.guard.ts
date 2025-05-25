import { inject, LOCALE_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const  _router=inject(Router)
  const loginUser=localStorage.getItem('loginUser');
  const authentication=!!loginUser;
// if(loginUser){
//   console.log(loginUser);
//   console.log(JSON.parse(loginUser));
// }
  if(!authentication){
     if (typeof window !== 'undefined') {
      window.alert('Please login');
    }
    _router.navigate(['login'])
    return false;
  }
  
  return true;
};

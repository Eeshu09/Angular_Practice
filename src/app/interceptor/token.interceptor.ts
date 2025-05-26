import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

const token=sessionStorage.getItem("token");

//this one is only for skip the token this api 
 const excludedUrls = [
    '/auth/login',
    '/auth/register',
    '/public'
  ];

   const shouldSkip = excludedUrls.some(url => req.url.includes(url));

  if (shouldSkip || !token) {
    return next(req); 
  }


const newReq=req.clone({
  setHeaders:{
    Authorization:`Bearer ${token}`
  }
})


  return next(newReq);
};

import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req:any,next:any)
  {
    let autService=this.injector.get(ApiService)
    let tokenizedReq=req.clone(
      {
        setHeaders:{
          Authorization: `Bearer ${autService.getToken()}`
        }
      }
    )
    return next.handle(tokenizedReq);
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api:ApiService,private router:Router){}
  canActivate():boolean{
    if(this.api.checkValid())
    {
      console.log('its working');
      return true;
      
    }
    else
    {
      this.router.navigate(['/','login']);
      console.log('its not working')
      return false;
  }
  
}
}

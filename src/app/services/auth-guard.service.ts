import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      return true;
    }
    return false;
    
   
  }

  
  

  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedIn') == "true") {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    // localStorage.clear();
  }

}

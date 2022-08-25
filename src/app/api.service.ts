import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private router:Router) { }

  isAuthenticate():boolean{
    if (sessionStorage.getItem('token')!==null){
      return true;
    }
    return true;
  }

  canAccess(){
    if(!this.isAuthenticate()){
      this.router.navigate(['/']);
    }
  }
}

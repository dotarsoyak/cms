import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDetailGuard implements CanActivate{

  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const paramId = Number(route.paramMap.get('id'));

    if(paramId < 1 || isNaN(paramId)){
      //this.router.navigate(['/**']);
      alert(`El post con id: ${paramId} no existe.`);
      this.router.navigate(['/home']);
      return false;
    }

    return true;  
  }

}

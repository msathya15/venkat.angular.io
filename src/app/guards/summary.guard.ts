import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from '../services/car.service';
@Injectable({
  providedIn: 'root'
})
export class SummaryGuard implements CanActivate {
  constructor(private router: Router,private service:CarService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {      
    return this.service.configChosen;
  }
  
}

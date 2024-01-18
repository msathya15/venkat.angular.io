import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from '../services/car.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigGuard implements CanActivate {
  private modelCompleted = true;
  private configCompleted = true;
  constructor(private router: Router,private service:CarService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    return this.service.modelChosen;
  }

  //   canActivate(route: any): boolean {
  //   if (route.url[0].path === 'options' && !this.modelCompleted) {
  //     this.router.navigate(['/model']);
  //     return false;
  //   }

  //   if (route.url[0].path === 'summary' && !this.configCompleted) {
  //     this.router.navigate(['/options']);
  //     return false;
  //   }
  //   return true;
  // }

  // setFirstCompleted() {
  //   this.modelCompleted = true;
  // }

  // setSecondCompleted() {
  //   this.configCompleted = true;
  // }
}


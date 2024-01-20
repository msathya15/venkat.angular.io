import { Injectable } from '@angular/core';
import { Car } from '../model/car';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Color } from '../model/color';
import { HttpClient } from '@angular/common/http';
import { Config } from '../model/config';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  private apiUrl:string="http://localhost:4200/assets"
  carList:Car[]=[]
  private selectedCar = new BehaviorSubject<Car>(null);
  selectedCar$ = this.selectedCar.asObservable();
  modelChosen:boolean=false;
  configChosen:boolean=false;
  setSelectedCar(car:Car): void {
    this.selectedCar.next(car);
  }
  constructor(private http: HttpClient) { }
  
  getListOfCars() : Observable<Car[]> {        
    return this.http.get<Car[]>(`${this.apiUrl}/models.json`);    
  }
  
  
  
}

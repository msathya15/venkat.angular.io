import { Injectable } from '@angular/core';
import { Car } from '../model/car';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Color } from '../model/color';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private jsonUrl ="assets/data.json";
  private apiUrl="https://localhost:4200/models"
  carList:Car[]=[]
  private selectedCar = new BehaviorSubject<Car>(null);
  selectedCar$ = this.selectedCar.asObservable();
  modelChosen:boolean=false;
  configChosen:boolean=false;
  setSelectedCar(car:Car): void {
    this.selectedCar.next(car);
  }
  constructor(private http: HttpClient) { }
  getall() : Observable<any[]> {
    
    return this.http.get<any[]>(this.apiUrl)
  }
  getListOfCars() : Observable<Car[]> {
    console.log(this.http.get<Car[]>(this.jsonUrl));
    return this.http.get<Car[]>(this.jsonUrl);
    
  }
  getCarById(id:number):Observable<Car>{
    return this.getListOfCars().pipe(
      map(data => data.find(item => item.id === id))
    );
  }
  
}

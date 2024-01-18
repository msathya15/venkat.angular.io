import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { Color } from 'src/app/model/color';
import { CarService } from 'src/app/services/car.service';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-basic-car-configurator',
  templateUrl: './basic-car-configurator.component.html',
  styleUrls: ['./basic-car-configurator.component.css']
})
export class BasicCarConfiguratorComponent implements OnInit{
  carList:Car[]=[];
  selectedModelID:number=0
  selectedCar:Car;
  selectedColor:Color;  
  displayModel:boolean=true;
  showpic:boolean=false;
  selectedColors: string[] = [];
  constructor(private service:CarService, private route : ActivatedRoute,private router:Router)
  {
    this.selectedCar=new Car();
  }
  ngOnInit(): void {
    this.service.getListOfCars().subscribe(data=>{
      this.carList=data;
    },
    (error) => {
        console.error('Error fetching car data:', error);
      });    

      
  }
  onChange(){
    this.service.getCarById(this.selectedModelID).subscribe(data=>{
      this.selectedCar=data;
    });
  }
  
  onColorChange(){    
    this.selectedCar.colors[0]=this.selectedColor
    this.showpic=true;
    console.log(this.selectedCar)   
    this.service.setSelectedCar(this.selectedCar);
    this.service.modelChosen=true;
    }
    
  }
  


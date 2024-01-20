import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';
import { Car } from 'src/app/model/car';
import { Config } from 'src/app/model/config';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-advanced-car-configurator',
  templateUrl: './advanced-car-configurator.component.html',
  styleUrls: ['./advanced-car-configurator.component.css']
})
export class AdvancedCarConfiguratorComponent implements OnInit {
  id: string;
  range:string="";
  selectedCar:Car;
  selectedConfig:Config;
  showRange:boolean=false;
  configurations:string[]=[]
  constructor(private route: ActivatedRoute,private service:CarService,private router: Router) {
    this.selectedConfig=new Config();
  }

  ngOnInit(): void {
    this.service.selectedCar$.subscribe(car=>{
      this.selectedCar=car;
    })
    
    
    console.log(this.selectedCar);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.service.setSelectedCar(this.selectedCar);          
          console.log('Navigated to YourComponent');   
          console.log(this.selectedCar)  
               
        }
      });
    }
  onChange(){
    this.showRange=true;   
    this.service.configChosen=true;
    this.selectedCar.configSelect[0]=this.selectedConfig;
    this.service.setSelectedCar(this.selectedCar);    
    } 
    
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-advanced-car-configurator',
  templateUrl: './advanced-car-configurator.component.html',
  styleUrls: ['./advanced-car-configurator.component.css']
})
export class AdvancedCarConfiguratorComponent implements OnInit {
  id: string;
  selectedCar:Car;
  selectedConfig:string;
  showRange:boolean=false;
  configurations:string[]=["Rear Wheel Drive","Dual Motor Ali-Wheel Drive","Cyberbeast - Tri Motor All-Wheel Drive"];
  ranges:string[]=["300 miles - Max Speed: 150","340 miles - Max Speed: 112","400 miles - Max Speed: 180"];
  constructor(private route: ActivatedRoute,private service:CarService,private router: Router) {
    
  }

  ngOnInit(): void {
    this.service.selectedCar$.subscribe(car=>{
      this.selectedCar=car;
    })
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
    this.selectedCar.configSelect=this.selectedConfig;
     const selectedIndex = this.configurations.indexOf(this.selectedConfig);  
      this.selectedCar.range = selectedIndex !== -1 ? this.ranges[selectedIndex] : '';
      console.log(this.selectedCar)
      this.service.configChosen=true;
      console.log(this.service.configChosen);
    } 
  
}

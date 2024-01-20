import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.css']
})
export class SummaryReportComponent implements OnInit {
  selectedCar:Car;
  
  colorCost:number=0;
  towCost:number=0;
  yokeCost:number=0;
  totalCost:number=0;
  constructor(private route: ActivatedRoute,private service:CarService) {
    
  }

  ngOnInit(): void {
    this.service.selectedCar$.subscribe(car=>{
      this.selectedCar=car;
      console.log("summary");
      console.log(this.selectedCar);
    })
    
    //color cost
    if(this.selectedCar.colors[0].name=="Satinblack")
      this.colorCost=6500;
    else if(this.selectedCar.colors[0].name=="Black")
      this.colorCost=5000;
    else if(this.selectedCar.colors[0].name=="White")
      this.colorCost=3000;
    else
      this.colorCost=2000;


    if(this.selectedCar.includeTow)
      this.towCost=1000;

    if(this.selectedCar.includeYoke)
      this.yokeCost=1500;
     
      this.totalCost=this.selectedCar.basicPrice+this.colorCost+this.yokeCost+this.towCost;
    
  }

}

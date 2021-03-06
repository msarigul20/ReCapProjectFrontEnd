import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  dataLoaded = false;
  cars:Car[] = [];
  currentCar:Car;
  filterText=""
  filterTextForColor = ""
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private toastrService: ToastrService) { }
  
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"] && params["colorId"]){
        this.getCarsBySelect(params["brandId"],params["colorId"])
      }else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      } else {
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data; 
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars = response.data; 
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars = response.data; 
      this.dataLoaded = true;
    });
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
  }

  getCarsBySelect(brandId:number, colorId:number){
    this.carService.getCarsBySelect(brandId,colorId).subscribe(response=>{
       this.cars=response.data
       this.dataLoaded=true;
      if(this.cars.length == 0){
        this.toastrService.error('There is no car according to your search.', 'Search Result');
         
      }else if(this.cars.length > 0){
        this.toastrService.success('There are '+ this.cars.length + " cars in list." , 'Search Result');
     }
     })
   }
}

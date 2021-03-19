import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/car-image';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  baseUrl="https://localhost:44339/"
  carImages:CarImage[];
  currentCar:Car;
  constructor(private carService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
        this.setCurrentCar(params['carId']);
      }
    });
  }

  getCarImagesByCarId(id: number) {
    this.carImageService.getImagesByCarId(id).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCurrentImageClass(image:CarImage){
    if(image == this.carImages[0]){
      return "carousel-item active "
    } else {
      return "carousel-item"
    }
  }
  
  //index must be 0, beacuse ı am sure that it will be one data.
  setCurrentCar(carId:number){
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.currentCar = response.data[0];
    })
  }

  checkDefaultSize(){
    if (this.carImages[0].id==0) {
      console.log("test" + this.carImages[0].id)

      return "d-block mx-auto p-5"

    }
    console.log("test" + this.carImages[0].id)
    return "d-block w-100"
  }
  
}

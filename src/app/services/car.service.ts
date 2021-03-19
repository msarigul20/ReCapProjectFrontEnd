import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44339/api/';
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getdetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(id:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+ "cars/getdetailsbybrandid?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(id:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getdetailsbycolorid?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getdetailsbycarid?id="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}

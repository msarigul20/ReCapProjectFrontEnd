import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/car-image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44339/api/';
  constructor(private httpClient:HttpClient) { }
  
  getImagesByCarId(id:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getcarimagesbycarid?id="+id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
    
  }
}

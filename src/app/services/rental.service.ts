import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rental-detail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44339/api/rentals/';
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getdetails";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalCarControl(carId: number):Observable<ResponseModel>{
    let newPath = this.apiUrl + "getcarcontrol?carId="+carId;
    return this.httpClient.get<ResponseModel>(newPath);
  }
  addRental(rental: RentalDetail) {
    let newPath = this.apiUrl + 'add';
    this.httpClient.post(newPath, rental).subscribe();
  }
  checkRentalDates(rental:RentalDetail):Observable<ResponseModel>{
    let newPath = this.apiUrl + 'checkdates';
    console.log("cservvice",rental)
    return this.httpClient.post<ResponseModel>(newPath,rental)
  }


} 

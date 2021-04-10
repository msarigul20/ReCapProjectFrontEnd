import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeCard } from '../models/fakeCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class FakeCardService {
  apiUrl = 'https://localhost:44339/api/fakecards/';
  constructor(private httpClient:HttpClient) { }

  isCardExist(fakeCard:FakeCard):Observable<ResponseModel>{
    let newPath = this.apiUrl + "doescardexist";
    return this.httpClient.post<ResponseModel>(newPath,fakeCard);
  }
  getCardByNumber(cardNumber:string):Observable<ListResponseModel<FakeCard>>{
    let newPath = this.apiUrl + "getbycardnumber?cardNumber="+cardNumber
    return this.httpClient.get<ListResponseModel<FakeCard>>(newPath)
  }
  
  updateCard(fakeCard:FakeCard):Observable<ResponseModel>{
    console.log("checkservicein",fakeCard)
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<ResponseModel>(newPath,fakeCard);
  }






}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetail } from '../models/customer-detail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44339/api/customers/';
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl +"getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomersDetails():Observable<ListResponseModel<CustomerDetail>>{
    let newPath = this.apiUrl +"getdetails";
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(newPath);
  }
  getCustomerById(customerId: number): Observable<ListResponseModel<CustomerDetail>> {
    let newPath = this.apiUrl + 'getdetailsbyid?id=' + customerId;
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(newPath);
  }
}

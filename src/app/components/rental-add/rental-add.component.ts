import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';

import { CustomerDetail } from 'src/app/models/customer-detail';
import { RentalDetail } from 'src/app/models/rental-detail';
import { ResponseModel } from 'src/app/models/responseModel';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
  providers: [DatePipe],
})
export class RentalAddComponent implements OnInit {
  @Input() car: Car;
  customerId: number;
  customers: CustomerDetail[];
  rentDate: Date;
  returnDate: Date;
  minDate: string | any;
  maxDate: string | null;
  firstDateSelected: boolean = false;
  dateAvailable : ResponseModel;


  constructor(
    private customerService: CustomerService,
    private datePipe: DatePipe,
    private toastrService : ToastrService,
    private router: Router,
    private rentalService:RentalService
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  onChangeEvent(event: any) {
    this.minDate = event.target.value;
    this.firstDateSelected = true;
  }

  getRentMinDate() {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return this.minDate;
  }

  getReturnMinDate() {
    if (this.rentDate != undefined) {
      let stringToDate = new Date(this.rentDate);
      let new_date = new Date();
      new_date.setDate(stringToDate.getDate() + 1);
      return new_date.toISOString().slice(0, 10);
    } else {
      return this.rentDate;
    }
  }

  getReturnMaxDate() {
    this.maxDate = this.datePipe.transform(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      'yyyy-MM-dd'
    );
    return this.maxDate;
  }
  getCustomer() {
    this.customerService.getCustomersDetails().subscribe((response) => {
      this.customers = response.data;
    });
  }

  async createRental() {
    let MyRental: RentalDetail = {
      carId: this.car.carId,
      brandName: this.car.brandName,
      colorName: this.car.colorName,
      customerId: this.customerId,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
    };

    this.dateAvailable = await this.checkAvailableDate(MyRental);
    
    if (MyRental.customerId == undefined || MyRental.rentDate == undefined) {
      this.toastrService.error(
        'Eksik bilgi girdiniz',
        'Bilgilerinizi kontrol edin'
      );
  
    }if (!this.dateAvailable.success) {
      this.toastrService.info(
        this.dateAvailable.message,
        'Hatalı Tarih seçimi'
      );
   
     }else if (!this.dateAvailable) {
      this.toastrService.info(
        'Araç o tarihte zaten kirada.',
        'Hatalı Tarih seçimi'
      );
     }else {
        this.router.navigate(['/payment/', JSON.stringify(MyRental)]);
        this.toastrService.info(
        'Ödeme sayfasına yönlendiriliyorsunuz...',
        'Ödeme İşlemleri'
      );  
    }
  }

  async checkAvailableDate(rental:RentalDetail){
    console.log("checkMethod inside")
    console.log(rental)
    return (await this.rentalService.checkRentalDates(rental).toPromise());
  }
}

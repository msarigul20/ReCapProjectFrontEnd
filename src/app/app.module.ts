import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { WeekPriceCalculatedPipe } from './pipes/week-price-calculated.pipe';
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { CarFilterPipeColorPipe } from './pipes/car-filter-pipe-color.pipe';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';


import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    WeekPriceCalculatedPipe,
    CarFilterPipePipe,
    CarFilterPipeColorPipe,
    ColorPipePipe,
    BrandFilterPipePipe,
    CarFilterComponent,
    RentalAddComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

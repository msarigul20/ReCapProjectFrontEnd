import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;
  currentBrand:Brand;
  constructor(private branService:BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.branService.getBrands().subscribe((response) => {
      this.brands = response.data
      this.dataLoaded = true;
    });;
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active text-center px-4" ;
    }else{
      return "list-group-item text-center px-4" ;
    }
  }

}

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
  cleanBrand:Brand = {brandId:0, brandName:"All"}
  filterText = "";

  constructor(private branService:BrandService) {}

  ngOnInit(): void {
    this.getBrands();
    this.clearCurrentBrand();
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

  clearCurrentBrand(){
    this.currentBrand = this.cleanBrand;
  }
  getAllBrandClass(){
    if(this.currentBrand.brandId==0){
      return "list-group-item active text-center px-4"
    }else{
      return "list-group-item text-center px-4"
    }
  }


}

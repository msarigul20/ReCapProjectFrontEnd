import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor:Color;
  dataLoaded = false;
  cleanColor:Color = {colorId:0, colorName:"All"}
  filterText =""
  selectText="";



  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
    this.clearCurrentColor();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      (this.colors = response.data), (this.dataLoaded = true);
    });
  }

  setCurrentColor(color:Color){
    this.currentColor=color;
  }
  
  getCurrentColorClass(color:Color){
    if(color == this.currentColor){
      return "list-group-item active text-center px-5" ;
    }else{
      return "list-group-item text-center px-5" ;
    }
  }

  clearCurrentColor(){
    this.currentColor = this.cleanColor;
  }

  getAllColorClass(){
    if(this.currentColor.colorId==0){
      return "list-group-item active text-center px-4"
    }else{
      return "list-group-item text-center px-4"
    }
  }

}

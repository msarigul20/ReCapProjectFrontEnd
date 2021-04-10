import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekPriceCalculated'
})
export class WeekPriceCalculatedPipe implements PipeTransform {

  transform(dailyPrice: number, weeklyDiscount:number ): number {
    let weeklyPrice:number = (dailyPrice*7) -(dailyPrice*7)*(weeklyDiscount/100);
    return weeklyPrice;
  }

}

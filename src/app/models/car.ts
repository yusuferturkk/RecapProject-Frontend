import { DecimalPipe } from "@angular/common";

export interface Car {
  carId:number;
  brandId:number;
  colorId:number;
  modelYear:number;
  dailyPrice:DecimalPipe;
  description:string;
}

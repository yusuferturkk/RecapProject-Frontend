import { DecimalPipe } from "@angular/common";

export interface CarDetail{
    carId:number;
    brandId:number;
    colorId:number;
    carName:string;
    brandName:string;
    colorName:string;
    dailyPrice:DecimalPipe;
    modelYear:number;
    description:string;
    images:string[];
}
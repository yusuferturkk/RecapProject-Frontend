import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetail[] = [];
  imagePath: string= 'https://localhost:44371/'
  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }else if(params["id"]){
        this.getCarDetailById(params["carId"])
      }else{
        this.getCars();
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response)=>{
      this.cars = response.data;
    });
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe((response)=>{
      this.cars = response.data;
    });
  }

  getCarDetailById(carId:number){
    this.carService.getCarDetailById(carId).subscribe((response)=>{
      this.cars = response.data;
    });
  }
}

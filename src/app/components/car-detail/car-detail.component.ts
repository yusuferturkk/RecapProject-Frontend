import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetail: CarDetail[]= [];
  imagePath: string= 'https://localhost:44371/'
  constructor(private carDetailService: CardetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["id"]){
        this.getCarDetail(params["id"])
      }
    })
  }

  getCarDetail(carId:number){
    this.carDetailService.getCarDetail(carId).subscribe((response=>{
      this.carDetail = response.data;
    }))
  }
}

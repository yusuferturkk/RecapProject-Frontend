import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  apiUrl = 'https://localhost:44371/api/';
  constructor(private httpClient: HttpClient) { }

  getCarDetail(carId:number): Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl + "cars/getcardetailsbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}

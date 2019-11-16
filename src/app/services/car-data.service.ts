import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

export interface CarResponseBody {
  cars: Car[];
  exactMatch: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CarDataService {
  constructor(private http: HttpClient) {}

  getCars(body: any): Observable<CarResponseBody> {
    return this.http.post<CarResponseBody>('https://carfinderapi.azurewebsites.net/api/cars', body);
  }
}

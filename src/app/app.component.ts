import { Component } from '@angular/core';
import { CarDataService } from './services/car-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars$ = this.carDataService.getAllCars();

  constructor(private carDataService: CarDataService) {}
}

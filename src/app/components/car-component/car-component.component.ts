import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.scss']
})
export class CarComponentComponent implements OnInit {
  @Input()
  car: Car;

  constructor() {}

  ngOnInit() {}
}

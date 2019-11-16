import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Car,
  CarBodyType,
  CarCompany,
  CarDriveType,
  CarFuel,
  CarTransmission
} from './models/car.model';
import { CarDataService } from './services/car-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bodyTypes = Object.keys(CarBodyType).map(key => CarBodyType[key]);
  capacities = [
    {
      viewValue: '500 cm³',
      value: 0.5
    },
    {
      viewValue: '600 cm³',
      value: 0.6
    },
    {
      viewValue: '750 cm³',
      value: 0.75
    },
    {
      viewValue: '1000 cm³',
      value: 1
    },
    {
      viewValue: '1250 cm³',
      value: 1.25
    },
    {
      viewValue: '1500 cm³',
      value: 1.5
    },
    {
      viewValue: '2000 cm³',
      value: 2.0
    },
    {
      viewValue: '2500 cm³',
      value: 2.5
    },
    {
      viewValue: '3000 cm³',
      value: 3.0
    },
    {
      viewValue: '4000 cm³',
      value: 4.0
    },
    {
      viewValue: '5000 cm³',
      value: 5.0
    },
    {
      viewValue: '6000 cm³',
      value: 6.0
    }
  ];
  cars: Car[] = [];
  combustions = [
    {
      value: 1,
      viewValue: '1 L'
    },
    {
      value: 2,
      viewValue: '2 L'
    },
    {
      value: 3,
      viewValue: '3 L'
    },
    {
      value: 4,
      viewValue: '4 L'
    },
    {
      value: 5,
      viewValue: '5 L'
    },
    {
      value: 6,
      viewValue: '6 L'
    },
    {
      value: 7,
      viewValue: '7 L'
    },
    {
      value: 8,
      viewValue: '8 L'
    },
    {
      value: 9,
      viewValue: '9 L'
    },
    {
      value: 10,
      viewValue: '10 L'
    },
    {
      value: 11,
      viewValue: '11 L'
    },
    {
      value: 12,
      viewValue: '12 L'
    },
    {
      value: 13,
      viewValue: '13 L'
    },
    {
      value: 14,
      viewValue: '14 L'
    },
    {
      value: 15,
      viewValue: '15 L'
    }
  ];
  companies = Object.keys(CarCompany).map(key => ({
    viewValue: key,
    value: CarCompany[key]
  }));
  driveTypes = Object.keys(CarDriveType).map(key => ({
    viewValue: key,
    value: CarDriveType[key]
  }));
  exactMatch = true;
  form: FormGroup;
  fuels = Object.keys(CarFuel).map(key => ({
    viewValue: key,
    value: CarFuel[key]
  }));
  powers = [
    {
      viewValue: '50 KM',
      value: 50
    },
    {
      viewValue: '100 KM',
      value: 100
    },
    {
      viewValue: '120 KM',
      value: 120
    },
    {
      viewValue: '150 KM',
      value: 150
    },
    {
      viewValue: '200 KM',
      value: 200
    },
    {
      viewValue: '300 KM',
      value: 300
    },
    {
      viewValue: '500 KM',
      value: 500
    },
    {
      viewValue: '1000KM',
      value: 1000
    }
  ];
  transmissions = Object.keys(CarTransmission).map(key => ({
    viewValue: key,
    value: CarTransmission[key]
  }));

  constructor(private carDataService: CarDataService, private fb: FormBuilder) {}

  getCars(): void {
    const formValue = this.getFormValue();
    if (Object.entries(formValue).length !== 0) {
      this.carDataService.getCars(formValue).subscribe(res => {
        this.cars = res.cars;
        this.exactMatch = res.exactMatch;
      });
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  onReset(): void {
    this.form.reset({});
    this.onSubmit();
  }

  onSubmit(): void {
    this.getCars();
  }

  private getFormValue(): any {
    const value = this.form.value;
    const searchParams: any = {};
    Object.keys(this.form.value).forEach(key => {
      if (value[key]) {
        searchParams[key] = value[key];
      }
    });
    return searchParams;
  }

  private initForm(): void {
    this.form = this.fb.group({
      bodyType: [null],
      capacityFrom: [null],
      capacityTo: [null],
      company: [null],
      driveType: [null],
      fuel: [null],
      fuelConsumptionTo: [],
      fuelConsumptionFrom: [],
      powerFrom: [null],
      powerTo: [null],
      priceFrom: [null],
      priceTo: [null],
      transmission: [null]
    });
  }
}

export enum CarBodyType {
  Hatchback = 'hatchback',
  Sedan = 'sedan',
  SUV = 'SUV',
  Coupe = 'coupe',
  Convertible = 'convertible',
  Wagon = 'wagon',
  Van = 'van',
  Jeep = 'jeep'
}

export enum CarCompany {
  Audi = 'Audi',
  BMW = 'BMW',
  Fiat = 'Fiat',
  Hyundai = 'Hyundai',
  Kia = 'Kia',
  Opel = 'Opel',
  MercedesBenz = 'MercedesBenz',
  Volkswagen = 'Volkswagen'
}

export enum CarDriveType {
  AWD = '4x4',
  FrontWheel = 'front',
  RearWheel = 'rear'
}

export enum CarFuel {
  Petrol = 'petrol',
  Diesel = 'diesel',
  Hybrid = 'hybrid',
  LPG = 'LPG'
}

export enum CarTransmission {
  Automatic = 'auto',
  Manual = 'manual'
}

/**
 * Example:
 * ```json
 * {
 *   "bodyType": "wagon",
 *   "capacity": 2.0,
 *   "company": "BMW",
 *   "driveType": "4x4",
 *   "fuel": "petrol",
 *   "fuelConsumption": 6.7,
 *   "imageUrl": "/assets/cars/bmw-series5-g31-wagon.jpg",
 *   "model": "Series 5",
 *   "power": 252,
 *   "price": 258219,
 *   "transmission": "auto",
 *   "version": "G31"
 * }
 * ```
 */
export interface Car {
  bodyType: CarBodyType;
  capacity: number;
  company: CarCompany;
  driveType: CarDriveType;
  fuel: CarFuel;
  fuelConsumption: number;
  imageUrl: string;
  model: string;
  power: number;
  price: number;
  transmission: CarTransmission;
  version: string;
}

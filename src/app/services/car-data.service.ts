import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from '../models/car.model';
import { FirestoreUtil } from '../utils/fire-store.util';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {
  constructor(private firestore: AngularFirestore) {}

  getAllCars(): Observable<Car[]> {
    return this.firestore
      .collection<Car>('cars')
      .snapshotChanges()
      .pipe(map(res => FirestoreUtil.toArray(res)));
  }
}

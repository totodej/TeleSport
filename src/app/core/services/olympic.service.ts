import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Country } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Country[]>([]);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<Country[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        console.error(error);
        this.olympics$.next([]);
        return caught;
      })
    );
  };

  // Get the observable of the Olympic data
  getOlympics() {
    return this.olympics$.asObservable();
  };

  // Get a specific Olympic data by its ID
  getOlympicById(id:number) {
    return this.olympics$.asObservable().pipe(
      map((olympics) => olympics?.find((olympic: { id: number }) => olympic.id === id))
    );
  }
}

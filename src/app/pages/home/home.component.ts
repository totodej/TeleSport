import { Component, OnInit } from '@angular/core';
import { count, Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Country } from 'src/app/core/models/Olympic';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<any> = of(null);
  public countries: Country[] = [];

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.olympics$.subscribe(data => {
      this.countries = data ?? [];
      console.log('countries', this.countries);
      this.getNumberJOs();
    });
  };
  
  getNumberJOs(): number {
    const countries = this.countries ?? [];
    const allCities = countries.flatMap(country => country.participations.map(participation => participation.city));

    return new Set(allCities).size;
  }
}

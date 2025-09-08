import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Country } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<any> = of(null);
  public countries: Country[] = [];
  public JOsTotal: number = 0;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe((data) => {
      this.countries = data;
      this.getNumberJOs();
    });
  }

  getNumberJOs(): void {
    const allCities = this.countries.flatMap((country) =>
      country.participations.map((participation) => participation.city)
    );

    this.JOsTotal = new Set(allCities).size;
  }
}

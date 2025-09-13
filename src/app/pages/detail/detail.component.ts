import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleComponent } from 'src/app/components/title/title.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Country } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { LinePieComponent } from "src/app/components/line-pie/line-pie.component";
import { CardComponent } from 'src/app/components/card/card.component';
import { Participation } from 'src/app/core/models/Participation';
import { LoadingComponent } from 'src/app/components/loading/loading.component';

@Component({
  selector: 'app-detail',
  imports: [TitleComponent, LinePieComponent, CardComponent, RouterLink, LoadingComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  private subscription?: Subscription = new Subscription;
  country!:Country;
  athletesTotal!: number;
  medalsTotal!: number;
  JOsTotal!: number;

  constructor(private route: ActivatedRoute, private olympicService: OlympicService) { }
  
  ngOnInit(): void {
    // Get the country ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');

    // Fetch the Olympic data for the given country ID
    this.subscription = this.olympicService.getOlympicById(+id!).subscribe(data => {
      if(data) {
        this.country = data;
        this.getAthletesTotal();
        this.getMedalsTotal();
        this.getNumberJOs();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // Calculate the total number of athletes
  getAthletesTotal(): void {
    const athletes = this.country.participations.map((participation: Participation) => participation.athleteCount);
    this.athletesTotal = athletes.reduce((sum, count) => sum + count, 0);
  }

  // Calculate the total number of medals
  getMedalsTotal(): void {
    const medals = this.country.participations.map((participation: Participation) => participation.medalsCount);
    this.medalsTotal = medals.reduce((sum, count) => sum + count, 0);
  }

  // Calculate the total number of Olympic Games the country participated in
  getNumberJOs(): void {
    const jos = this.country.participations.map((participation: Participation) => participation.city);
    this.JOsTotal = new Set(jos).size;
  }
}


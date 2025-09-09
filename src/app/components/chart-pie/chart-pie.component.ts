import { Component, Input, PLATFORM_ID, inject, ChangeDetectorRef, effect } from '@angular/core';
import { Country } from 'src/app/core/models/Olympic';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from '../../core/services/appconfig.service';
import { isPlatformBrowser } from '@angular/common';
import { DesignerService } from '../../core/services/designer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-chart-pie',
    imports: [ChartModule],
    templateUrl: './chart-pie.component.html',
    styleUrl: './chart-pie.component.scss'
})

export class ChartPieComponent {
  @Input() data!: Country[];
  totalMedals: number[] = [];
  chartData: any;
  options: any;
  platformId = inject(PLATFORM_ID);

  configService = inject(AppConfigService);
  designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef, private router: Router) {}

  themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

  ngOnChanges(): void {
    if(this.data) {
      this.getTotalMedals();
      this.initChart();
    }
  };

  initChart(): void {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.chartData = {
        labels: this.data.map(d => d.country),
        datasets: [
          {
            data: this.totalMedals,
            backgroundColor: ["#793D52", "#956065", "#89A1DB", "#B8CBE7", "#9780A1"],
            hoverBackgroundColor: ["#793D52", "#956065", "#89A1DB", "#B8CBE7", "#9780A1"]
          }
        ]
      };

      this.options = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: textColor
            }
          }
        }
      };
      this.cd.markForCheck()
    }
  };

  getTotalMedals(data: Country[] = this.data): void {
    const totalMedals = data.map(country => 
      country.participations.reduce((sum, p) => sum + p.medalsCount, 0)
    );

    this.totalMedals = totalMedals;
  };

  onSelect(event: any): void { 
    const index = event.element.index;

    if (index !== undefined && this.data[index]) {
      let country = this.data[index];

      this.router.navigateByUrl(`/detail/${country.id}`);
    } else {
      console.error('Impossible de récupérer le pays pour l’index', index, event);
    }
  };
}

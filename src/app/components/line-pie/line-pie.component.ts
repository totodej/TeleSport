import { ChangeDetectorRef, Component, effect, inject, Input, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from 'src/app/core/services/appconfig.service';
import { DesignerService } from '../../core/services/designer.service';
import { isPlatformBrowser } from '@angular/common';
import { Country } from 'src/app/core/models/Olympic';
import { ChartData } from 'chart.js';
import { Participation } from 'src/app/core/models/Participation';

@Component({
  selector: 'app-line-pie',
  imports: [ChartModule],
  templateUrl: './line-pie.component.html',
  styleUrl: './line-pie.component.scss'
})
export class LinePieComponent {
  @Input() data!: Country;
  chartData!: ChartData;
  medals: number[] = [];
  years: number[] = [];
  options: any;

  platformId = inject(PLATFORM_ID);
  configService = inject(AppConfigService);
  designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef) { }

  // Reinitialize the chart when the theme changes
  themeEffect = effect(() => {
    if (this.configService.transitionComplete()) {
      if (this.designerService.preset()) {
        this.initChart();
      }
    }
  });
  
  // React to changes in the input data
  ngOnChanges(): void {
    if(this.data) {
      this.getMedals();
      this.getYears();
      this.initChart();
    }
  };

  // Initialize the chart with data and options
  initChart(): void {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.chartData = {
        labels: this.years,
        datasets: [
          {
            label: 'Medals',
            data: this.medals,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
            tension: 0.4
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
      this.cd.markForCheck()
    }
  };

  // Get the medals count
  getMedals(): void {
    this.medals = this.data.participations.map((participation: Participation) => participation.medalsCount);
  };

  // Get the years of participation
  getYears(): void {
    this.years = this.data.participations.map((participation: Participation) => participation.year);
  };
}

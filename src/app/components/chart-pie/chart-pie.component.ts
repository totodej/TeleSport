import { Component, Input } from '@angular/core';
import { Country } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-chart-pie',
  standalone: true,
  imports: [],
  templateUrl: './chart-pie.component.html',
  styleUrl: './chart-pie.component.scss'
})
export class ChartPieComponent {
  @Input() data!: Country[];

}

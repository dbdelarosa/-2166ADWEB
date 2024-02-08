import { Component } from '@angular/core';

@Component({
  selector: 'app-percent-pipes',
  templateUrl: './percent-pipes.component.html',
  styleUrls: ['./percent-pipes.component.css']
})
export class PercentPipesComponent {
  decimalPercent: number = 0.4567;
  defaultPercent: number = 0.75;
  customPercent: number = 0.2345;
}

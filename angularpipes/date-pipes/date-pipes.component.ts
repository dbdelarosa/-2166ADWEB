import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipes',
  templateUrl: './date-pipes.component.html',
  styleUrls: ['./date-pipes.component.css']
})
export class DatePipesComponent {
  currentDate: Date = new Date();

}

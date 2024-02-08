import { Component } from '@angular/core';

@Component({
  selector: 'app-decimal-pipes',
  templateUrl: './decimal-pipes.component.html',
  styleUrls: ['./decimal-pipes.component.css']
})
export class DecimalPipesComponent {
  pi: number = 3.14159265359;
  price: number = 1234.5678;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-text-format-pipes',
  templateUrl: './text-format-pipes.component.html',
  styleUrls: ['./text-format-pipes.component.css']
})
export class TextFormatPipesComponent {
 

    transform(value: string): string {
      // Your custom logic for text formatting here
      // For demonstration, let's convert the text to uppercase
      return value.toUpperCase();
    }
  }
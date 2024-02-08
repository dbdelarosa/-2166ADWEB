import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipes',
  templateUrl: './json-pipes.component.html',
  styleUrls: ['./json-pipes.component.css']
})
export class JsonPipesComponent {

  simpleObject: any = { "name": "John", "age": 30, "city": "New York" };

  arrayOfObjects: any[] = [
    { "name": "John", "age": 30 },
    { "name": "Alice", "age": 25 },
    { "name": "Bob", "age": 35 }
  ];

  nestedObject: any = {
    "name": "John",
    "address": {
      "city": "New York",
      "country": "USA"
    }
  };
}
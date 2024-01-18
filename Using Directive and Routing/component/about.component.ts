import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
//string interpulation
position = 'Student';
work_experience = 3;
email= 'nnedrosa123@gmail.com';
website= 'JohnnyYesPaPa';
phone = 12256-3636-2542;

//image interpolation/binding
imageUrl: string = "assets/den.jpg";
imageW: number = 110;
imageH: number = 110;
}


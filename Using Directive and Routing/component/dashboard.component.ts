import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showText: boolean = false;
  toggleText() {
    this.showText =!this.showText;


}
staff = [ 
  { firstName: 'Johhny ', lastName: 'Sage', email: 'sage.johny@test.com', role: 'User' },   
  { firstName: 'Coco', lastName: 'Melon', email: 'MelonNiCoco@martin.com', role: 'Admin' }, 
  { firstName: 'Cardo', lastName: 'Dalisay', email: 'dJcardo@dalisay@martinex.com', role: 'Admin' }, 
  { firstName: 'Maria', lastName: 'Garcia', email: 'maria.garcia@test.com', role: 'User' }, 
  { firstName: 'Jay', lastName: 'Bernardo', email: 'jay.bernardo@test.com', role: 'User' } 
  ];
}

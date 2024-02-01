import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurpartnersComponent } from './ourpartners/ourpartners.component';
import { AboutComponent } from './about/about.component';
import { JoinUsComponent } from './join-us/join-us.component';
const routes: Routes = [
  {
    path: "Home",
    component : HomeComponent,

  },
  {
    path: 'Ourpartners',
    component: OurpartnersComponent,
  },
  {
    path: 'About',
    component: AboutComponent,
  },

  {
    path: 'JoinUs',
    component: JoinUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


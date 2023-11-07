import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodListComponent } from './food-list/food-list.component';
import { HomeComponent } from './home/home.component';
import { AlainComponent } from './alain/alain.component';
import { EmerilComponent } from './emeril/emeril.component';
import { AnthonyComponent } from './anthony/anthony.component';
import { BrinjalsComponent } from './brinjals/brinjals.component';
import { CarrotsComponent } from './carrots/carrots.component';
import { PotatoesComponent } from './potatoes/potatoes.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
  path: '', component: HomeComponent
  },
  {
  path: 'potatoes', component: PotatoesComponent
  },
  {
  path: 'carrots', component: CarrotsComponent
  },
  {
  path: 'brinjals', component: BrinjalsComponent
  },
  {
  path: 'alain', component: AlainComponent
  },
  {
  path: 'emeril', component: EmerilComponent
  },
  {
  path: 'anthony', component: AnthonyComponent
  },
  {
  path: 'about', component: AboutComponent
  },
  {
  path: 'list', component: FoodListComponent
  },
  {
    path: 'list/:id', component: FoodDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

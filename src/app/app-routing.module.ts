import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodListComponent } from './food-list/food-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: '', component: HomeComponent
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

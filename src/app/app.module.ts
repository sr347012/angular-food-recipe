import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AlainComponent } from './alain/alain.component';
import { EmerilComponent } from './emeril/emeril.component';
import { AnthonyComponent } from './anthony/anthony.component';
import { PotatoesComponent } from './potatoes/potatoes.component';
import { CarrotsComponent } from './carrots/carrots.component';
import { BrinjalsComponent } from './brinjals/brinjals.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodDetailComponent,
    HomeComponent,
    AlainComponent,
    EmerilComponent,
    AnthonyComponent,
    PotatoesComponent,
    CarrotsComponent,
    BrinjalsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

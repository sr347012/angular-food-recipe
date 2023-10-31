import { Component, OnInit } from '@angular/core';
import { FoodRecipeService } from '../food-recipe.service';

@Component({
  selector: 'app-brinjals',
  templateUrl: './brinjals.component.html',
  styleUrls: ['./brinjals.component.css']
})
export class BrinjalsComponent implements OnInit {

  constructor(private ser: FoodRecipeService) { }
  samplerecipes: any | undefined;
  
  ngOnInit(): void {
    this.ser.getAPI('brinjal').subscribe((data: any)=> {
      data = data.hits;
      console.log(data);
      this.samplerecipes = data;

    });
  }

}

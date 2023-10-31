import { Component, OnInit } from '@angular/core';
import { FoodRecipeService } from '../food-recipe.service';

@Component({
  selector: 'app-carrots',
  templateUrl: './carrots.component.html',
  styleUrls: ['./carrots.component.css']
})
export class CarrotsComponent implements OnInit {

  constructor(private ser: FoodRecipeService) { }
  samplerecipes: any | undefined;

  ngOnInit(): void {
    this.ser.getAPI('carrot').subscribe((data: any)=> {
      data = data.hits;
      console.log(data);
      this.samplerecipes = data;

    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FoodRecipeService } from '../food-recipe.service';

@Component({
  selector: 'app-potatoes',
  templateUrl: './potatoes.component.html',
  styleUrls: ['./potatoes.component.css']
})
export class PotatoesComponent implements OnInit {

  constructor(private ser: FoodRecipeService) { }

  samplerecipes : any | undefined;

  ngOnInit(): void {
    this.ser.getAPI('potato').subscribe((data: any)=> {
      data = data.hits;
      console.log(data);
      this.samplerecipes = data;

    });
  }

}

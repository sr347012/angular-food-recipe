import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params
 } from '@angular/router';
import { FoodRecipeService } from '../food-recipe.service';

 @Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  myId : string | undefined
  myrecipe: any | undefined
  cal : any | 0 ;

  constructor(private activatedRoute: ActivatedRoute, private service: FoodRecipeService) {
    this.activatedRoute.params.subscribe((params: Params)=>{this.myId = params['id']});

   }

  ngOnInit() {
    // console.log() 26c7a82641dc5b758192eb5db516c215
    this.service.getRecipeDetail(this.myId).subscribe((data: any)=> {
      this.myrecipe = data.recipe;
      console.log(this.myrecipe);
      this.cal = Math.round(this.myrecipe.calories);
    })


    
  }

}

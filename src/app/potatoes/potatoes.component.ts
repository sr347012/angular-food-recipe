import { Component, OnInit } from '@angular/core';
import { FoodRecipeService } from '../food-recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-potatoes',
  templateUrl: './potatoes.component.html',
  styleUrls: ['./potatoes.component.css']
})
export class PotatoesComponent implements OnInit {

  constructor(private ser: FoodRecipeService, private router: Router) { }

  samplerecipes : any | undefined;

  ngOnInit(): void {
    this.ser.getAPI('potato').subscribe((data: any)=> {
      data = data.hits;
      console.log(data);
      this.samplerecipes = data;

    });
  }
  redirect(link: any) {
    // console.log(link);
    const id = link.split('/').reverse()[0].split('?')[0];
    this.router.navigate(["/list", id])
  }

}

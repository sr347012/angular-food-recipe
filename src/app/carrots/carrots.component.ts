import { Component, OnInit } from '@angular/core';
import { FoodRecipeService } from '../food-recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrots',
  templateUrl: './carrots.component.html',
  styleUrls: ['./carrots.component.css']
})
export class CarrotsComponent implements OnInit {

  constructor(private ser: FoodRecipeService, private router: Router) { }
  samplerecipes: any | undefined;

  ngOnInit(): void {
    this.ser.getAPI('carrot').subscribe((data: any)=> {
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

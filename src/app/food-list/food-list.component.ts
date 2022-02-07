import { Component, OnInit } from '@angular/core';
import { FoodRecipeService } from '../food-recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  recipeLists : any | undefined;
  searchName: string | undefined;

  constructor(private ser: FoodRecipeService, private router: Router) { }

  ngOnInit(): void {
  }

  search(){
    // console.log('Search clicked', this.searchName);
    let search_str= this.searchName;
    this.ser.getAPI(search_str).subscribe((data: any)=> {
      data = data.hits;
      console.log(data);
      this.recipeLists = data;

    });
  }

  redirect(link: any) {
    // console.log(link);
    const id = link.split('/').reverse()[0].split('?')[0];
    this.router.navigate(["/list", id])
  }
}

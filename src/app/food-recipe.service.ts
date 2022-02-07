import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FoodRecipeService {
  APP_ID = 'bfdfa512';
  APP_KEY = '8f45f8725135b3df2cdf26dd2f48569f'

  constructor(private http: HttpClient) { }

  getAPI(search_str: any) {
    return this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search_str}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`)
  }

  getRecipeDetail(id: any){
    return this.http.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`)
  }
}

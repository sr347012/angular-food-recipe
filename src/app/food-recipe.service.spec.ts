import { TestBed } from '@angular/core/testing';

import { FoodRecipeService } from './food-recipe.service';

describe('FoodRecipeService', () => {
  let service: FoodRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal, MealResponse } from '../interfaces/recipes.interface';
import { EMPTY, Observable, catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private _recipes: Meal[] = [];
  get recipes() {
    return [...this._recipes];
  }
  constructor(private http: HttpClient) {}
  
  getRecipeById(id: string): Observable<Meal> {
    return this.http
      .get<MealResponse>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .pipe(map(({ meals: [recipe] }) => recipe));
  }
  getRecipes() {}

  searchRecipesByDishName(name: string) {
    this.http
      .get<MealResponse>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      )
      .pipe(
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
      .subscribe({
        next: (value) => {
          console.log(value.meals);
          this._recipes = value.meals ?? [];
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}

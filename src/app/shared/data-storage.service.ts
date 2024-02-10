import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs";
import {AuthService} from "../auth/auth.service";


@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService:AuthService) {}

  createAndStoreRecipe(){
       const recipes = this.recipeService.getRecipes()
    this.http.put('https://my-recipe-project-9b182-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(recipes => {
      console.log(recipes)
    })
  }

  fetchRecipe(){
      return this.http.get<Recipe[]>('https://my-recipe-project-9b182-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(recipes => {
      return recipes.map(recipes => {
        return {
          ...recipes, ingredients: recipes.ingredients ? recipes.ingredients : []
        }
      })
    }), tap(recipes => {
      this.recipeService.fetchRecipe(recipes)
    }))
  }

}

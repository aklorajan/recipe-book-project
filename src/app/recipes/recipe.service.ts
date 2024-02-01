import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";


export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[]= [
    new Recipe('Test Recipe',
      'A sample for testing Recipe',
      'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium' ,
      [new Ingredient('Tomatoes', 3) ,
        new Ingredient('Cheese' , 2)]),
    new Recipe('Another Test Recipe',
      'Another sample for testing Recipe',
      'https://a.cdn-hotels.com/gdcs/production172/d1780/0301035b-e96e-470d-918a-89aff704bca4.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      [new Ingredient('Meat', 1),
        new Ingredient('Kebab', 3)])
];

 getRecipes(){
   return this.recipes.slice();
 }
getRecipe(id: number){
  return this.recipes[id];
}

}


import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>();
 private ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 1),
  ];
getIngredients(){
  return this.ingredients.slice();
}

getIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient)
}
addIngredients(ingredients:Ingredient){
  this.ingredients.push(ingredients)
  this.ingredientChanged.emit(this.ingredients.slice());
}
fromRecipeToShoppingList(ingredients: Ingredient[]){
this.ingredients.push(...ingredients);
this.ingredientChanged.emit(this.ingredients.slice())
}


}

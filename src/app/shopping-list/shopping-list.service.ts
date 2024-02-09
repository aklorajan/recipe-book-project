import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();
  IngredientEditing = new Subject<number>()
 private ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 1),
  ];
getIngredients(){
  return this.ingredients.slice();
}
getIngredientByI(index:number){
  return this.ingredients[index]
}
updateIngredient(index:number, newIngredient: Ingredient){
  this.ingredients[index] = newIngredient;
  this.ingredientChanged.next(this.ingredients.slice())
}

getIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient)
}
addIngredients(ingredients:Ingredient){
  this.ingredients.push(ingredients)
  this.ingredientChanged.next(this.ingredients.slice());
}
fromRecipeToShoppingList(ingredients: Ingredient[]){
this.ingredients.push(...ingredients);
this.ingredientChanged.next(this.ingredients.slice())
}
deleteIngredient(index:number){
  this.ingredients.splice(index,1)
  this.ingredientChanged.next(this.ingredients.slice())

}

}

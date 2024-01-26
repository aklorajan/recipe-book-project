import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeItemToDetail =new EventEmitter<Recipe>();
  recipes: Recipe[]= [
    new Recipe('Test Recipe', 'A sample for testing Recipe','https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium' ),
    new Recipe('Another Test Recipe', 'Another sample for testing Recipe','https://a.cdn-hotels.com/gdcs/production172/d1780/0301035b-e96e-470d-918a-89aff704bca4.jpg?impolicy=fcrop&w=1600&h=1066&q=medium' )
  ];
  onSelectedItem(recipe:Recipe){
    this.recipeItemToDetail.emit(recipe)
  }

  protected readonly Recipe = Recipe;
}

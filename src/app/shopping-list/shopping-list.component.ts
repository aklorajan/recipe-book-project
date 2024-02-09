import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'

})
export class ShoppingListComponent implements OnInit{
  ingredients:Ingredient[]=[] ;

  constructor(private sLService:ShoppingListService) {

  }
  ngOnInit() {
this.ingredients =this.sLService.getIngredients();
    this.sLService.ingredientChanged.subscribe(
      (receivedIngredient:Ingredient[])=>{
        this.ingredients= receivedIngredient;
      }
    );
  }
  onEditIng(index: number){
    this.sLService.IngredientEditing.next(index);
  }


}

import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{
 recipe: Recipe;
id:number;

constructor(private slService:ShoppingListService,
            private route: ActivatedRoute,
            private recipeService:RecipeService,
            private router:Router ) {
}
ngOnInit() {
  // const id = +this.route.snapshot.params['id'];
  this.route.params.subscribe(
    (params:Params)=>{
      this.id = +params['id']
      this.recipe =this.recipeService.getRecipe(this.id)
    }
  )
}

  onAddToShoppingList(){
this.slService.fromRecipeToShoppingList(this.recipe.ingredients)
  }
  onEditRecipe(){
  this.router.navigate(['edit'],{relativeTo: this.route})
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes']);
  }
}

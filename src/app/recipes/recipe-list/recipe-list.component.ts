import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{
 subscription:Subscription
  recipes: Recipe[];


  constructor(private recipeService:RecipeService,private router:Router,
              private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription =this.recipeService.recipeChanged.subscribe(
      (recipe:Recipe[])=>{
        this.recipes = recipe
      }
    )
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route})
  }


  protected readonly Recipe = Recipe;

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}

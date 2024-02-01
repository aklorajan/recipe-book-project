import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit{
id:number;
editeMode = false;
  constructor(private route: ActivatedRoute,
              private recipeServeice:RecipeService) {
  }
ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=> {
        this.id = +params['id']
        this.editeMode = params['id'] !== null ;
      }
    )
}
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('f') slForm:NgForm;
  editMode = false;
  ingToEditIndex:number;
  editedIngItem: Ingredient;

constructor(private sLService:ShoppingListService) {
}
ngOnInit() {
  this.sLService.IngredientEditing.subscribe(
    (index: number)=> {
      this.editMode = true;
      this.ingToEditIndex = index
      this.editedIngItem = this.sLService.getIngredientByI(index);
      this.slForm.setValue({
        name : this.editedIngItem.name,
        amount: this.editedIngItem.amount
      })
    }
  )


}

  onAddItem(form:NgForm){
    const ingNew = new Ingredient(form.value.name,form.value.amount)
  if (this.editMode){
    this.sLService.updateIngredient(this.ingToEditIndex, ingNew)
  } else {
       this.sLService.addIngredients(ingNew);
  }
    this.editMode = false
    this.slForm.reset()
  }
  onClear(){
    this.editMode = false
    this.slForm.reset()
  }
  onDelete(){
  this.sLService.deleteIngredient(this.ingToEditIndex)
    this.onClear()
  }
}

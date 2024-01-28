import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
@ViewChild('nameInput') nameInputRef:ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

@Output() newIngredient = new EventEmitter<Ingredient>();


  onAddItem(){
   this.newIngredient.emit(
     {
      name: this.nameInputRef.nativeElement.value,
       amount: this.amountInputRef.nativeElement.value
     }
   )
  }
}

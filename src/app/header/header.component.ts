import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 @Output() navigateElement = new EventEmitter<string>();


  onNavigate(navElement:string){
      this.navigateElement.emit(navElement)

  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
navigateElmentRecived:string = 'recipe'


  onNavigationBar(naveEl:string){
  this.navigateElmentRecived = naveEl
  }
}

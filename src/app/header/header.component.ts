import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";
import {exhaustMap, map, Subscription, take} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
  private userSub: Subscription
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }
ngOnInit() {
  this.userSub = this.authService.user.subscribe(user=> {
     this.isAuthenticated = !!user;
   })
}
  onSaveData(){
  this.dataStorageService.createAndStoreRecipe()
  }
  onFetchData(){
  this.dataStorageService.fetchRecipe().subscribe();
  }
  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }

}

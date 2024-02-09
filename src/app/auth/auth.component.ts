import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
isLoginMode = true;
isLoading = false;
error = '';

constructor(private authService: AuthService,
            private router: Router) {
}
  onSwitchTo(){
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm){
  this.isLoading = true
  const email =form.value.email;
  const password = form.value.password

    let authObs: Observable<AuthResponseData>;

    console.log(form.value)
    if (this.isLoginMode){
    authObs=this.authService.login(email, password)
    }else {
     authObs= this.authService.signup(email, password)
    }
  authObs.subscribe(resData => {
      console.log(resData)
      this.isLoading = false
    this.router.navigate(['/recipes'])
    },
      errorMassage => {
      console.log(errorMassage)
      this.error = errorMassage
      this.isLoading = false
    })
    form.reset()
  }



  protected readonly onsubmit = onsubmit;
}

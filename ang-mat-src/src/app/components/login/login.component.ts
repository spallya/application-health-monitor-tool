import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

import { ValidateService } from "../../services/validate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,

    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    }
    // if(!this.validateService.validateLogin(user)) {
    //   // this.flashMessage.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 3000});
    //   return false;
    // }
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      } else {

        this.router.navigate(['/login']);
      }
    });
  }

}

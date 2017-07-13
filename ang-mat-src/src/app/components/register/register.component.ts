import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: String;
  lastName: String;
  email: String;
  password: String;
  organization: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,

    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      organization: this.organization
    }
    console.log('Submit occured')
    // if(!this.validateService.validateRegister(user)) {

    //   return false;
    // }
    //
    // if(!this.validateService.validateEmail(user.email)) {

    //   return false;
    // }

    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {

        console.log('Success register')
        this.router.navigate(['/login']);
      } else {

        console.log('Fail register')
        this.router.navigate(['/register']);
      }
    });
  }

}

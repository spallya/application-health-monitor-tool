import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
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
    private flashMessage: FlashMessagesService,
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
    //   // this.flashMessage.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 3000});
    //   return false;
    // }
    //
    // if(!this.validateService.validateEmail(user.email)) {
    //   // this.flashMessage.show('Please provide a valid email', {cssClass: 'alert-danger', timeout: 3000});
    //   return false;
    // }

    this.authService.registerUser(user).subscribe(data => {
      console.log(data)
      if(data.success) {
        // this.flashMessage.show('Registered Successfully. Please login', {cssClass: 'alert-success', timeout: 3000});
        console.log('Success register')
        this.router.navigate(['/login']);
      } else {
        // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        console.log('Fail register')
        this.router.navigate(['/register']);
      }
    });
  }

}

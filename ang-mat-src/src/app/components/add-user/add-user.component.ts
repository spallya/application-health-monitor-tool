import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

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

  onAddUserSubmit(form) {
    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      organization: this.organization
    }
    console.log(newUser)

    // this.authService.registerUser(user).subscribe(data => {
    //   console.log(data)
    //   if(data.success) {
    //
    //     console.log('Success register')
    //     this.router.navigate(['/login']);
    //   } else {
    //
    //     console.log('Fail register')
    //     this.router.navigate(['/register']);
    //   }
    // });
  }

}

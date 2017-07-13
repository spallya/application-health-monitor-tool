import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { OrganizationService } from "../../services/organization.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {

  orgName: String;
  description: String;
  user: UserInterface;

  constructor(
    private authService: AuthService,
    private orgService: OrganizationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onAddOrgSubmit(form) {
    const newOrg = {
      name: this.orgName,
      description: this.description,
      currentUserId: this.user.userId
    }
    console.log(newOrg);
    this.orgService.addOrganization(newOrg).subscribe(data => {
      if(data.success) {
        console.log('Success register')
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Fail register')
        this.router.navigate(['/']);
      }
    });
  }

}

interface UserInterface {
  firstName: String;
  lastName: String;
  email: String;
  userId: String;
}

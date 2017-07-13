import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { CommunicatorService } from "../../services/communicator.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: UserInterface;

  constructor(
    private authService: AuthService,
    private communicatorService: CommunicatorService,
    private router: Router
  ) {
    if(this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        this.communicatorService.announceCurrentUserId(this.user.userId);
      },
      err => {
        console.log(err);
        return false;
      });
    }
  }

  ngOnInit() {

  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/']);
    return false;
  }

  persistOrg(currentOrgId) {
    this.communicatorService.announceCurrentOrgId(currentOrgId);
  }

}

interface UserInterface {
  firstName: String;
  lastName: String;
  email: String;
  userId: String;
}

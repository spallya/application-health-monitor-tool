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

  constructor(
    private authService: AuthService,
    private communicatorService: CommunicatorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();

    this.router.navigate(['/']);
    return false;
  }

  persistOrg(orgValue) {
    this.communicatorService.announceCurrentOrgName(orgValue);
  }

}

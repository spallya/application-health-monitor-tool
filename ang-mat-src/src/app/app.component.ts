import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems = sidebarMenuItem;
  title = 'app';
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  menuItemClick(i) {
    this.menuItems.forEach(item => {
      item.active = false;
    });
    this.menuItems[i].active = !this.menuItems[i].active;
    this.router.navigate([`/${this.menuItems[i].routerLink}`]);
  }
}

const sidebarMenuItem = [
  {
    name: "Dashboard", routerLink: "/dashboard", active: true
  },
  {
    name: "Profile", routerLink: "/profile", active: false
  },
  {
    name: "Servers", routerLink: "/dashboard", active: false
  },
  {
    name: "Users", routerLink: "/dashboard", active: false
  },
  {
    name: "Logout", routerLink: "/dashboard", active: false
  }
];

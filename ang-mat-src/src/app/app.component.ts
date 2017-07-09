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
    name: "Dashboard", routerLink: "/dashboard", active: true, icon: 'fa fa-tachometer'
  },
  {
    name: "User Profile", routerLink: "/profile", active: false, icon: 'fa fa-user'
  },
  {
    name: "Organizations", routerLink: "/organizations", active: false, icon: 'fa fa-sitemap'
  },
  {
    name: "Servers", routerLink: "/servers", active: false, icon: 'fa fa-windows'
  },
  {
    name: "Users", routerLink: "/users", active: false, icon: 'fa fa-users'
  }
];

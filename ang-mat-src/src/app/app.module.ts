import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { MdInputModule } from '@angular/material';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdIconRegistry } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServerComponent } from './components/server/server.component';

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { CommunicatorService } from "./services/communicator.service";

import { AuthGuard } from "./guard/auth.guard";
import { UsersComponent } from './components/users/users.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddServerComponent } from './components/add-server/add-server.component';
import { AddOrganizationComponent } from './components/add-organization/add-organization.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'servers', component: ServerComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'organizations', component: OrganizationsComponent, canActivate: [AuthGuard]},
  {path:'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path:'**', redirectTo: '/'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ServerComponent,
    UsersComponent,
    OrganizationsComponent,
    AddUserComponent,
    AddServerComponent,
    AddOrganizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    MdInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdIconModule,
    MaterialModule,
    FlexLayoutModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    MdIconRegistry,
    CommunicatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

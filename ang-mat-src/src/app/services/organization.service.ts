import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { AuthService } from "./auth.service";
import 'rxjs/add/operator/map';

@Injectable()
export class OrganizationService {

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  addOrganization(newOrganization) {
    let headers = new Headers();
    headers.append('Authorization', this.authService.getAuthToken());
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/organizations/add', newOrganization, {headers: headers})
      .map(res => res.json());
  }

}

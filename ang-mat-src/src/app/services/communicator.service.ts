import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicatorService {

  constructor() { }

  private currentOrgNameRequested = new Subject<String>();
  currentOrgNameAnnounced = this.currentOrgNameRequested.asObservable();

  announceCurrentOrgName(orgName: String) {
    this.currentOrgNameRequested.next(orgName);

  }
}

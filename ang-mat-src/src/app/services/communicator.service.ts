import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicatorService {

  constructor() { }

  private currentOrgIdRequested = new Subject<String>();
  currentOrgIdAnnounced = this.currentOrgIdRequested.asObservable();

  private currentUserIdRequested = new Subject<String>();
  currentUserIdAnnounced = this.currentUserIdRequested.asObservable();

  announceCurrentOrgId(orgId: String) {
    this.currentOrgIdRequested.next(orgId);
  }

  announceCurrentUserId(currentUserId: String) {
    console.log(currentUserId);
    this.currentUserIdRequested.next(currentUserId);
  }
}

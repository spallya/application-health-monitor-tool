import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicatorService } from "../../services/communicator.service";
import { Subscription } from "rxjs/Subscription"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  imgSrc: String;
  serverDetails: ServerDetailsInterface[];
  currentOrgId: String;
  subscription : Subscription;
  constructor(private communicatorService: CommunicatorService) {
    this.subscription = communicatorService.currentOrgNameAnnounced.subscribe(orgId => {
      alert('from dashboard constructor' + orgId);
    });
  }

  ngOnInit() {
    this.serverDetails = ServerDetails;
  }

  checkStatusOfThis(i){
    this.serverDetails[i].isActive = !this.serverDetails[i].isActive;
  }

  checkStatusOfAll() {
    // for()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

interface ServerDetailsInterface {
  server: String;
  description: String;
  url: String;
  isActive: boolean;
  isEnabled: boolean;
}

let ServerDetails = [
  {
    server: "Google",
    description: "Google Server",
    url: "https://www.google.com",
    isActive: true,
    isEnabled: true
  },
  {
    server: "Facebook",
    description: "Facebook Server",
    url: "https://www.facebook.com",
    isActive: true,
    isEnabled: false
  },
  {
    server: "GitHub",
    description: "GitHub Server",
    url: "https://www.github.com",
    isActive: true,
    isEnabled: true
  },
  {
    server: "Google",
    description: "Google Server",
    url: "https://www.google.com",
    isActive: true,
    isEnabled: true
  },
  {
    server: "Facebook",
    description: "Facebook Server",
    url: "https://www.facebook.com",
    isActive: true,
    isEnabled: false
  },
  {
    server: "GitHub",
    description: "GitHub Server",
    url: "https://www.github.com",
    isActive: true,
    isEnabled: true
  }
];

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  imgSrc: String;
  serverDetails: ServerDetailsInterface[];

  constructor() { }

  ngOnInit() {
  this.imgSrc = "/assets/check.png";
  this.serverDetails = ServerDetails;
  }

  checkStatusOfThis(i){
    this.serverDetails[i].isRunning = !this.serverDetails[i].isRunning;
  }

  checkStatusOfAll() {
    // for()
  }
}

interface ServerDetailsInterface {
  server: String;
  description: String;
  url: String;
  isActive: boolean;
  isRunning: boolean;
}

let ServerDetails = [
  {
    server: "Google",
    description: "Google Server",
    url: "https://www.google.com",
    isActive: true,
    isRunning: true
  },
  {
    server: "Facebook",
    description: "Facebook Server",
    url: "https://www.facebook.com",
    isActive: true,
    isRunning: false
  },
  {
    server: "GitHub",
    description: "GitHub Server",
    url: "https://www.github.com",
    isActive: true,
    isRunning: true
}
];

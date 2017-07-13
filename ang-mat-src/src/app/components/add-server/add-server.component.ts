import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  serverName: String;
  description: String;
  url: String;
  currentUserId: String;

  constructor() { }

  ngOnInit() {
  }

  onAddServerSubmit(form) {
    const newServer = {
      name: this.serverName,
      description: this.description,
      url: this.description,
      currentUserId: this.currentUserId
    }
    console.log(newServer);
    form.reset();
  }
}

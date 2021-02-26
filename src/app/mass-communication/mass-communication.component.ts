import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mass-communication',
  templateUrl: './mass-communication.component.html',
  styleUrls: ['./mass-communication.component.css']
})
export class MassCommunicationComponent implements OnInit {

  constructor() { }
  public model = {
   
    description: '<p>Enter Message</p>'
  };
  ngOnInit(): void {
  }

}

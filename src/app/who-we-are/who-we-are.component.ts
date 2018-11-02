import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {

  sezione: string = "who-we-are";

  constructor() { }

  ngOnInit() {
  }

}

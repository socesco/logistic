import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import Utils from '../utils/utils';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  sezione: string = "home";
  carousel: Array<Object> = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }
  
}

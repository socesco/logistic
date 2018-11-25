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

  goto = function(where){
    switch(where){
      case "logistic":
        this.router.navigateByUrl('/services/logistic');
        break;
      case "facilityManagement":
        this.router.navigateByUrl('/services/facilityManagement');
        break;
      case "administration":
        this.router.navigateByUrl('/services/administration');
        break;
      case "auxiliary":
        this.router.navigateByUrl('/services/auxiliary');
        break;
      case "cleaning":
        this.router.navigateByUrl('/services/cleaning');
        break;
      case "informatic":
        this.router.navigateByUrl('/services/informatic');
        break;
      case "who-we-are":
        this.router.navigateByUrl('/who-we-are');
        break;
       case "contact":
        this.router.navigateByUrl('/contact');
        break;
      default:
        this.router.navigateByUrl('/services');
        break;
    }
  }
  
}

import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import Utils from '../utils/utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  sezione: string = "home";
  carousel: Array<Object> = [];


  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService) { 

    this.translate.get('homepage.carosel').subscribe((res: string) => {
      this.carousel = JSON.parse(JSON.stringify(res));
    });
  }

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
      case "prenotation":
        this.router.navigateByUrl('/prenotation');
        break;
      default:
        this.router.navigateByUrl('/services');
        break;
    }
  }
  
}

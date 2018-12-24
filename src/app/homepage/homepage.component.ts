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

  ngOnInit() {}

  arrayOne(n: number): any[] {
    return Array(n);
  }

  goto = function(where){
    if(where){
      this.router.navigateByUrl('/services#'+where);
    }else{
      this.router.navigateByUrl('/services');
    }
  }
  
}

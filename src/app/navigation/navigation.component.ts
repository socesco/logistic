import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() sezione: string;
  private fragment: string;
  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService) { 
    this.route.fragment.subscribe(fragment => { 
      this.fragment = fragment; 
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  goto = function(where){
    if(where){
      this.fragment = where;
      this.router.navigateByUrl('/services#' + where);
      try {
        document.querySelector('#' + this.fragment).scrollIntoView();
      } catch (e) { }
      
    }else{
      this.router.navigateByUrl('/services');
    }
  }
  
  useLanguage(language: string) {
    this.translate.use(language);
  }
  
}

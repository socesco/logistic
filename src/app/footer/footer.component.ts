import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.fragment.subscribe(fragment => { 
      this.fragment = fragment; 
    });
  }

  ngOnInit() {
  }

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
}

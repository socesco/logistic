import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ServicesComponent implements OnInit {

  sezione: string = "services";
  typeServices: string = "";
  private fragment: string;
  innerWidth: number;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.fragment.subscribe(fragment => { 
      this.fragment = fragment; 
    });
  }

  ngOnInit() {  this.innerWidth = window.innerWidth;}
  
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  onResize(event){
    this.innerWidth = event.target.innerWidth; // window width
  }
  mobile = function(){
    if (this.innerWidth < 900) { // 768px portrait
      return true;
    }else{
      return false;
    }
  }
  goto = function(where){
    if(where){
      this.fragment = where;
      this.router.navigateByUrl('/services#' + this.fragment);
      try {
        document.querySelector('#' + this.fragment).scrollIntoView();
      } catch (e) { }
      
    }else{
      this.router.navigateByUrl('/services');
    }
  }
}

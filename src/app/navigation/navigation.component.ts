import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() sezione: string;
  constructor( private router: Router, private translate: TranslateService) { }

  ngOnInit() {
  }
  
  useLanguage(language: string) {
    this.translate.use(language);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SuiModalService, ModalSize, DatepickerMode } from 'ng2-semantic-ui';

import Utils from '../utils/utils';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  sezione: string = "home";

  constructor(private modalService: SuiModalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}

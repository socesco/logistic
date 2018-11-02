import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SuiLocalizationService } from "ng2-semantic-ui";
import it from "ng2-semantic-ui/locales/it";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public localizationService: SuiLocalizationService, private translate: TranslateService) {
    localizationService.load("it", it);
    localizationService.setLanguage("it");
    translate.setDefaultLang('it');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { RouterModule } from '@angular/router';
import { SuiModule } from 'ng2-semantic-ui';
import { HttpClient } from 'selenium-webdriver/http';
import { MatAutocompleteModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule,  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatRadioModule, MatSliderModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PrenotationComponent } from './prenotation/prenotation.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';


import { DateFormatPipe } from './utils/date-pipe.pipe';
import Utils from './utils/utils';

registerLocaleData(localeIt);

const MaterialModules = [
  MatAutocompleteModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule,  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatRadioModule, MatSliderModule, MatTableModule, MatTabsModule, MatToolbarModule
];

@NgModule({
  declarations: [
    AppComponent,
    WhoWeAreComponent,
    ContactComponent,
    ServicesComponent,
    PrenotationComponent,
    FooterComponent,
    HomepageComponent,
    NavigationComponent,
    DateFormatPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent },
      { path: 'who-we-are', component: WhoWeAreComponent },
      { path: 'service', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'prenotation', component: PrenotationComponent },
      { path: '**', component: HomepageComponent }
    ]),
    
  ],
  exports:[ MaterialModules ],
  providers: [ Utils ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

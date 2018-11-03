import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule,  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatRadioModule, MatSliderModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { DateFormatPipe } from './utils/date-pipe.pipe';
import Utils from './utils/utils';

import { AppComponent } from './app.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { OurSuccessComponent } from './our-success/our-success.component';
import { ServicesComponent } from './services/services.component';
import { PrenotationComponent } from './prenotation/prenotation.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';

registerLocaleData(localeIt);

const MaterialModules = [
  MatAutocompleteModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule,  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatRadioModule, MatSliderModule, MatTableModule, MatTabsModule, MatToolbarModule
];

@NgModule({
  declarations: [
    AppComponent,
    WhoWeAreComponent,
    ContactComponent,
    MissionComponent,
    OurSuccessComponent,
    ServicesComponent,
    PrenotationComponent,
    FooterComponent,
    HomepageComponent,
    NavigationComponent,
    NewsComponent,
    DateFormatPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent },
      { path: 'who-we-are', component: WhoWeAreComponent },
      { path: 'mission', component: MissionComponent },
      { path: 'our-success', component: OurSuccessComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'prenotation', component: PrenotationComponent },
      { path: 'news', component: NewsComponent },
      { path: '**', component: HomepageComponent }
    ]),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  exports:[ MaterialModules ],
  providers: [ Utils ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
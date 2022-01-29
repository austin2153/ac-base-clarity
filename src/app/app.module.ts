import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { cloudIcon, ClarityIcons } from '@cds/core/icon';
import { CdsIconModule } from '@cds/angular/icon';
import { CdsAccordionModule } from '@cds/angular/accordion';
import { CdsAlertModule } from '@cds/angular/alert';
import { CdsButtonModule } from '@cds/angular/button';
import { CdsCheckboxModule } from '@cds/angular/checkbox';
import { CdsDatalistModule } from '@cds/angular/datalist';
import { CdsFormsModule } from '@cds/angular/forms';
import { CdsFileModule } from '@cds/angular/file';
import { CdsInputModule } from '@cds/angular/input';
import { CdsPasswordModule } from '@cds/angular/password';
import { CdsRadioModule } from '@cds/angular/radio';
import { CdsRangeModule } from '@cds/angular/range';
import { CdsSearchModule } from '@cds/angular/search';
import { CdsSelectModule } from '@cds/angular/select';
import { CdsTagModule } from '@cds/angular/tag';
import { CdsTextareaModule } from '@cds/angular/textarea';
import { CdsTimeModule } from '@cds/angular/time';
import { CdsToggleModule } from '@cds/angular/toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { CdsModalModule } from '@cds/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CdsModule,
    CdsIconModule,
    CdsAccordionModule,
    CdsAlertModule,
    CdsButtonModule,
    CdsCheckboxModule,
    CdsDatalistModule,
    CdsFileModule,
    CdsFormsModule,
    CdsInputModule,
    CdsPasswordModule,
    CdsRadioModule,
    CdsRangeModule,
    CdsSearchModule,
    CdsSelectModule,
    CdsTagModule,
    CdsTextareaModule,
    CdsTimeModule,
    CdsToggleModule,
    CdsModalModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    ClarityIcons.addIcons(cloudIcon);
  }
}

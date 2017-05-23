import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuInputModule} from 'au-input';
import {AuTabPanelModule} from "au-tab-panel";
import {AuModalModule} from "./au-modal/au-modal.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuInputModule,
    AuTabPanelModule,
    AuModalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

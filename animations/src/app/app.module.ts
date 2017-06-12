import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AuInputModule} from "au-input";
import {AuTabPanelModule} from 'au-tab-panel';
import {AuMaskModule} from "au-mask";
import {AuModalModule} from 'au-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AuInputModule,
        AuTabPanelModule,
        AuMaskModule,
        AuModalModule.forRoot()


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

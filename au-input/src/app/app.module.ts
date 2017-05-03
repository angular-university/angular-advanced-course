import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AuFaInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

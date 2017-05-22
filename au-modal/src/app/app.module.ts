import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuModalComponent } from './au-modal/au-modal.component';
import { AuModalOpenDirective } from './au-modal/au-modal-open.directive';
import {AuInputModule} from 'au-input';

@NgModule({
  declarations: [
    AppComponent,
    AuModalComponent,
    AuModalOpenDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

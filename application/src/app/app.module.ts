import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MasksComponent } from './masks/masks.component';
import {InputMaskDirectiveModule} from "au-mask";

const routes: Routes = [
  {
    path: 'masks',
    component: MasksComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    InputMaskDirectiveModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


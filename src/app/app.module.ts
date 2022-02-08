import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Module2Module, MyLibModule } from 'projects/my-lib/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

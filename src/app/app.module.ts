import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReverseStr} from "./reverse-str.pipe";
import {ReverseSen} from './reverse';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, ReverseStr,ReverseSen
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

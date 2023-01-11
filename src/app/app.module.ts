import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonldModule } from 'buttonld';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

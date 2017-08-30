import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {AppComponent}  from './app.component';
import {AppService} from './app.service';
import {HttpModule} from "@angular/http";
import { LoaderService } from './loader.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
      AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}

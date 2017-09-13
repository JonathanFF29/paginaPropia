import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent }  from './Home/home.component';
import { ContactComponent }  from './Contact/contact.component';
import { MobilComponent }  from './mobil/mobil.component';
import {DesignComponent} from "./design/design.component";
import {WebComponent} from "./web/web.component";
import {TeamComponent} from "./team/team.component";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MobilComponent,
    DesignComponent,
    WebComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

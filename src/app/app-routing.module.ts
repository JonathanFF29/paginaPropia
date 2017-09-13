import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './Home/home.component';
import { ContactComponent }   from './Contact/contact.component';
import {MobilComponent} from "./mobil/mobil.component";
import {DesignComponent} from "./design/design.component";
import {WebComponent} from "./web/web.component";
import {TeamComponent} from "./team/team.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'mobil',  component: MobilComponent },
  { path: 'design',  component: DesignComponent },
  { path: 'web',  component: WebComponent },
  { path: 'team',  component: TeamComponent }


];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


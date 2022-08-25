import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { RoutedetailsComponent } from './pages/routedetails/routedetails.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { FeedetailComponent } from './pages/feedetail/feedetail.component';
import { AccountComponent } from './pages/account/account.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { RoutesComponent } from './admin/routes/routes.component';
import { FeestatusComponent } from './admin/feestatus/feestatus.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MapComponent,
    RoutedetailsComponent,
    AnnouncementsComponent,
    FeedetailComponent,
    AccountComponent,
    SettingsComponent,
    ContactComponent,
    LoginComponent,
    AdminNavComponent,
    AdminHomeComponent,
    RoutesComponent,
    FeestatusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

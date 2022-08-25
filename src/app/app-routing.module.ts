import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { MapComponent } from './pages/map/map.component';
import { RoutedetailsComponent } from './pages/routedetails/routedetails.component';
import { FeedetailComponent } from './pages/feedetail/feedetail.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { RoutesComponent } from './admin/routes/routes.component';
import { FeestatusComponent } from './admin/feestatus/feestatus.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'account',component:AccountComponent},
  {path:'map',component:MapComponent},
  {path:'routedetails',component:RoutedetailsComponent},
  {path:'feedetail',component:FeedetailComponent},
  {path:'settings',component:SettingsComponent},
  {path:'admin',component:AdminHomeComponent},
  {path:'routes',component:RoutesComponent},
  {path:'feestatus',component:FeestatusComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

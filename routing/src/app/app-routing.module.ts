import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routerOptions: ExtraOptions = { 
  // enableTracing: true ,
  useHash: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 32],
};

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dashboard'
    },
    canDeactivate: [CanDeactivateGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
   
    canLoad: [AuthGuard]
  },
  {
  path: 'compose',
    component: ContactComponent,
    outlet: 'popup'
  },
  {
    path: "",
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    pathMatch: "full",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  
  menuItems = [
    {
        label: 'Home' ,
        url: '/'
    },
    {
        label: 'Settings' ,
        url: '/settings'
    },
    {
        label: 'Admin Settings' ,
        url: '/settings/admin'
    },
    {
        label: 'Store Settings' ,
        url: '/settings/store'
    },
    {
        label: 'Dashboard' ,
        url: '/dashboard'
    }, 
];
  constructor(router: Router) {
    router.events.subscribe((routerEvent) => {
      this.checkRouterEvent(routerEvent);
    })
  }

  
  checkRouterEvent(routerEvent) {
    if(routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if(routerEvent.url === "/forbidden") {
      this.loading = false;
    }

    //Don't show the global spinner on calculation component and steps because there is a component specific spinner there
    if(routerEvent.url && routerEvent.url.indexOf('calculation') > -1) {
      this.loading = false;
    }

    if(routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
        this.loading = false;
      }
  }

}

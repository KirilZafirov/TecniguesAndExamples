import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import {filter, map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
  })
  export class BreadcrumbComponent implements OnInit {
    static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    readonly home = {icon: 'pi pi-home', url: 'home'};
  
  

    $breadCrumbItems: Observable<any[]>;
  
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.$breadCrumbItems = this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.createBreadcrumbs(this.activatedRoute.root))
            );
    }
  
    private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs = []): any[] {
      const children: ActivatedRoute[] = route.children;
  
      if (children.length === 0) {
        return breadcrumbs;
      }
  
      for (const child of children) {
        const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
        if (routeURL !== '') {
          url += `/${routeURL}`;
        }
  
        const label = child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];

        if (label !== null && label !== undefined) {
          breadcrumbs.push({label, url});
        }
  
        return this.createBreadcrumbs(child, url, breadcrumbs);
      }
    }
  }
  
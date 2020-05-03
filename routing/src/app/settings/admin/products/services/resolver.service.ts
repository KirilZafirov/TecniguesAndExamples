import { DataService } from './../../../../data.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'; 
import { delay } from 'rxjs/operators';

@Injectable()
export class DetailsResolverService implements Resolve<any> {
  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = 'id';
    return this.dataService.getDetails(+route.paramMap.get(id)).pipe(
        delay(8000)
    );
  }
}

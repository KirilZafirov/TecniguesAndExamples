import { DataService } from './../../../../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  templateUrl: './Details.component.html',
})
export class DetailsComponent implements OnInit {
 
  detail$: Observable<any>;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) {
  }

  ngOnInit() { 
    const data: any = this.route.snapshot.data.details;

   this.detail$ =  this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.dataService.getDetails(+params.get('id')))
    )
  } 

}

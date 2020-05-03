import { DialogService } from './../dialog.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  canDeactivate(): Observable<boolean> | boolean { 
    return this.dialogService.confirm('Discard changes?');
  }

}

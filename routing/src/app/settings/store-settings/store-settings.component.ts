import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-settings',
  templateUrl: './store-settings.component.html',
  styleUrls: ['./store-settings.component.scss']
})
export class  StoreSettingsComponent implements OnInit {
  ids: Array<String> = ['first', 'second', 'third', 'fourth']
  constructor() { }

  ngOnInit(): void {
  }

}

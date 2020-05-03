import { Component, OnInit } from '@angular/core';

@Component({ 
  templateUrl: './custom.component.html',
})
export class CustomComponent implements OnInit {

  power = 5;
  factor = 1;
  
  constructor() { }

  ngOnInit() {
  }

  people = [{
    name: 'Person' ,
    isOld: true,
  },
  {
    name: 'Person_1' ,
    isOld: true,
  },
  {
    name: 'Person_2' ,
    isOld: true,
  },
  {
    name: 'Person_3' ,
    isOld: false,
  },
  {
    name: 'Person_4' ,
    isOld: false,
  },
  {
    name: 'Person_5' ,
    isOld: true,
  }]
}

import { Component, OnInit } from '@angular/core';

@Component({ 
  templateUrl: './component-directive.component.html',
  styleUrls:['./component-directive.component.scss']
})
export class ComponentDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  step = 0;
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  accordionItems = [
    {header: 'itay', content: 'content'},
    {header: 'noaa', content: 'content'},
    {header: 'eliran', content: 'content'}
  ];
}

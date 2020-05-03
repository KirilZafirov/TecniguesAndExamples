import { Component, OnInit } from '@angular/core';
import { ConfigService, IConfig } from 'src/app/config.service';

@Component({
  templateUrl: './structural.component.html',
})
export class StructuralComponent implements OnInit {
  config: IConfig;

  element = '<ng-container>';
  secondElement = '<ng-template>'
  data = [{
    id: 0,
    label: 'first',
  },
  {
    id: 1,
    label: 'odd',
  },
  {
    id: 2,
    label: 'third',
  },
  {
    id: 3,
    label: 'odd',
  },
  {
    id: 4,
    label: 'Last',
  }]

  heroes = [{
    emotion: 'happy'
  },
  {
    emotion: 'confused'
  },
  {
    emotion: 'sad'
  }];



  hero = this.heroes[0];

  constructor(private configService: ConfigService) {
    this.config = this.configService.config;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.configService.setConfig(this.config);
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

  trackById(index: number, item): number {
    return item.id;
  }

  getClass(i , isOdd , length ) {
    return isOdd ? 'alert-primary' :
           i === 0 ? 'alert-danger' :
           i === length - 1 ? 'alert-warning' : 'alert-success';
  }

}

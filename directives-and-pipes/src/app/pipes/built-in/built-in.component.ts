import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({ 
  templateUrl: './built-in.component.html'
})
export class BuiltInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  defaultValue = 22989559;
  birthday = new Date(1988, 3, 15);

  asyncDate = of(new Date(1988, 3, 15));
  commonPipesColor = 'bg-success'; 
  commonPipes = [
    {
      label: 'AsyncPipe',
      url: 'https://angular.io/api/common/AsyncPipe',
      class:  this.commonPipesColor
    },
    {
      label: 'CurrencyPipe',
      url: 'https://angular.io/api/common/CurrencyPipe',
      class:  this.commonPipesColor
    },
    {
      label: 'DatePipe',
      url: 'https://angular.io/api/common/DatePipe',
      class: this.commonPipesColor
    },
    {
      label: 'DecimalPipe',
      url: 'https://angular.io/api/common/DecimalPipe',
      class: this.commonPipesColor
    },
    {
      label: 'I18nPluralPipe',
      url: 'https://angular.io/api/common/I18nPluralPipe',
      class: this.commonPipesColor
    },
    {
      label: 'I18nSelectPipe',
      url: 'https://angular.io/api/common/I18nSelectPipe',
      class: this.commonPipesColor
    },
    {
      label: 'JsonPipe',
      url: 'https://angular.io/api/common/JsonPipe',
      class: this.commonPipesColor
    },
    {
      label: 'KeyValuePipe',
      url: 'https://angular.io/api/common/KeyValuePipe',
      class: this.commonPipesColor
    },
    {
      label: 'LowerCasePipe',
      url: 'https://angular.io/api/common/LowerCasePipe',
      class: this.commonPipesColor
    },
    {
      label: 'PercentPipe',
      url: 'https://angular.io/api/common/PercentPipe',
      class: this.commonPipesColor
    },
    {
      label: 'SlicePipe',
      url: 'https://angular.io/api/common/SlicePipe',
      class: this.commonPipesColor
    }, 
    {
      label: 'TitleCasePipe',
      url: 'https://angular.io/api/common/TitleCasePipe',
      class: this.commonPipesColor
    }, 
    {
      label: 'UpperCasePipe',
      url: 'https://angular.io/api/common/UpperCasePipe',
      class: this.commonPipesColor
    }, 
  ]
}

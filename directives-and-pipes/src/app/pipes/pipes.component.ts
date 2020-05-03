import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({ 
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
 
 
  background: ThemePalette = undefined;
  
  links = [
    {
      name: 'Build In',
      navigationLink: './build-in',
      index: 0
    },
    {
      name: 'Custom',
      navigationLink: './custom',
      index: 1
    }
  ];

  activeLink = this.links[0].index;

  ngOnInit(): void {
    this.background = 'accent';
  }  

}

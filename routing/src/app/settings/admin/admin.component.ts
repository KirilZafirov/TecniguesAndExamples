import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class  AdminComponent implements OnInit {
  navLinks = [];
  activeLinkIndex = -1;
  constructor(private router: Router) { }
  
  menuItems = [
    {
      name: 'Humans',
      navigationLink: './humans',
      index: 0
    },
    {
      name: 'Office',
      navigationLink: './office',
      index: 1
    },
    {
      name: 'Products',
      navigationLink: './products',
      index: 2
    },
    {
      name: 'Rate',
      navigationLink: './rate',
      index: 3
    }
  ];



  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}

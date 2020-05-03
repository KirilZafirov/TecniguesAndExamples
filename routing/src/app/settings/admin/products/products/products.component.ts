import { Router } from '@angular/router';
import { DataService } from './../../../../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product { 
    id: number;
    name: string;
    details: string; 
    price: number;
}
@Component({
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
 
  products$: Observable<Product>;
  constructor(private dataService: DataService , private route: Router) {
  }

  ngOnInit() { 
    this.products$ = this.dataService.getProducts();
  } 

  navigateTo(id) {
    this.route.navigateByUrl(`/settings/admin/products/product/${id}`);
  }
}

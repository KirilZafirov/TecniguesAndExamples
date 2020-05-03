import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'; 
 

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }

  getDetails(id:number): Observable<any> { 
    const product = PRODUCTS.find(p => p.id == id);
    return of(product);
  }
 
  getProducts(): Observable<any> { 
    return of(PRODUCTS);
  }
}

export const PRODUCTS = [
  {
    id: 1 ,
    name: 'Apple',
    details: `
    Calories: 95.
    Carbs: 25 grams.
    Fiber: 4 grams.
    Vitamin C: 14% of the Reference Daily Intake (RDI)
    Potassium: 6% of the RDI.
    Vitamin K: 5% of the RDI.
    `,
    price: 30
  },
  {
    id: 2 ,
    name: 'Carrot',
    details: `
    Calories: 41.
    Water: 88%
    Protein: 0.9 grams.
    Carbs: 9.6 grams.
    Sugar: 4.7 grams.
    Fiber: 2.8 grams.
    Fat: 0.2 grams.
    `,
    price: 30
  },
  {
    id: 3 ,
    name: 'Banana',
    details: `
    Calories: 89.
Water: 75%
Protein: 1.1 grams.
Carbs: 22.8 grams.
Sugar: 12.2 grams.
Fiber: 2.6 grams.
Fat: 0.3 grams.
    `,
    price: 30
  },
  {
    id: 4 ,
    name: 'Lemon',
    details: `
    Calories: 29.
Water: 89%
Protein: 1.1 grams.
Carbs: 9.3 grams.
Sugar: 2.5 grams.
Fiber: 2.8 grams.
Fat: 0.3 grams.
    `,
    price: 30
  },
  {
    id: 5 ,
    name: `
    Calories: 53 kcal.
Protein: 1.11 g.
Carbohydrates: 12.75 g.
Dietary fiber: 3.30 g.
Calcium: 27 mg.
Iron: 0.68 mg.
Magnesium: 22 mg.
Phosphorus: 40 mg.
    `,
    details: 'made of iron',
    price: 30
  }
]

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
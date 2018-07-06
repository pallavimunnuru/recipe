import { Injectable } from '@angular/core';

import{Ingredient} from './first interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  name:string;
  amount:number;
 goals1:Ingredient[]= [
   new Ingredient('Apples', 5),
   new Ingredient('Tomatoes', 10),
 ];

add(name, amount){
this.name=" ";
this.amount=null;
  let a= new Ingredient(name, amount);
  this.goals1.push(a);
  return this.goals1
}

delete(){


  
}



  constructor() { }
}

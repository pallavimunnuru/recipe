
import { Component, OnInit } from '@angular/core';

import {FormControl,FormBuilder,Validators} from '@angular/forms';


import { Ingredient } from './../first interface';
import{ShoppingService} from '../shopping.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
name:string;
amount: number;

goals1:Ingredient[];
 index:number;

add(){
this.goals1=this.myservics.add(this.name,this.amount,this.index);

}

select(goals1,i){

this.name=goals1.name;
this.amount=goals1.amount;
this.index=i

}

delete(){

this.goals1.splice(this.index,1)

}


  constructor(private myservics:ShoppingService) { }

  ngOnInit() {



  }

}

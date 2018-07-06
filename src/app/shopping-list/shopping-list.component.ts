
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
name:string=" ";
amount: number;

goals1=[];
 index=0;

add(){
this.goals1=this.myservics.add(this.name,this.amount);

}

slice(){



}






/*  
textValue1:string = ' ';
textValue:string = ' ';

 log = '';

goals1=[];

logText(){
this.goals1.push(this.textValue1,this.textValue);
this.textValue1=' ';
this.textValue=' ';
}*/
  constructor(private myservics:ShoppingService) { }

  ngOnInit() {



  }

}

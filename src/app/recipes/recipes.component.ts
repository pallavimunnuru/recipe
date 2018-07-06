import { Component, OnInit } from '@angular/core';
import { DirectivesDirective } from './directives.directive';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'], 
  // directives: [DirectivesDirective]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

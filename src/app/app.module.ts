import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DirectivesDirective } from './recipes/directives.directive';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import{ShoppingService} from './shopping.service'

// import{listRoutes} from './recipes/recipe.route';

const routes:Routes=[
  // {path:'home'},
  // {path:' ',redirectTo:'/home',pathMatch:'full'},
  // {path:'**',redirectTo:'/home',pathMatch:'full'},
{path:'shoppinglist',component:ShoppingListComponent},
{ path: 'recipes', component: RecipesComponent,
children:[
  
  { path:'recipedetails', component:RecipeDetailComponent}
  ] 
},

// ...listRoutes

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    DirectivesDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

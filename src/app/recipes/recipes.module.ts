import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRecipesComponent } from './components/list-recipes/list-recipes.component';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { FormRecipeComponent } from './components/form-recipe/form-recipe.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipesRoutingModule } from './recipes-routing.module';
import { PageRecipeComponent } from './pages/page-recipe/page-recipe.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RecipeComponent } from './components/recipe/recipe.component';


@NgModule({
  declarations: [
    ListRecipesComponent,
    CardRecipeComponent,
    FormRecipeComponent,
    PageHomeComponent,
    PageRecipeComponent,
    HeaderComponent,
    PaginationComponent,
    FooterComponent,
    RecipeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipesRoutingModule,
  
  ],
  exports: [PageHomeComponent],
})
export class RecipesModule {}

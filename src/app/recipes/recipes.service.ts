import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://okdiario.com/img/2018/10/14/receta-de-escalope-vienes-1-655x368.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2019/05/Spaguetti-a-la-bolonesa-una-receta-de-pasta-para-triunfar.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipe(recipeId: String) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    }
  }

}

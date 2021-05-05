import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Recipe} from '../recipes/recipe.model'
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    
    constructor(private slService:ShoppingListService){

    }
    
    recipeSelected=new Subject<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Vada Pav', 
        'It is Maharashtrian famous dish', 
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/10/vada-pav-recipe.jpg',
        [new Ingredient('Meat',2),new Ingredient('Buns',6)]),
        new Recipe('Misal', 
        'This is simply a test', 
        'https://mitalshealthyfood.com/wp-content/uploads/2019/12/misalpav.jpg',
        [new Ingredient('French fries',15),new Ingredient('Pickle',1)])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

}
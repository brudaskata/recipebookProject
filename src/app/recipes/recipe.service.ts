import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>


    // private recipes: Recipe[] = [
    //   new Recipe("A Test Recipe", "This is a test", "https://www.allrecipes.com/thmb/RUZTd-of3sN1KprEAYMEBV8hNSI=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8405377_4-Ingredient-Peanut-Butter-Mousse_Yoly_4x3-c0e2c6fae84d4e31ba3f5c0357c9bbe9.jpg", [
    //     new Ingredient('Meat', 1),
    //   new Ingredient('French Fries', 20)
    //]),
    //new Recipe("Another Test Recipe", "This is a test", "https://www.allrecipes.com/thmb/RUZTd-of3sN1KprEAYMEBV8hNSI=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8405377_4-Ingredient-Peanut-Butter-Mousse_Yoly_4x3-c0e2c6fae84d4e31ba3f5c0357c9bbe9.jpg", [
    //new Ingredient('Buns', 2),
    //new Ingredient('Meat', 2)
    //])
    //];
    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }


}
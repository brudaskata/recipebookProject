import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap} from "rxjs";
import { AuthService } from "../auth/auth.service";


@Injectable({ providedIn: 'root' })

export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }


    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-a631d-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response);
        });
    }


    fetchRecipes() {
        return this.http.get<Recipe[]>(
            'https://ng-course-recipe-book-a631d-default-rtdb.firebaseio.com/recipes.json',
        )
            .pipe(
                map(recipes => {  //here map is an rxjs operator
                    return recipes.map(recipe => { //map here normal javascript method called on an array
                        return {
                            ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                        };
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }
}
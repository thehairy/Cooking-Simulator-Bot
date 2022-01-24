import { Collection } from "discord.js";
import type { Recipe } from 'src/@types';

export default class BaseRecipes {
    recipes: Recipe[] = []

    getRandom = (): Recipe => {
        const index = Math.floor(Math.random() * this.recipes.length);
        return this.recipes[index];
    }

    getAll = (): Collection<string, Recipe> => {
        const col = new Collection<string, Recipe>();
        this.recipes.forEach((recipe: Recipe) => col.set(recipe.name, recipe));
        return col;
    }
}
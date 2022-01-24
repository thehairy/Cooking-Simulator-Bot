import { Collection } from 'discord.js';
import type { Recipe } from 'src/@types';
import BaseRecipes from './baseRecipes';

export default class Pizza extends BaseRecipes {
    recipes: Recipe[] = [
        {
            name: 'Mobile recipes not yet implemented',
            ingredients: [
                { name: 'Recipe', amount: 0 },
                { name: 'Done', amount: 0 }
            ],
            text: 'Soon™',
        }
    ]
}
import { Collection } from 'discord.js';
import type { Recipe } from 'src/@types';

export const recipes: Recipe[] = [
    {
        name: 'Potatosalad',
        ingredients: [
            { name: 'Potatoes', amount: 5 },
            { name: 'Salt', amount: '5g' }
        ],
        text: 'Just make it.'
    },
    {
        name: 'Tomato Soup',
        ingredients: [
            { name: 'Tomatoes', amount: 'Many' },
            { name: 'Salt', amount: '5g' }
        ],
        text: 'Just make it too.',
        image: 'https://cdn.discordapp.com/attachments/821807876540596236/915182560764645416/g7t27sLO9zXV6sGkokoePiIXSB4wQ2hbg4mWLlxEkuXi3xziVHPCRhV6J2LBLCRWYoeFhT1Jy5Sa4q3xjT6sN07XPrE3cEKhDwIhNHUJ23BAwBN4KASQx6ObCwGf8R0HPjQYpLJg1JO0ABgcGYWh4yKrpvhW6drIhYAjUIWDEpg4hO24IGAKGgCFgCBgCXYOAEZuu2SqbqCFgCBgChoAhYAjUIWDEpg4hO24IGAKGgCFgCBgCXYOAEZuu2SqbqCFgCBgChoAhYAjUIWDEpg4hO24IGAKGgCFgCBgCXYOAEZuu2SqbqCFgCBgChoAhYAjUIWDEpg4hO24IGAKGgCFgCBgCXYOAEZuu2SqbqCFgCBgChoAhYAjUIWDEpg4hO24IGAKGgCFgCBgCXYOAEZuu2SqbqCFgCBgChoAhYAjUIWDEpg4hO24IGAKGgCFgCBgCXYOAEZuu2SqbqCFgCBgChoAhYAjUIWDEpg4hO24IGAKGgCFgCBgCXYOAEZu..png'
    }
]

export const getRandom = (): Recipe => {
    const index = Math.floor(Math.random() * recipes.length);
    return recipes[index];
}

export const getAll = (): Collection<string, Recipe> => {
    const col = new Collection<string, Recipe>();
    recipes.forEach(recipe => col.set(recipe.name, recipe));
    return col;
}
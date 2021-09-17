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
        text: 'Just make it too.'
    }
]

export const getRandomRecipe = (): Recipe => {
    return recipes[Math.floor(Math.random() * recipes.length)];
}

export const getRecipe = (name: string): Recipe | undefined => {
    return recipes.find(recipe => recipe.name === name);
}
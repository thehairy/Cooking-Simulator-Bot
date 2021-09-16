import type { Recipe } from 'src/@types';

const recipes: Recipe[] = [
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
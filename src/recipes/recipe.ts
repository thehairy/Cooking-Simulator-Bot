import * as normal from './normal';
import * as mobile from './mobile';
import * as pizza from './pizza';
import * as cac from './cac';
import type { Recipe } from 'src/@types';

export const getRecipe = (type: string, name: string): Recipe | undefined => {
    switch (type) {
        case 'normal':
            return normal.getRecipe(name);
        case 'mobile':
            return mobile.getRecipe(name);
        case 'pizza':
            return pizza.getRecipe(name);
        case 'cac':
            return cac.getRecipe(name);
        default:
            return undefined;
    }
}

export const getRandomRecipe = (type: string): Recipe | undefined => {
    switch (type) {
        case 'normal':
            return normal.getRandomRecipe();
        case 'mobile':
            return mobile.getRandomRecipe();
        case 'pizza':
            return pizza.getRandomRecipe();
        case 'cac':
            return cac.getRandomRecipe();
        default:
            return undefined;
    }
}
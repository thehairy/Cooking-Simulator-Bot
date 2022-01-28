import { replacePlaceholder, translate } from '../util';
import type { Event } from '../@types';
import { sync } from '../database';

export const name: Event['name'] = 'ready';
export const once: Event['once'] = true;

export const cook: Event['cook'] = async () => {
    // Database
    await sync();
    //
    console.log('Ready!');
}
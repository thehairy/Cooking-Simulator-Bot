import type { Event } from '../@types';
import { Users, Warns, Kicks, Banns } from '../index';

export const name: Event['name'] = 'ready';
export const once: Event['once'] = true;

export const cook: Event['cook'] = async () => {
    // Database
    await Users.sync();
    await Warns.sync();
    await Kicks.sync();
    await Banns.sync();
    //
    console.log('Ready!');
}
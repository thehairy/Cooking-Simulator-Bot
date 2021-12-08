import type { Event } from '../@types';
import { connectDB } from '../util';

export const name: Event['name'] = 'ready';
export const once: Event['once'] = true;

export const cook: Event['cook'] = async () => {
    // Establish database connection
    connectDB(process.env.DB || '').catch(console.error);
    //
    console.log('Ready!');
}
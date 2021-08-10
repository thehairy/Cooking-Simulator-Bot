import type { Client } from "discord.js";
import type { Event } from "../@types";

export const name: Event['name'] = 'ready';
export const once: Event['once'] = true;

export const cook: Event['cook'] = async (chef: Client) => {
    console.log('Ready!');
}
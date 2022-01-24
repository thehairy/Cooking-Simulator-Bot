// Import Structures
import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import path from 'path';
import database from './database';

// Import Types
import type { ContextCommand, SlashCommand, Event } from './@types';

import { config } from 'dotenv';
config();

// Client
const chef = new Client({ intents: 839 })
chef.commandbois = new Collection();

// Commands and Events
const eventyFiles = readdirSync(path.resolve(__dirname, 'eventybois')).filter(file => file.toString().endsWith('.js'));
const slashyFiles = readdirSync(path.resolve(__dirname, 'slashybois')).filter(file => file.toString().endsWith('.js'));
const contextyFiles = readdirSync(path.resolve(__dirname, 'contextybois')).filter(file => file.toString().endsWith('.js'));

(async () => {
    for (const eventFile of eventyFiles) {
        const event: Event = await import(path.resolve(__dirname, 'eventybois', eventFile));
        if (event.once) {
            chef.once(event.name, (...args) => event.cook(...args));
        } else {
            chef.on(event.name, (...args) => event.cook(...args));
        }
    }

    for (const slashyFile of slashyFiles) {
        const slash: SlashCommand = await import(path.resolve(__dirname, 'slashybois', slashyFile));
        chef.commandbois.set(slash.recipe.name, slash);
    }

    for (const contextFile of contextyFiles) {
        const context: ContextCommand = await import(path.resolve(__dirname, 'contextybois', contextFile));
        chef.commandbois.set(context.recipe.name, context);
    }
})();



// Login
chef.login();

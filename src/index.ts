import { Client, Collection, Intents } from 'discord.js';
import { readdirSync } from 'fs';
import type { ContextCommand, SlashCommand, Event } from './@types';
import path from 'path';

// Client
const chef = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]})
chef.slashybois = new Collection();
chef.eventybois = new Collection();
chef.contextybois = new Collection();

const eventyFiles = readdirSync(path.resolve(__dirname, 'eventybois')).filter(file => file.toString().endsWith('.js'));
const slashyFiles = readdirSync(path.resolve(__dirname, 'slashybois')).filter(file => file.toString().endsWith('.js'));
const contextyFiles = readdirSync(path.resolve(__dirname, 'contextybois')).filter(file => file.toString().endsWith('.js'));

(async () => {
    for (const eventFile of eventyFiles) {
        const event: Event = await import(path.resolve(__dirname, 'eventybois', eventFile));
        if (event.once) {
            chef.once(event.name, (...args) => event.cook(chef, ...args));
        } else {
            chef.on(event.name, (...args) => event.cook(...args));
        }
    }

    for (const slashyFile of slashyFiles) {
        const slash: SlashCommand = await import(path.resolve(__dirname, 'slashybois', slashyFile));
        chef.slashybois.set(slash.data.name, slash);
    }

    for (const contextFile of contextyFiles) {
        const context: ContextCommand = await import(path.resolve(__dirname, 'contextybois', contextFile));
        chef.contextybois.set(context.data.name, context);
    }
})();



// Login
chef.login('NzMwODM3Njc0OTE0NjExMjEx.XwdToA.OdnLnlF-i7sNasTr-N0Y-6C3rew');
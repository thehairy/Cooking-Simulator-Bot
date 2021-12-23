// Import Structures
import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import Sequelize from 'sequelize';
import path from 'path';

// Import Types
import type { ContextCommand, SlashCommand, Event } from './@types';

import { config } from 'dotenv';
config();

// Client
const chef = new Client({ intents: 839 })
chef.commandbois = new Collection();

// Database
const sequelize = new Sequelize.Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

// Models
export const Users = sequelize.define('users', {
    id: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true
    }
});

export const Warns = sequelize.define('warns', {
    reason: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    punisher: {
        type: Sequelize.STRING
    }
});

export const Kicks = sequelize.define('kicks', {
    reason: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    punisher: {
        type: Sequelize.STRING
    }
});

export const Banns = sequelize.define('kicks', {
    reason: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    punisher: {
        type: Sequelize.STRING
    }
});

Warns.belongsTo(Users);
Kicks.belongsTo(Users);
Banns.belongsTo(Users);

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

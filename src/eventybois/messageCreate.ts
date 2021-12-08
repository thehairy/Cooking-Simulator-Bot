import type { Message } from "discord.js";
import type { Event } from "src/@types";
import { REST } from '@discordjs/rest';
import { Routes } from "discord-api-types/v9";
import { SlashCommandBuilder } from "@discordjs/builders";
import { User } from "../models/user";

export const name: Event['name'] = 'messageCreate';
export const once: Event['once'] = false;

export const cook: Event['cook'] = async (message: Message): Promise<void> => {
    if (message.content.startsWith('?deploy')) {
        setCommands(message);
    } else if (message.content.startsWith('?test')) {
        let result = User.findOne({ _id: message.author.id })
        console.log(result);
        if (!result) {
            const newUser = new User({ _id: message.author.id });
            await newUser.save();
        }
        result = User.findOne({ _id: message.author.id });
        console.log(result);
    }
}

const setCommands = async (message: Message): Promise<void> => {
    await message.guild?.commands.set([]);

    const commands = [];

    for (const command of message.client.commandbois.values()) {
        if (command.recipe instanceof SlashCommandBuilder)
            commands.push(command.recipe.toJSON());
        else
            commands.push(command.recipe);
    }

    const rest = new REST({ version: '9' }).setToken(message.client.token!);

    const msg = await message.reply({ content: 'Refreshing Commands, please hold the line!' });
    try {
        await rest.put(
            Routes.applicationGuildCommands(message.client.user?.id!, message.guild?.id!),
            { body: commands }
        );

        await msg.edit({ content: 'Commands refreshed, you may hang up now.' });
    } catch (error) {
        console.log(error);
        await msg.edit({ content: 'Failed to refresh commands, please try again later.' });
    }
    
    message.guild?.commands.cache.each(c => {
        if (c.type === 'CHAT_INPUT') {
            const command = message.client.commandbois.get(c.name);
            if (command && command.ownerOnly) {
                c.permissions.add({
                    permissions: [{
                        id: '211888560662511617',
                        type: 'USER',
                        permission: true
                    }]
                });
            } else if (command && command.permission) {
                const roles = message.guild?.roles.cache.filter(r => r.permissions.has(command.permission!)).map(r => r.id);
                roles?.forEach(r => c.permissions.add({ permissions: [{ id: r, type: 'ROLE', permission: true }] }));
            }
        } else if (c.type === 'USER' || c.type === 'MESSAGE') {
            const command = message.client.commandbois.get(c.name);
            if (command && command.ownerOnly) {
                c.permissions.add({
                    permissions: [{
                        id: '211888560662511617',
                        type: 'USER',
                        permission: true
                    }]
                });
            } else if (command && command.permission) {
                const roles = message.guild?.roles.cache.filter(r => r.permissions.has(command.permission!)).map(r => r.id);
                roles?.forEach(r => c.permissions.add({ permissions: [{ id: r, type: 'ROLE', permission: true }] }));
            }
        }
    });
}
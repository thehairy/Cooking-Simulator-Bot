import type { Message } from "discord.js";
import type { Event } from "src/@types";
import { REST } from '@discordjs/rest';
import { Routes } from "discord-api-types/v9";

export const name: Event['name'] = 'messageCreate';
export const once: Event['once'] = false;

export const cook: Event['cook'] = async (message: Message): Promise<void> => {
    if (message.content.startsWith('?deploy') && message.author.id === '211888560662511617') {
        setCommands(message);
    }
}

const setCommands = async (message: Message): Promise<void> => {
    await message.guild?.commands.set([]);

    const commands = [];

    for (const command of message.client.commandbois.values()) {
        commands.push(command.recipe.toJSON());
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

    const cmds = await message.guild?.commands.fetch();
    if (!cmds) return;

    for (const [id, cmd] of cmds) {
        const command = message.client.commandbois.get(cmd.name);
        if (command && command.ownerOnly) {
            await cmd.permissions.add({
                permissions: [{
                    id: '211888560662511617',
                    type: 'USER',
                    permission: true
                }]
            })
        } else if (command && command.permission) {
            const roles = message.guild!.roles.cache.filter(role => role.permissions.has(command.permission!)).map(r => r.id);
            for (const role of roles) {
                await cmd.permissions.add({
                    permissions: [{
                        id: role,
                        type: 'ROLE',
                        permission: true
                    }]
                })
            }
        }
    }
}
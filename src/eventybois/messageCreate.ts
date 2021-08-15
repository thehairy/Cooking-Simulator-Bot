import { ApplicationCommandData, Collection, Message, MessageApplicationCommandData } from "discord.js";
import type { ContextCommand, Event, SlashCommand } from "src/@types";

export const name: Event['name'] = 'messageCreate';
export const once: Event['once'] = false;

export const cook: Event['cook'] = async (message: Message): Promise<void> => {
    if (message.author.id !== '211888560662511617')
        return;
    if (message.content.startsWith('?deploy')) {
        await message.guild?.commands.set([]);
        const commands: ApplicationCommandData[] = [];
        message.client.slashybois.each(c => commands.push(c.recipe));
        message.client.contextybois.each(c => commands.push(c.recipe));
        await message.guild?.commands.set(commands);
        
        message.guild?.commands.cache.each(c => {
            if (c.type === 'CHAT_INPUT') {
                const command = message.client.slashybois.get(c.name);
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
                const command = message.client.contextybois.get(c.name);
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
}
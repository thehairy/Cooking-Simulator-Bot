import type { Message } from "discord.js";
import type { Event } from "src/@types";

export const name: Event['name'] = 'messageCreate';
export const once: Event['once'] = false;

export const cook: Event['cook'] = async (message: Message): Promise<void> => {
    if (message.author.id !== '211888560662511617')
        return;
    if (message.content.startsWith('?deploy')) {
        await message.guild?.commands.set([]);
        message.client.slashybois.each(c => {
            message.guild?.commands.create(c.data).catch(e => {
                message.react('❌')
            });
        });
    }
}
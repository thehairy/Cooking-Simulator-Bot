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
        message.guild?.commands.set(commands);
    }
}
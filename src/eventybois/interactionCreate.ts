import Type from "@sapphire/type";
import { Event } from "src/@types";
import { clean } from "../util.js";
import { MessageEmbed, Util } from "discord.js";
import type { Interaction } from 'discord.js';

export const name: Event['name'] = 'interactionCreate';
export const once: Event['once'] = false;

export const cook: Event['cook'] = async (interaction: Interaction): Promise<void> => {
    if (!interaction.isCommand())
        return;
    
    try {
        const command = interaction.client.slashybois.get(interaction.commandName);
        if (command) {
            console.log(`Received command from ${interaction.user.tag} using ${interaction.commandName}!`)
            await command.cook(interaction);
        }
    } catch (err) {
        if (!interaction.deferred && !interaction.replied)
            interaction.deferReply({ ephemeral: true });
        
        const evaluated: any = err;
        const type = new Type(err).toString();

        const splitted = Util.splitMessage(evaluated, { maxLength: 4096 });

        const embed = new MessageEmbed()
            .setTitle('An error occured')
            .setDescription(`\`\`\`js\n${clean(splitted[0])}\n\`\`\``)
            .addField('Type', `\`\`\`ts\n${type}\n\`\`\``)
            .setFooter(`${splitted.length > 1 ? 'The error was longer than 4096 chars!' : ''}`);

        interaction.editReply({ embeds: [embed] });
    }
}
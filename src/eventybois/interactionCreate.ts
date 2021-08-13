import Type from "@sapphire/type";
import { Event } from "src/@types";
import { clean } from "../util.js";
import { MessageEmbed, Util } from "discord.js";
import type { Interaction } from 'discord.js';

export const name: Event['name'] = 'interactionCreate';
export const once: Event['once'] = false;

export const cook: Event['cook'] = async (interaction: Interaction): Promise<void> => {
    if (interaction.isCommand()) {
        try {
            const command = interaction.client.slashybois.get(interaction.commandName);
            if (command) {
                console.log(`Received command from ${interaction.user.tag} using ${interaction.commandName}!`)
                await command.cook(interaction);
            }
        } catch (err) {
            console.log(err);
            
            if (!interaction.deferred && !interaction.replied)
                interaction.deferReply({ ephemeral: true });
            
            const evaluated = err.toString();
            const type = new Type(err).toString();

            const embed = new MessageEmbed()
                .setTitle('An error occured')
                .setDescription(`\`\`\`js\n${clean(evaluated.slice(0, 4096))}\n\`\`\``)
                .addField('Type', `\`\`\`ts\n${type}\n\`\`\``)
                .setFooter(`${evaluated.length > 1 ? 'The error was longer than 4096 chars!' : ''}`);

            interaction.editReply({ embeds: [embed] });
        }
    } else if (interaction.isContextMenu()) {
        try {
            const command = interaction.client.contextybois.get(interaction.commandName);
            if (command) {
                console.log(`Received context menu from ${interaction.user.tag} using ${interaction.commandName}!`)
                await command.cook(interaction);
            }
        } catch (err) {
            if (!interaction.deferred && !interaction.replied)
                interaction.deferReply({ ephemeral: true });
            
            const evaluated = err.toString();
            const type = new Type(err).toString();

            const embed = new MessageEmbed()
                .setTitle('An error occured')
                .setDescription(`\`\`\`js\n${clean(evaluated.slice(0, 4096))}\n\`\`\``)
                .addField('Type', `\`\`\`ts\n${type}\n\`\`\``)
                .setFooter(`${evaluated.length > 1 ? 'The error was longer than 4096 chars!' : ''}`);

            interaction.editReply({ embeds: [embed] });
        }
    }
}
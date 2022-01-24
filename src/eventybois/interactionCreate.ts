import Type from "@sapphire/type";
import { ContextCommand, Event, SlashCommand } from "src/@types";
import { clean } from "../util.js";
import { AutocompleteInteraction, CommandInteraction, ContextMenuInteraction, MessageEmbed, Util } from "discord.js";
import type { Interaction } from 'discord.js';

export const name: Event['name'] = 'interactionCreate';
export const once: Event['once'] = false;

export const cook: Event['cook'] = async (interaction: Interaction): Promise<void> => {
    console.log(interaction.type);
    if (interaction.isCommand() || interaction.isContextMenu()) {
        return void handleCommand(interaction);
    }
    if (interaction.isAutocomplete()) {
        return void handleAutocomplete(interaction);
    }
};

const handleCommand = async (interaction: CommandInteraction | ContextMenuInteraction): Promise<void> => {
    try {
        if (interaction.isCommand()) {
            const command = interaction.client.commandbois.get(interaction.commandName) as SlashCommand | undefined;
            if (command) {
                console.log(`Received command from ${interaction.user.tag} using ${interaction.commandName}!`);
                await command.cook(interaction);
            }
        }
        if (interaction.isContextMenu()) {
            const command = interaction.client.commandbois.get(interaction.commandName) as ContextCommand | undefined;
            if (command) {
                console.log(`Received command from ${interaction.user.tag} using ${interaction.commandName}!`);
                await command.cook(interaction);
            }
        }
    } catch (err: any) {
        console.log(err);
        
        if (!interaction.deferred && !interaction.replied)
            interaction.deferReply({ ephemeral: true });
        
        const evaluated = err.toString();
        const type = new Type(err).toString();

        const embed = new MessageEmbed()
            .setTitle('An error occured')
            .setDescription(`\`\`\`js\n${clean(evaluated.slice(0, 4096))}\n\`\`\``)
            .addField('Type', `\`\`\`ts\n${type}\n\`\`\``)
            .setFooter({ text: `${evaluated.length > 1 ? 'The error was longer than 4096 chars!' : ''}` });

        interaction.editReply({ embeds: [embed] });
    }
};

const handleAutocomplete = async (interaction: AutocompleteInteraction): Promise<void> => {
    try {
        const command = interaction.client.commandbois.get(interaction.commandName) as SlashCommand | undefined;
        if (command) {
            console.log(`Received autocomplete from ${interaction.user.tag} using ${interaction.commandName}!`);
            await command.cook(interaction);
        }
    } catch (err: any) {
        console.warn(err);
                
        const evaluated = err.toString();
        const type = new Type(err).toString();

        const embed = new MessageEmbed()
            .setTitle('An error occured')
            .setDescription(`\`\`\`js\n${clean(evaluated.slice(0, 4096))}\n\`\`\``)
            .addField('Type', `\`\`\`ts\n${type}\n\`\`\``)
            .setFooter({ text: `${evaluated.length > 1 ? 'The error was longer than 4096 chars!' : ''}` });

        interaction.channel?.send({ embeds: [embed] });
    }
}
import Type from "@sapphire/type";
import { ContextCommand, Event, ModalCommand, SlashCommand } from "../@types";
import { clean, handleError } from "../util.js";
import { AutocompleteInteraction, ChatInputCommandInteraction, ContextMenuCommandInteraction, EmbedBuilder, ModalSubmitInteraction, TextBasedChannel } from "discord.js";
import type { Interaction } from 'discord.js';

export const name: Event['name'] = 'interactionCreate';
export const once: Event['once'] = false;

/**
 * Interaction event entry point
 * 
 * @param interaction Interaction
 * @returns 
 */
export const cook: Event['cook'] = async (interaction: Interaction): Promise<void> => {
    if (interaction.isChatInputCommand() || interaction.isContextMenuCommand()) {
        return void handleCommand(interaction);
    }
    if (interaction.isAutocomplete()) {
        return void handleAutocomplete(interaction);
    }

    if (interaction.isModalSubmit()) {
        return void handleModal(interaction);
    }
};

/**
 * Handles a command interaction
 * 
 * @param interaction ChatInputcommandInteraction | ContextMenuCommandInteraction
 */
const handleCommand = async (interaction: ChatInputCommandInteraction | ContextMenuCommandInteraction): Promise<void> => {
    try {
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commandbois.get(interaction.commandName) as SlashCommand | undefined;
            if (command) {
                console.log(`Received command from ${interaction.user.tag} using ${interaction.commandName}!`);
                await command.cook(interaction);
            }
        }
        if (interaction.isContextMenuCommand()) {
            const command = interaction.client.commandbois.get(interaction.commandName) as ContextCommand | undefined;
            if (command) {
                console.log(`Received command from ${interaction.user.tag} using ${interaction.commandName}!`);
                await command.cook(interaction);
            }
        }
    } catch (err: any) {
        handleError(err, interaction.channel!);
    }
};

/**
 * Handles an autocomplete interaction
 * 
 * @param interaction AutocompleteInteraction
 */
const handleAutocomplete = async (interaction: AutocompleteInteraction): Promise<void> => {
    try {
        const command = interaction.client.commandbois.get(interaction.commandName) as SlashCommand | undefined;
        if (command) {
            console.log(`Received autocomplete from ${interaction.user.tag} using ${interaction.commandName}!`);
            await command.cook(interaction);
        }
    } catch (err: any) {
        handleError(err, interaction.channel!);
    }
}


/**
 * Handles a modal interaction
 * 
 * @param interaction ModalSubmitInteraction
 */
const handleModal = async (interaction: ModalSubmitInteraction): Promise<void> => {
    try {
        const modal = interaction.client.modalbois.get(interaction.customId) as ModalCommand | undefined;
        if (modal) {
            console.log(`Received modal from ${interaction.user.tag} using ${interaction.customId}!`);
            await modal.cook(interaction);
        }
    } catch (err: any) {
        handleError(err, interaction.channel!);
    }
}
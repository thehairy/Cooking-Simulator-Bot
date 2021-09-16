import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";
import type { Recipe, SlashCommand } from "src/@types";

export const recipe: SlashCommand['recipe'] = new SlashCommandBuilder()
    .setName('recipe')
    .setDescription('Shows a random recipe of the game that you can make!')
    .addStringOption(option => option.setName('gamemode').setDescription('The gamemode you want a recipe of').addChoices([
        ['Normal (Default)', 'normal'],
        ['Mobile', 'mobile'],
        ['Cakes and Cookies', 'cac'],
        ['Pizza', 'pizza']
    ]));

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    interaction.deferReply();

    const gamemode = interaction.options.getString('gamemode') || 'normal';
    // Get recipes of that gamemode
}
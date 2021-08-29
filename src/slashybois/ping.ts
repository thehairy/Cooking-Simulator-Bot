import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";
import type { SlashCommand } from "src/@types";

export const recipe: SlashCommand['recipe'] = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Am I alive?!')

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    interaction.reply({ content: 'I guess?' });
}
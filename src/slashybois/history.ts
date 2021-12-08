import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, GuildMember, MessageEmbed } from "discord.js";
import type { SlashCommand } from "src/@types";

export const recipe: SlashCommand['recipe'] = new SlashCommandBuilder()
    .setName('history')
    .setDescription('Shows the history of a specific user.')
    .addUserOption(option => {
        option.setName('user');
        option.setDescription('The user you want to see the history of');
        option.setRequired(true);
        return option;
    });

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    const target = interaction.options.getMember('user', true) as GuildMember;

    // TODO: Get History from Database

    /*await target.send({ embeds: [embed] });*/
}
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageEmbed } from "discord.js";
import type { RecipeFile, SlashCommand } from "src/@types";

export const recipe: SlashCommand['recipe'] = new SlashCommandBuilder()
    .setName('recipe')
    .setDescription('Shows a random recipe of the game that you can make!')
    .addSubcommand(sub => {
        sub.setName('random');
        sub.setDescription('Shows a random recipe of the game that you can make!');
        sub.addStringOption(option => {
            option.setName('gamemode')
            option.setDescription('The gamemode you want a recipe of')
            option.addChoices([
                ['Normal (Default)', 'normal'],
                ['Mobile', 'mobile'],
                ['Cakes and Cookies', 'cac'],
                ['Pizza', 'pizza']
            ]);
            return option;
        });
        return sub;
    })
    /*.addSubcommand(sub => {
        sub.setName('get');
        sub.setDescription('Shows a specific recipe that you can make!');
        sub.addStringOption(option => {
            option.setName('recipe');
            option.setDescription('The recipe you want to see');
            option.setRequired(true);
            return option;
        });
        return sub;
    })*/;

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    await interaction.deferReply();

    const gamemode = interaction.options.getString('gamemode') || 'normal';
    const recipe = ((await import(`../recipes/${gamemode}`)) as RecipeFile).getRandom();

    const embed = new MessageEmbed()
        .setTitle(recipe.name)
        .setDescription(recipe.text)
        .setThumbnail(recipe.image || '');

    setTimeout(() => {
        interaction.editReply({ embeds: [embed] });
    }, 5000);
}
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, GuildMember, MessageEmbed } from "discord.js";
import type { SlashCommand } from "src/@types";

export const recipe: SlashCommand['recipe'] = new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Warns a specific user.')
    .addUserOption(option => {
        option.setName('user');
        option.setDescription('The user you want to warn');
        option.setRequired(true);
        return option;
    })
    .addStringOption(option => {
        option.setName('reason');
        option.setDescription('Why did you warn the user?');
        return option;
    })

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    const target = interaction.options.getMember('user', true) as GuildMember;
    const reason = interaction.options.getString('reason') || undefined;
    const punisher = interaction.member as GuildMember;

    if (target.roles.highest.position >= punisher.roles.highest.position) {
        return void interaction.editReply({ content: `The user ${target} is not warnable by you!` });
    }

    const embed = new MessageEmbed()
        .setTitle('You bad human...')
        .setDescription(`You have been warned on ${interaction.guild?.name}.`)
        .addField(`Punisher`, `${punisher}`)
        .addField(`Reason`, `${reason ? reason : 'No reason provided'}`);

    await target.send({ embeds: [embed] });

    // Database stuff
}
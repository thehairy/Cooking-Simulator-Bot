import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, GuildMember, MessageEmbed, Permissions } from "discord.js";
import { Users, Kicks } from '../index';
import type { SlashCommand } from "src/@types";

export const recipe: SlashCommand['recipe'] = new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kicks a specific user from this discord.')
    .addUserOption(option => {
        option.setName('user');
        option.setDescription('The user you want to kick');
        option.setRequired(true);
        return option;
    })
    .addStringOption(option => {
        option.setName('reason');
        option.setDescription('Why did you kick the user?');
        return option;
    })
    .setDefaultPermission(false);

export const permission: SlashCommand['permission'] = Permissions.FLAGS.KICK_MEMBERS;

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });

    const target = interaction.options.getMember('user', true) as GuildMember;
    const reason = interaction.options.getString('reason') || undefined;
    const punisher = interaction.member as GuildMember;

    if (target.roles.highest.position >= punisher.roles.highest.position) {
        return void interaction.editReply({ content: `The user ${target} is not kickable by you!` });
    }

    const embed = new MessageEmbed()
        .setTitle('You bad human...')
        .setDescription(`You have been kicked from ${interaction.guild?.name}.`)
        .addField(`Punisher`, `${punisher}`)
        .addField(`Reason`, `${reason ? reason : 'No reason provided'}`);

    await target.send({ embeds: [embed] });
    await target.kick(reason);

    let dbTarget = await Users.findOne({ where: { id: target.id } });
    if (!dbTarget) {
        dbTarget = await Users.create({ id: target.id })
    }

    await Kicks.create({ reason, date: new Date(), punisher: punisher.id, userId: target.id });

    await interaction.editReply({ content: `${target} has been kicked.` });
}
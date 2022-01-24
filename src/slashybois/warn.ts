import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, GuildMember, MessageEmbed, Permissions } from "discord.js";
import { Users, Warns } from '../database';
import type { SlashCommand } from "src/@types";
import ModLog from "../classes/modLog";

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
    .setDefaultPermission(false);

export const permission: SlashCommand['permission'] = Permissions.FLAGS.KICK_MEMBERS;

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });
    
    const target = interaction.options.getMember('user') as GuildMember;
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

    await target.send({ embeds: [embed] }).catch(() => {});

    let dbTarget = await Users.findOne({ where: { id: target.id } });
    if (!dbTarget) {
        dbTarget = await Users.create({ id: target.id })
    }

    const warn = await Warns.create({ reason, date: new Date(), punisher: punisher.id, userId: target.id });

    const modLog = new ModLog('WARN', target, warn.get('id') as number);
    await modLog.send();

    await warn.update({ ref: modLog.url });
    await interaction.editReply({ content: `${target} has been warned.` });
}
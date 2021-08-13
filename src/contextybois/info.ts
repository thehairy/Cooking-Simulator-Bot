import { ContextMenuInteraction, MessageEmbed } from "discord.js";
import { ContextCommand } from "src/@types";
import { daysAgo } from '@thehairy/reconlx-dev';

export const data: ContextCommand['data'] = {
    name: 'Info',
    type: 'USER'
}

export const cook: ContextCommand['cook'] = async (interaction: ContextMenuInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });
    
    const target = await interaction.guild?.members.fetch(interaction.targetId);

    const embed = new MessageEmbed()
        .setTitle(`${target?.user.tag} - ${target?.presence?.status || 'offline'}`)
        .addField('Woah...', `... the account was created ${ daysAgo(target?.user.createdAt ?? new Date()) } ago!`)
        .addField('Thats insane!', `The user joined ${daysAgo(target?.joinedAt ?? new Date()) } ago!`)
        .setFooter(`Warns, Kicks, Bans... - ID: ${interaction.targetId}`);

    interaction.editReply({ embeds: [embed] })
}
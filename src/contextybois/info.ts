import type { ContextCommand } from "src/@types";
import type { ContextMenuInteraction } from "discord.js";
import { MessageEmbed } from "discord.js";
import { daysAgo } from '@thehairy/reconlx-dev';

export const recipe: ContextCommand['recipe'] = {
    name: 'Info',
    type: 'USER'
}

export const cook: ContextCommand['cook'] = async (interaction: ContextMenuInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });

    const target = await interaction.guild?.members.fetch(interaction.targetId);

    const embed = new MessageEmbed()
        .setTitle(`${target?.user.tag} - ${target?.presence?.status || 'offline'}`)
        .addField('Woah...', `... the account was created ${ daysAgo(target?.user.createdAt ?? new Date()) }!`)
        .addField('Thats insane...', `...the user joined ${daysAgo(target?.joinedAt ?? new Date()) }!`)
        .setFooter(`Warns, Kicks, Bans... - ID: ${interaction.targetId}`);

    interaction.editReply({ embeds: [embed] })
}
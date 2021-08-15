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
        .setThumbnail(target?.user.displayAvatarURL() || '')
        .setTitle(`${target?.user.tag} - ${target?.presence?.status || 'offline'}`)
        .addField('Joined:', `<t:${~~((target?.joinedTimestamp as any) / 1000)}:F>`)
        .addField('Roles', `${target?.roles.cache.filter(r => r.id !== interaction.guild?.id).map(r => `<@&${r.id}>`).join(' ')}\n\u200b`)
        .addField('Woah...', `... the account was created <t:${~~((target?.user.createdTimestamp as any) / 1000)}:R>!`)
        .addField('Thats insane...', `...the user joined <t:${~~((target?.joinedTimestamp as any) / 1000)}:R>!`)
        .setFooter(`Warns, Kicks, Bans... - ID: ${interaction.targetId}`)
        .setColor(`${!target?.presence ? 'GREY' : target.presence.status === 'online' ? 'GREEN' : target.presence.status === 'dnd' ? 'RED': 'YELLOW'}`);

    interaction.editReply({ embeds: [embed] })
}

const getMonth = (month: string): string => {
    switch (month) {
        case '01':
            return 'January';
        case '02':
            return 'February';
        case '03':
            return 'March';
        case '04':
            return 'April';
        case '05':
            return 'May';
        case '06':
            return 'June';
        case '07':
            return 'July';
        case '08':
            return 'August';
        case '09':
            return 'September';
        case '10':
            return 'October';
        case '11':
            return 'November';
        case '12':
            return 'December';
        default:
            return 'Magic';
    }
};
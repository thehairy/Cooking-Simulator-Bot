import type { ContextCommand } from "src/@types";
import type { ContextMenuInteraction } from "discord.js";
import { MessageEmbed } from "discord.js";
import { ContextMenuCommandBuilder } from "@discordjs/builders";

export const recipe: ContextCommand['recipe'] = new ContextMenuCommandBuilder()
    .setName('Info')
    .setType(2);

export const cook: ContextCommand['cook'] = async (interaction: ContextMenuInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });

    const target = await interaction.guild?.members.fetch(interaction.targetId);

    const embed = new MessageEmbed()
        .setThumbnail(target?.user.displayAvatarURL() || '')
        .setTitle(`${target?.user.tag} - ${target?.presence?.status.toUpperCase() || 'OFFLINE'}`)
        .addField('Joined:', `<t:${~~((target?.joinedTimestamp as any) / 1000)}:F>`)
        .addField('Roles', `${target?.roles.cache.filter(r => r.id !== interaction.guild?.id).map(r => `<@&${r.id}>`).join(' ')}`)
        .addField('Did you know...', `... that the account was created <t:${~~((target?.user.createdTimestamp as any) / 1000)}:R>!\n... the user joined <t:${~~((target?.joinedTimestamp as any) / 1000)}:R>!`)
        .setFooter(`Warns, Kicks, Bans... - ID: ${interaction.targetId}`)
        .setColor(`${!target?.presence ? 'GREY' : target.presence.status === 'online' ? 'GREEN' : target.presence.status === 'dnd' ? 'RED': 'YELLOW'}`);

    interaction.editReply({ embeds: [embed] })
}
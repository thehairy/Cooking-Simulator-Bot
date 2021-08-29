import type { SlashCommand } from "src/@types";
import type { CommandInteraction } from "discord.js";
import { MessageEmbed } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

export const recipe: SlashCommand['recipe'] = new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get information about a user')
    .addUserOption(option => option.setName('user').setDescription('The user you wanna know something about').setRequired(false))

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });

    const target = await interaction.guild?.members.fetch(interaction.options.getUser('user')?.id || interaction.user.id);

    if (!target)
        return void interaction.editReply({ content: 'Not sure what happened, but there was an error. :('});

    const embed = new MessageEmbed()
        .setThumbnail(target?.user.displayAvatarURL() || '')
        .setTitle(`${target?.user.tag} - ${target?.presence?.status.toUpperCase() || 'OFFLINE'}`)
        .addField('Joined:', `<t:${~~((target?.joinedTimestamp as any) / 1000)}:F>`)
        .addField('Roles', `${target?.roles.cache.filter(r => r.id !== interaction.guild?.id).map(r => `<@&${r.id}>`).join(' ')}`)
        .addField('Did you know...', `... that the account was created <t:${~~((target?.user.createdTimestamp as any) / 1000)}:R>!\n... the user joined <t:${~~((target?.joinedTimestamp as any) / 1000)}:R>!`)
        .setFooter(`Warns, Kicks, Bans... - ID: ${target.id}`)
        .setColor(`${!target?.presence ? 'GREY' : target.presence.status === 'online' ? 'GREEN' : target.presence.status === 'dnd' ? 'RED': 'YELLOW'}`);

    interaction.editReply({ embeds: [embed] })
}
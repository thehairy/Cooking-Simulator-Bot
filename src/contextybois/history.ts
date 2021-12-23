import { ContextMenuCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, Formatters, GuildMember, MessageEmbed, Permissions } from "discord.js";
import { Users, Warns, Kicks, Banns } from '../index';
import type { ContextCommand, SlashCommand } from "src/@types";

export const recipe: ContextCommand['recipe'] = new ContextMenuCommandBuilder()
    .setName('History')
    .setType(2)
    .setDefaultPermission(false);

export const permission: ContextCommand['permission'] = Permissions.FLAGS.KICK_MEMBERS;

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    await interaction.deferReply();
    
    const target = interaction.options.getMember('user', true) as GuildMember;

    // TODO: Get History from Database
    let dbTarget = await Users.findOne({ where: { id: target.id } });
    if (!dbTarget) {
        dbTarget = await Users.create({ id: target.id })
    }

    const dbWarns = await Warns.findAll({ where: { userId: target.id } });
    const dbKicks = await Kicks.findAll({ where: { userId: target.id } });
    const dbBanns = await Banns.findAll({ where: { userId: target.id } });

    // Create history embed with warns
    const embed = new MessageEmbed()
        .setTitle(`History of ${target.user.tag}`)


    let arrFields = [];
    for (const warn of dbWarns) {
        arrFields.push({ name: 'Warn', value: `Reason: *${warn.get('reason')}*\nPunisher: <@${warn.get('punisher')}>\nDate: ${ Formatters.time(warn.get('date') as Date)}`, date: warn.get('date') as Date });
    }
    for (const kick of dbKicks) {
        arrFields.push({ name: 'Kick', value: `Reason: *${kick.get('reason')}*\nPunisher: <@${kick.get('punisher')}>\nDate: ${ Formatters.time(kick.get('date') as Date)}`, date: kick.get('date') as Date });
    }
    for (const bann of dbBanns) {
        arrFields.push({ name: 'Bann', value: `Reason: *${bann.get('reason')}*\nPunisher: <@${bann.get('punisher')}>\nDate: ${ Formatters.time(bann.get('date') as Date)}`, date: bann.get('date') as Date });
    }

    arrFields.sort((a, b) => a.date.getTime() - b.date.getTime());
    embed.addFields(...(arrFields.slice(0, 24)));

    if (arrFields.length > 25) {
        embed.setFooter(`And ${arrFields.length - 25} more...`);
    }

    interaction.editReply({ embeds: [embed] });
    
    /*await target.send({ embeds: [embed] });*/
}
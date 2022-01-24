import { GuildAuditLogs, GuildMember } from 'discord.js';
import type { Event } from '../@types';
import { Users, Kicks, Banns } from '../database';
import { promisify } from 'util';
import ModLog from '../classes/modLog';

export const name: Event['name'] = 'guildMemberRemove';
export const once: Event['once'] = false;

export const cook: Event['cook'] = async (member: GuildMember) => {
    const auditLogsKick = await member.guild.fetchAuditLogs({ type: 'MEMBER_KICK', limit: 1 });
    const auditLogsBan = await member.guild.fetchAuditLogs({ type: 'MEMBER_BAN_ADD', limit: 1 });

    if (auditLogsKick.entries.some(entry => entry.target?.id === member.id) && auditLogsBan.entries.some(entry => entry.target?.id === member.id)) {
        if ((auditLogsKick.entries.first()?.createdAt as any) > (auditLogsBan.entries.first()?.createdAt as any)) {
            await kick(member, auditLogsKick);
        } else {
            await ban(member, auditLogsBan);
        }
    } else if (auditLogsKick.entries.some(entry => entry.target?.id === member.id)) {
        await kick(member, auditLogsKick);
    } else if (auditLogsKick.entries.some(entry => entry.target?.id === member.id)) {
        await ban(member, auditLogsBan);
    } else {
        // User left
        return;
    }
}

const kick = async (member: GuildMember, auditLogsKick: GuildAuditLogs<"MEMBER_KICK">) => {
    const entry = auditLogsKick.entries.first();
    
    let dbTarget = await Users.findOne({ where: { id: member.id } });
    if (!dbTarget) {
        dbTarget = await Users.create({ id: member.id })
    }

    const kick = await Kicks.create({ reason: entry?.reason, date: entry?.createdAt, punisher: entry?.executor?.id, userId: member.id });

    const modLog = new ModLog('KICK', member, kick.get('id') as number);
    await modLog.send();

    await kick.update({ ref: modLog.url });
}

const ban = async (member: GuildMember, auditLogsBan: GuildAuditLogs<"MEMBER_BAN_ADD">) => {
    const entry = auditLogsBan.entries.first();
    
    let dbTarget = await Users.findOne({ where: { id: member.id } });
    if (!dbTarget) {
        dbTarget = await Users.create({ id: member.id })
    }

    const ban = await Banns.create({ reason: entry?.reason, date: entry?.createdAt, punisher: entry?.executor?.id, userId: member.id });
    const modLog = new ModLog('BAN', member, ban.get('id') as number);
    await modLog.send();

    await ban.update({ ref: modLog.url });
}

const wait = promisify(setTimeout);
import { GuildMember } from 'discord.js';
import type { Event } from '../@types';
import { Users, Mutes } from '../database';
import ModLog from '../classes/modLog';

export const name: Event['name'] = 'guildMemberUpdate';
export const once: Event['once'] = false;

export const cook: Event['cook'] = async (oldMember: GuildMember, newMember: GuildMember) => {
    if (!oldMember.isCommunicationDisabled() && newMember.isCommunicationDisabled()) {
        // User got muted
        const auditLogsMute = await newMember.guild.fetchAuditLogs({ type: 'MEMBER_UPDATE', limit: 1 });
        if (auditLogsMute.entries.some(entry => entry.target?.id === newMember.id) && auditLogsMute.entries.first()?.changes?.some(change => change.key === 'communication_disabled_until')) {
            const entry = auditLogsMute.entries.first();
            const dbTarget = await Users.findOne({ where: { id: newMember.id } });
            if (!dbTarget) {
                await Users.create({ id: newMember.id });
            }
    
            const mute = await Mutes.create({ reason: entry?.reason ?? 'No reason provided', date: entry?.createdAt, until: entry?.changes?.find(change => change.key === 'communication_disabled_until')?.new, punisher: entry?.executor?.id, userId: newMember.id });
            
            const modLog = new ModLog('MUTE', newMember, mute.get('id') as number);
            await modLog.send();
        
            await mute.update({ ref: modLog.url });
        }
    } else if (oldMember.isCommunicationDisabled() && !newMember.isCommunicationDisabled()) {
        // User got unmuted
        const mute = await Mutes.findOne({ where: { userId: newMember.id, until: oldMember.communicationDisabledUntil } });
        const modLog = new ModLog('UNMUTE', newMember, mute?.get('id') as number);
        await modLog.send();
    }
}
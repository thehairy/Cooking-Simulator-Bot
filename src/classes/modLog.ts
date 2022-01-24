import { Formatters, GuildMember, MessageEmbed } from "discord.js";
import { Users, Mutes, Kicks, Warns, Banns } from '../database';

export default class ModLog {
    type: 'KICK' | 'MUTE' | 'UNMUTE' | 'WARN' | 'BAN';
    target: GuildMember;
    id: number;
    url: string | undefined;

    constructor(type: 'KICK' | 'MUTE' | 'UNMUTE' | 'WARN' | 'BAN', target: GuildMember, id: number) {
        this.type = type;
        this.target = target;
        this.id = id;
    }
    
    async send() {
        const embed = new MessageEmbed();
        let description = `**Member**: \`${this.target.user.tag}\` (${this.target.id})\n`;

        switch (this.type) {
            case 'KICK': {
                const entry = await Kicks.findOne({ where: { id: this.id } });
                const punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);

                embed.setAuthor({ name: `${punisher?.tag} (${punisher?.id})`, iconURL: punisher?.displayAvatarURL()});
                embed.setFooter({ text: `Case ${entry?.get('id')}`});
                embed.setTimestamp(entry?.get('date') as Date);
                embed.setColor('YELLOW');
                description += `**Action**: Kick\n**Reason**: ${entry?.get('reason')}`;
                break;
            }
            case 'MUTE': {
                const entry = await Mutes.findOne({ where: { id: this.id } });
                const punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);

                embed.setAuthor({ name: `${punisher?.tag} (${punisher?.id})`, iconURL: punisher?.displayAvatarURL()});
                embed.setFooter({ text: `Case ${entry?.get('id')}`});
                embed.setTimestamp(entry?.get('date') as Date);
                embed.setColor('YELLOW');
                description += `**Action**: Mute\n**Reason**: ${entry?.get('reason')}\n**Expires**: ${Formatters.time(entry?.get('expires') as Date)}`;
                break;
            }
            case 'UNMUTE': {
                const entry = await Mutes.findOne({ where: { id: this.id } });
                const punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);

                embed.setAuthor({ name: `${punisher?.tag} (${punisher?.id})`, iconURL: punisher?.displayAvatarURL()});
                embed.setFooter({ text: `Case ${entry?.get('id')}`});
                embed.setTimestamp();

                description += `**Action**: Unmute\n**Reason**: Automatic unmute based on duration\n**Reference**: [Log](${entry?.get('ref')})`;
                break;
            }
            case 'WARN': {
                const entry = await Warns.findOne({ where: { id: this.id } });
                const punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);

                embed.setAuthor({ name: `${punisher?.tag} (${punisher?.id})`, iconURL: punisher?.displayAvatarURL()});
                embed.setFooter({ text: `Case ${entry?.get('id')}`});
                embed.setTimestamp(entry?.get('date') as Date);
                embed.setColor('YELLOW');
                description += `**Action**: Warn\n**Reason**: ${entry?.get('reason')}`;
                break;
            }
            case 'BAN': {
                const entry = await Banns.findOne({ where: { id: this.id } });
                const punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);

                embed.setAuthor({ name: `${punisher?.tag} (${punisher?.id})`, iconURL: punisher?.displayAvatarURL()});
                embed.setFooter({ text: `Case ${entry?.get('id')}`});
                embed.setTimestamp(entry?.get('date') as Date);
                embed.setColor('RED');
                description += `**Action**: Ban\n**Reason**: ${entry?.get('reason')}`;
                break;
            }
        }

        embed.setDescription(description);
        const message = await this.target.guild.systemChannel?.send({ embeds: [embed] });
        this.url = message?.url;
    }
}
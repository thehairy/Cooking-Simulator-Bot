import { Formatters, GuildMember, MessageEmbed, User } from "discord.js";
import { Users, Mutes, Kicks, Warns, Banns } from '../database';
import { Model } from "sequelize";

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
        
        let entry: Model<any, any> | null;
        let punisher: User;

        switch (this.type) {
            case 'KICK': {
                entry = await Kicks.findOne({ where: { id: this.id } });
                punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);
                description += `**Action**: Kick\n**Reason**: ${entry?.get('reason')}`;
                embed.setColor('YELLOW');
                break;
            }
            case 'MUTE': {
                entry = await Mutes.findOne({ where: { id: this.id } });
                punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);
                description += `**Action**: Mute\n**Reason**: ${entry?.get('reason')}\n**Expires**: ${Formatters.time(entry?.get('expires') as Date)}`;
                embed.setColor('YELLOW');
                break;
            }
            case 'UNMUTE': {
                entry = await Mutes.findOne({ where: { id: this.id } });
                punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);
                description += `**Action**: Unmute\n**Reason**: Automatic unmute based on duration\n**Reference**: [Log](${entry?.get('ref')})`;
                break;
            }
            case 'WARN': {
                entry = await Warns.findOne({ where: { id: this.id } });
                punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);
                description += `**Action**: Warn\n**Reason**: ${entry?.get('reason')}`;
                embed.setColor('YELLOW');
                break;
            }
            case 'BAN': {
                entry = await Banns.findOne({ where: { id: this.id } });
                punisher = await this.target.client.users.fetch(entry?.get('punisher') as string);
                description += `**Action**: Ban\n**Reason**: ${entry?.get('reason')}`;
                embed.setColor('RED');
                break;
            }
        }

        embed.setAuthor({ name: `${punisher?.tag} (${punisher?.id})`, iconURL: punisher?.displayAvatarURL()});
        embed.setFooter({ text: `Case ${entry?.get('id')}`});
        embed.setTimestamp(entry?.get('date') as Date);
        embed.setDescription(description);
        const message = await this.target.guild.systemChannel?.send({ embeds: [embed] });
        this.url = message?.url;
    }
}
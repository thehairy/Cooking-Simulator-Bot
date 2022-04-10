import Type from "@sapphire/type";
import { EmbedBuilder, Presence, TextBasedChannel } from "discord.js";

export const clean = (text: string): string => {
    if (typeof (text) === 'string') {
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    } else {
        return text;
    }
};

export const statusColor = (presence: Presence | null): 'GREY' | 'GREEN' | 'YELLOW' | 'RED' => {
    return !presence || presence.status == 'offline' ? 'GREY' : presence.status == 'online' ? 'GREEN' : presence.status == 'idle' ? 'YELLOW' : 'RED';
}

export const translate = async (text: string, locale: string): Promise<string> =>  {
    const localeData = (await import(`./locales/${locale}`)).default;
    
    if (!(text in localeData)) return 'No translation found';
    return localeData[text];
}

export const replacePlaceholder = (text: string, aWith: string[]): string => {
    for (const sWith of aWith) {
        text = text.replace(/{}/, sWith);
    }
    return text;
}

/**
 * Handles an error
 * 
 * @param error Error
 * @param channel TextBasedChannel
 */
export const handleError = async (error: any, channel: TextBasedChannel): Promise<void> => {
    try {
        console.warn(error);
                
        const evaluated = error.toString();
        const type = new Type(error).toString();

        const embed = new EmbedBuilder()
            .setTitle('An error occured')
            .setDescription(`\`\`\`js\n${clean(evaluated.slice(0, 4096))}\n\`\`\``)
            .addFields({ name: 'Type', value: `\`\`\`ts\n${type}\n\`\`\`` })
            .setFooter({ text: `${evaluated.length > 1 ? 'The error was longer than 4096 chars!' : ''}` });

        channel?.send({ embeds: [embed] });
    } catch (err: any) {
        console.warn(err);
    }
}
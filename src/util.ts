import type { Presence } from "discord.js";

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
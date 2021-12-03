import { Collection, ColorResolvable, Message, Presence } from "discord.js";
import { Recipe } from "./@types";

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


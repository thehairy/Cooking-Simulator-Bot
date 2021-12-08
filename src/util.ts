import type { Collection, ColorResolvable, Message, Presence } from "discord.js";
import type { Recipe } from "./@types";
import * as db from "mongoose";

export const clean = (text: string): string => {
    if (typeof (text) === 'string') {
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    } else {
        return text;
    }
};

export const checkScam = async (message: Message): Promise<void> => {
    // Yeet message through scam api
    const bScam = (message.content.match(/test/g) || []).length > 0;
    if (bScam) {
        console.log('Scam detected');
        // message.member?.ban({ reason: 'Scam detected', days: 7 }).catch(() => {});
    }
}

export const statusColor = (presence: Presence | null): 'GREY' | 'GREEN' | 'YELLOW' | 'RED' => {
    return !presence || presence.status == 'offline' ? 'GREY' : presence.status == 'online' ? 'GREEN' : presence.status == 'idle' ? 'YELLOW' : 'RED';
}

export const connectDB = async (url: string): Promise<void> => {
    await db.connect(url);
}
import type { Collection, ApplicationCommandData, MessageApplicationCommandData, CommandInteraction, ContextMenuInteraction } from 'discord.js';
import translate from 'google-translate-api';

declare module 'discord.js' {
  interface Client {
    slashybois: Collection<string, SlashCommand>;
    contextybois: Collection<string, ContextCommand>;
    eventybois: Collection<string, Event>;
    owner: string;
  }
}

declare module 'translate' {
  class Translate {
    translate(text: string, to: string | TranslateOptions): Promise<string>;
  }
}

interface TranslateOptions {
  from?: string;
  to?: string;
}

interface SlashCommand {
    data: ApplicationCommandData;
    cook(interaction: CommandInteraction): Promise<void>;
}

interface ContextCommand {
    data: MessageApplicationCommandData;
    cook(interaction: ContextMenuInteraction): Promise<void>;
}

interface Event {
    name: string;
    once?: boolean;
    cook(...args: unknown[]): Promise<void>;
}
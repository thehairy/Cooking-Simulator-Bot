import { Collection, ApplicationCommandData, CommandInteraction } from 'discord.js';

declare module 'discord.js' {
  interface Client {
    slashybois: Collection<string, Command>;
    eventybois: Collection<string, Event>;
    owner: string;
  }
}

interface Command {
    data: ApplicationCommandData;
    cook(interaction: CommandInteraction): Promise<void>;
}

interface Event {
    name: string;
    once?: boolean;
    cook(...args: unknown[]): Promise<void>;
}
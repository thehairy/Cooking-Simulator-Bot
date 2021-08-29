import type { Collection, ApplicationCommandData, MessageApplicationCommandData, CommandInteraction, ContextMenuInteraction, UserApplicationCommandData, PermissionResolvable } from 'discord.js';

declare module 'discord.js' {
  interface Client {
    commandbois: Collection<string, SlashCommand | ContextCommand>;
    eventybois: Collection<string, Event>;
    owner: string;
  }
}

interface SlashCommand {
  recipe: SlashCommandBuilder;
  ownerOnly?: boolean;
  permission?: PermissionResolvable;
  cook(interaction: CommandInteraction): Promise<void>;
}

interface ContextCommand {
  recipe: ContextCommandRecipe;
  ownerOnly: boolean;
  permission?: PermissionResolvable;
  cook(interaction: ContextMenuInteraction): Promise<void>;
}

interface ContextCommandRecipe {
  name: string;
  type: string;
  defaultPermission?: boolean;
}

interface Event {
  name: string;
  once?: boolean;
  cook(...args: unknown[]): Promise<void>;
}
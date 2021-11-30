import type { Collection, ApplicationCommandData, MessageApplicationCommandData, CommandInteraction, ContextMenuInteraction, UserApplicationCommandData, PermissionResolvable, AutocompleteInteraction } from 'discord.js';

declare module 'discord.js' {
  interface Client {
    /**
     * All application commands.
     */
    commandbois: Collection<string, SlashCommand | ContextCommand>;
    /**
     * All events.
     */
    eventybois: Collection<string, Event>;
  }
}

declare module '@discordjs/builders' {
  interface SlashCommandStringOption {
    /**
     * Autocomplete
     */
    autocomplete?: boolean;
  }
}

/**
 * A SlashCommand object used to create and use custom slash commands.
 */
interface SlashCommand {
  /**
   * Data as SlashCommandBuilder.
   */
  recipe: SlashCommandBuilder;
  /**
   * If this command is owner only.
   */
  ownerOnly?: boolean;
  /**
   * The needed permission for this command.
   */
  permission?: PermissionResolvable;
  /**
   * The method this command executes if called.
   * 
   * @param {CommandInteraction} interaction The CommandInteraction object from the interactionCreate event or collector.
   */
  cook(interaction: CommandInteraction | AutocompleteInteraction): Promise<void>;
}

/**
 * A ContextCommand object used to create and use custom context commands.
 */
interface ContextCommand {
  /**
   * The data as ContextCommandRecipe
   */
  recipe: ContextCommandRecipe;
  /**
   * If the command is owner only.
   */
  ownerOnly: boolean;
  /**
   * The needed permission for this command.
   */
  permission?: PermissionResolvable;
  /**
   * The method this command executes if called.
   * 
   * @param {ContextMenuInteraction} interaction The ContextMenuInteraction object from the interactionCreate event or collector.
   */
  cook(interaction: ContextMenuInteraction): Promise<void>;
}

/**
 * An object used to create custom context commands.
 */
interface ContextCommandRecipe {
  /**
   * The name of this command.
   */
  name: string;
  /**
   * The type of this command.
   */
  type: string;
  /**
   * If this command should be public or private. (DEFAULT TRUE)
   */
  defaultPermission?: boolean = true;
}

/**
 * An object used to use events.
 */
interface Event {
  /**
   * The name of this event.
   */
  name: string;
  /**
   * If this event is called only once.
   */
  once?: boolean;
  /**
   * The methodthis event executes if called.
   * 
   * @param args Arguments passed to the event.
   */
  cook(...args: unknown[]): Promise<void>;
}

/**
 * A recipe object for Cooking Simulator.
 */
interface Recipe {
  /**
   * The name of this recipe.
   */
  name: string;
  /**
   * The ingredients used in this recipe.
   */
  ingredients: Ingredient[];
  /**
   * The recipe itself.
   */
  text: string;
  /**
   * An image of the recipe.
   */
  image?: string;
}

/**
 * An ingredient of a recipe.
 */
interface Ingredient {
  /**
   * The name of the ingredient.
   */
  name: string;
  /**
   * The amount of this ingredient used in a recipe.
   */
  amount: string | number;
}

interface RecipeFile {
  getRandom(): Recipe;
}
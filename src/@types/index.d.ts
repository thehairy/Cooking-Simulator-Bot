import { ContextMenuCommandBuilder } from '@discordjs/builders';
import type { Collection, ApplicationCommandData, MessageApplicationCommandData, CommandInteraction, ContextMenuInteraction, UserApplicationCommandData, PermissionResolvable, AutocompleteInteraction, ModalSubmitInteraction } from 'discord.js';

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
    /**
     * All modal commands.
     */
    modalbois: Collection<string, ModalCommand>;
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
 * A ModalCommand object used to use custom modal commands.
 */
interface ModalCommand {
  /**
   * Custom id of the modal.
   */
  customId: string;
  /**
   * The method this command executes if called.
   * 
   * @param {ModalSubmitInteraction} interaction The CommandInteraction object from the interactionCreate event or collector.
   */
  cook(interaction: ModalSubmitInteraction): Promise<void>;
}


/**
 * A ContextCommand object used to create and use custom context commands.
 */
interface ContextCommand {
  /**
   * The data as ContextCommandRecipe
   */
  recipe: ContextMenuCommandBuilder;
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

interface TranslationData {
  "BOT_ALIVE": string;
  "REFERENCE": string;
  "NO_HISTORY_FOUND": string;
  "AND_MORE": string;
  "HISTORY_OF": string;
  "ONLINE": string;
  "OFFLINE": string;
  "DND": string;
  "IDLE": string;
  "JOINED": string;
  "ROLES": string;
  "CREATED": string;
  "TRANSLATED_FROM": string;
  "PING": string;
  "NO_RECIPE": string;
  "NO_RECIPE_NAME": string;
  "HAS_BEEN_WARNED": string;
}
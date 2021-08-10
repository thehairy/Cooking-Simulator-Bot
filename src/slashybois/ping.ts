import type { CommandInteraction } from "discord.js";
import type { Command } from "src/@types";

export const data: Command['data'] = {
    name: 'ping',
    description: 'Am I alive?'
}

export const cook: Command['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    interaction.reply({ content: 'I guess?' });
}
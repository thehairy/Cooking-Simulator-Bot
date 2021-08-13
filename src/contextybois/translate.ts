import { ContextMenuInteraction, MessageEmbed } from "discord.js";
import type { ContextCommand } from "src/@types";
import translate from '@vitalets/google-translate-api';

export const recipe: ContextCommand['recipe'] = {
    name: "Translate",
    type: 'MESSAGE'
}

export const cook: ContextCommand['cook'] = async (interaction: ContextMenuInteraction): Promise<void> => {
    interaction.deferReply({ ephemeral: true });

    const content: string = interaction.options.getMessage('message', true)?.content;

    try {
    const translated = await translate(content, { to: 'en' });

    const embed = new MessageEmbed()
        .setTitle(`Translated from ${translated.from.language.iso} to en:`)
        .setDescription(translated.text)
        .setColor('BLUE');

    interaction.editReply({ embeds: [embed] });
    } catch (err) {
        console.log(err);
    }
}

import { ContextMenuInteraction, MessageEmbed } from "discord.js";
import type { ContextCommand } from "src/@types";
import translate from '@vitalets/google-translate-api';
import { ContextMenuCommandBuilder } from "@discordjs/builders";

export const recipe: ContextCommand['recipe'] = new ContextMenuCommandBuilder()
    .setName('Translate')
    .setType(3);

export const cook: ContextCommand['cook'] = async (interaction: ContextMenuInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });

    const content: string = interaction.options.getMessage('message', true)?.content;

    try {
        const translated = await translate(content, { to: interaction.locale.split('-')?.[0] });

        const embed = new MessageEmbed()
            .setTitle(`Translated from ${translated.from.language.iso.toUpperCase()} to ${interaction.locale.toUpperCase()}:`)
            .setDescription(translated.text)
            .setColor('BLUE');

        await interaction.editReply({ embeds: [embed] });
    } catch (err) {
        console.log(err);
    }
}

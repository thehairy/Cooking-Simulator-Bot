import { MessageEmbed, ModalSubmitInteraction } from "discord.js";
import type { ModalCommand } from "../@types";

export const customId: ModalCommand['customId'] = 'report-modal';

export const cook: ModalCommand['cook'] = async (interaction: ModalSubmitInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });

    const [user, id, reason, description] = ['report-user', 'report-id', 'report-reason', 'report-description'].map(id => interaction.fields.getTextInputValue(id));

    const embed = new MessageEmbed()
        .setTitle(`New report for ${user} - ${id || 'No ID provided'}`)
        .addField('Reason', reason)
        .addField('Description', description)
        .setColor('RED');

    await interaction.channel?.send({ embeds: [embed] });
    await interaction.editReply({ content: 'Report sent!' });
}
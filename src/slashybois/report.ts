import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageActionRow, Modal, TextInputComponent } from "discord.js";
import type { SlashCommand } from "src/@types";

export const recipe: SlashCommand['recipe'] = new SlashCommandBuilder()
    .setName('report')
    .setDescription('Report a user!')

export const cook: SlashCommand['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    const rows = [
        new MessageActionRow<TextInputComponent>()
            .addComponents([
                new TextInputComponent()
                    .setCustomId('report-user')
                    .setLabel('User')
                    .setMinLength(1)
                    .setRequired(true)
                    .setStyle('SHORT')
            ]),
        new MessageActionRow<TextInputComponent>()
            .addComponents([
                new TextInputComponent()
                    .setCustomId('report-id')
                    .setLabel('User ID')
                    .setMinLength(17)
                    .setMaxLength(19)
                    .setRequired(false)
                    .setStyle('SHORT')
            ]),
        new MessageActionRow<TextInputComponent>()
            .addComponents([
                new TextInputComponent()
                    .setCustomId('report-reason')
                    .setLabel('Reason')
                    .setMinLength(20)
                    .setMaxLength(50)
                    .setRequired(true)
                    .setStyle('SHORT')
            ]),
        new MessageActionRow<TextInputComponent>()
            .addComponents([
                new TextInputComponent()
                    .setCustomId('report-description')
                    .setLabel('Description')
                    .setMinLength(50)
                    .setMaxLength(100)
                    .setRequired(true)
                    .setStyle('PARAGRAPH')
            ])
    ]

    const modal = new Modal()
        .setTitle(`Report a user!`)
        .setCustomId('report-modal')
        .addComponents(...rows);

    await interaction.showModal(modal);
}
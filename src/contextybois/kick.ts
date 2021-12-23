import { ContextMenuCommandBuilder } from "@discordjs/builders";
import { ButtonInteraction, ContextMenuInteraction, GuildMember, Message, MessageActionRow, MessageButton, Permissions } from "discord.js";
import { Users, Kicks } from '../index';
import type { ContextCommand } from "src/@types";

export const recipe: ContextCommand['recipe'] = new ContextMenuCommandBuilder()
    .setName('Yeet')
    .setType(2)
    .setDefaultPermission(false);

export const permission: ContextCommand['permission'] = Permissions.FLAGS.KICK_MEMBERS;

export const cook: ContextCommand['cook'] = async (interaction: ContextMenuInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });

    const targetUser = await interaction.options.getUser('user', true);
    const target = await interaction.guild?.members.fetch(targetUser.id);
    const executor = interaction.member as GuildMember;

    if (!target || !executor) return;

    if (executor.roles.highest.position <= target.roles.highest.position || !executor.permissions.has(Permissions.FLAGS.KICK_MEMBERS))
        return void interaction.editReply({ content: 'You do not have enough permissions to kick this user!' });


    const buttonRow = new MessageActionRow()
        .addComponents(
            new MessageButton().setCustomId('yeet').setLabel('Yeet').setStyle('DANGER'),
            new MessageButton().setCustomId('cancel').setLabel('Cancel').setStyle('PRIMARY')
        )
    
    // TODO: Kick and Ban Button

    const message = await interaction.followUp({ content: `Are you sure you want to kick ${target}?`, components: [buttonRow] });
    if (message instanceof Message) {
        const filter = (bInteraction: ButtonInteraction) => bInteraction.user.id === executor.id;
        const response = await message.awaitMessageComponent({ filter, componentType: 'BUTTON'});
        if (!response || response.customId === 'cancel') {
            response.update({ content: 'Action canceled, you may hang up now.', components: [] });
        } else {
            await targetUser.send({ content: `You got kicked from ${interaction.guild?.name}` }).catch(() => {});
            await target.kick().then(async () => {
                response.update({ content: 'User successfully kicked, you may hang up now.', components: [] });

            let dbTarget = await Users.findOne({ where: { id: target.id } });
            if (!dbTarget) {
                dbTarget = await Users.create({ id: target.id })
            }

            await Kicks.create({ reason: null, date: new Date(), punisher: executor.id, userId: target.id });
            }).catch((err) => {
                console.log(err);
                response.update({ content: 'User was not kicked, you may hang up now.', components: [] });
            });
        }
    }
    
}

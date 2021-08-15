import { ContextMenuInteraction, GuildMember, Permissions } from "discord.js";
import type { ContextCommand } from "src/@types";

export const recipe: ContextCommand['recipe'] = {
    name: 'Yeet',
    type: 'USER',
    defaultPermission: false
}

export const permission: ContextCommand['permission'] = Permissions.FLAGS.KICK_MEMBERS;

export const cook: ContextCommand['cook'] = async (interaction: ContextMenuInteraction): Promise<void> => {
    await interaction.deferReply({ ephemeral: true });

    const targetUser = await interaction.options.getUser('user', true);
    const target = await interaction.guild?.members.fetch(targetUser.id);
    const executor = interaction.member as GuildMember;

    if (!target || !executor) return;

    if (executor.roles.highest.position <= target.roles.highest.position || !executor.permissions.has(Permissions.FLAGS.KICK_MEMBERS))
        return void interaction.editReply({ content: 'You do not have enough permissions to kick this user!' });

    await targetUser.send({ content: `You got kicked from ${interaction.guild?.name}` }).catch(() => {});
    await target.kick().then(() => {
        interaction.editReply({ content: 'User successfully kicked!' });
    }).catch(() => {
        interaction.editReply({ content: 'User was not kicked!' });
    });
}
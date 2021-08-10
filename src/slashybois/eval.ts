import type { Command } from "src/@types";
import type { CommandInteraction } from "discord.js";
import { MessageEmbed, Util } from "discord.js";
import { performance } from 'perf_hooks';
import { Type } from '@sapphire/type';
import { inspect } from 'util';
import { clean } from "../util.js";

export const data: Command['data'] = {
    name: 'eval',
    description: 'Eval! Eval! Eval!',
    options: [
        {
            name: 'code',
            description: 'Code to be evaled',
            type: 'STRING',
            required: true
        },
        {
            name: 'hidden',
            description: 'If the output should be ephemeral (Default TRUE)',
            type: 'BOOLEAN',
            required: false
        }
    ]
}

export const cook: Command['cook'] = async (interaction: CommandInteraction): Promise<void> => {
    if (interaction.user.id !== '211888560662511617')
        return void interaction.reply({ content: 'No.' });

    const hidden: boolean | null = interaction.options.getBoolean('hidden');
    if (hidden || hidden === null)
        await interaction.deferReply({ ephemeral: true })
    else
        await interaction.deferReply();

    const code: string | null = interaction.options.getString('code');
    if (!code)
        return void interaction.editReply({ content: 'Code required to evaluate!' });

    let evaluated: any;
    let timer: number = performance.now();
    let type: string;

    try {
        evaluated = eval(code);

        if (evaluated instanceof Promise)
            evaluated = await evaluated;

        timer = performance.now() - timer;
        type = new Type(evaluated).toString();
        
        if (typeof evaluated !== 'string')
            evaluated = inspect(evaluated);
    } catch (err) {
        timer = performance.now() - timer;
        evaluated = err;
        type = new Type(err).toString();
    }

    const splitted = Util.splitMessage(evaluated, { maxLength: 4096 });
    
    const embed = new MessageEmbed()
        .setTitle('Evaluation Result')
        .setDescription(`\`\`\`js\n${clean(splitted[0])}\n\`\`\``)
        .addField('Type', `\`\`\`ts\n${type}\n\`\`\``)
        .addField('Input', `\`\`\`js\n${clean(code.length > 1024 ? `${code.slice(0, 1021)}...` : code)}\n\`\`\``)
        .setFooter(`Took ${timer} ms`);

    if (splitted.length > 1)
        embed.addField('More...', 'The evaluated response was cut because it was longer than 4096 chars!');

    interaction.editReply({ embeds: [embed] })
}
//=====================================| Import the Module |=====================================\

const { ErrorChannel, SuccessChannel } = require(`${process.cwd()}/settings/config.json`);
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { author, version } = require(`${process.cwd()}/package.json`);
const { } = require(`${process.cwd()}/settings/emojis.json`);
const { footertext } = require(`${process.cwd()}/settings/embed.json`);
const { errorCmdLogs1 } = require(`${process.cwd()}/functions/errorCmdLogs.js`);
require('colors');

//=====================================| Code |=====================================\

module.exports = {
    name: 'eval',
    aliases: ['ev', 'e'],
    cooldown: 5,
    category: '👑 Owner',
    ownerOnly: true,
    guildOnly: false,
    nsfwOnly: false,
    botPerms: ['SEND_MESSAGES', 'EMBED_LINKS'],
    userPerms: ['SEND_MESSAGES'],
    descriptions: 'Evaluates code.',
    usage: 'eval <code>',
    type: 'tools',

    async execute(message, args, client, prefix, Discord) {
        try {
            if (!args[0]) return message.reply('Please provided some code to evaluate!').then(m => setTimeout(() => m.delete(), 6000));
            const code = args.join(' ');

            let evaled;
            try {
                evaled = eval(code);
            } catch (err) {
                evaled = err;
            }

            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Evaluation')
                .setDescription(`\`\`\`js\n${evaled}\n\`\`\``)
                .setFooter(`${footertext} • ${version}`, message.client.user.displayAvatarURL())
                .setTimestamp();
            message.channel.send({ embeds: [embed] });

        } catch (error) {
            errorCmdLogs1(client, message, error);
        }
    }
}


/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\                  Bot Coded by GalaXd#9165                   \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */
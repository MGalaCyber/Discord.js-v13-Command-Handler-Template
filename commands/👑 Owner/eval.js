//=====================================| Import the Module |=====================================\\

const { } = require(`${process.cwd()}/settings/config.json`);
const { } = require(`${process.cwd()}/settings/settings.json`);
const { name, author, version } = require(`${process.cwd()}/package.json`);
const { MessageEmbed, MessageAttachment } = require('discord.js');

//=====================================| Code |=====================================\\

module.exports = {
    name: 'eval',
    cooldown: 5,
    category: '👑 Owner',
    ownerOnly: true,
    description: 'Evaluate code',
    botPerms: ['SEND_MESSAGES'],
    aliases: ['ev'],
    usage: '<code>',

    async execute(message, args, client, prefix, Discord) {
        if (!args[0]) return message.reply('Please provide some code to evaluate!').then(m => setTimeout(() => m.delete(), 6000));
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
            .setFooter(`© ${author} - ${name} v${version}`)
        message.channel.send({ embeds: [embed] });
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
//=====================================| Import the Module |=====================================\\

const { } = require(`${process.cwd()}/settings/config.json`);
const { } = require(`${process.cwd()}/settings/settings.json`);
const { MessageEmbed, MessageAttachment } = require('discord.js');

//=====================================| Code |=====================================\\

module.exports = {
    name: 'test', // put the name of the command here
    aliases: ['test'], // put the aliases of the command here
    cooldown: 5, // put the cooldown of the command here
    category: '📔 Example', // put the category of the command here
    ownerOnly: true, // put if the command is owner only here (true/false)
    guildOnly: true, // put if the command is guild only here (true/false)
    nsfwOnly: false, // put if the command is nsfw only here (true/false)
    botPerms: ['SEND_MESSAGES', 'EMBED_LINKS'], // put the bot permissions here
    userPerms: ['SEND_MESSAGES'], // put the user permissions here
    descriptions: 'Test command.', // put the description of the command here
    usage: 'test', // put the usage of the command here

    async execute(message, args, client, prefix, Discord) {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Test command')
            .setDescription('Test command description')
        return message.channel.send({ embeds: [embed] });
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
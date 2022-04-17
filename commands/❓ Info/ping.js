//=====================================| Import the Module |=====================================\\

const { errorCmdLogs1 } = require(`${process.cwd()}/functions/errorCmdLogs.js`);
const { author, version } = require(`${process.cwd()}/package.json`);
const { loadingicon1 } = require(`${process.cwd()}/settings/embed.json`);
const { MessageEmbed } = require('discord.js');
const ms = require('ms');

//=====================================| Code |=====================================\\

module.exports = {
    name: 'ping',
    aliases: ['ping', 'latency'],
    cooldown: 15,
    category: '❓ info',
    ownerOnly: false,
    guildOnly: false,
    nsfwOnly: false,
    botPerms: ['SEND_MESSAGES', 'EMBED_LINKS'],
    userPerms: ['SEND_MESSAGES'],
    descriptions: 'Show the bot\'s ping to the Discord API.',
    usage: 'ping',
    type: 'bot',

    async execute(message, args, client, prefix) {
        try {
            // First
            const msgembed = new MessageEmbed()
            .setAuthor('Pinging...', loadingicon1)
            .setColor('YELLOW');
            const msg = await message.channel.send({embeds: [msgembed]})
            setTimeout(() => {
            // Second
            let embed = new MessageEmbed()
            .setTitle(`Returns Latency And API Ping`)
            .addField('⌛ Websocket Latency', `\`${Math.floor(msg.createdAt - message.createdAt)}ms\``)
            .addField('📡 API Latency', `\`${Math.round(client.ws.ping)}ms\``)
            .setColor("#00FF7F")
            .setFooter(`Requested by: ${message.author.tag} | © ${author} - ${message.client.user.tag} v${version}`, message.author.avatarURL())
            
            message.reply({embeds: [embed], allowedMentions: { repliedUser: false } }).then(m => setTimeout(() => m.delete(), 15000));
            msg.delete();
            }, 1500) 

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
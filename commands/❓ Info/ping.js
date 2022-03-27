//=====================================| Import the Module |=====================================\\

const { MessageEmbed } = require('discord.js');
const { authoricon } = require(`${process.cwd()}/settings/embed.json`);
const ms = require('ms');
const { name, author, version } = require(`${process.cwd()}/package.json`);

//=====================================| Code |=====================================\\

module.exports = {
    name: 'ping',
    cooldown: 5,
    aliases: ['pong', 'latency'],
    description: 'Ping the bot',

    async execute(message, args, client, prefix, Discord) {
        // First
        const msgembed = new MessageEmbed()
        .setAuthor('Pinging...', authoricon)
        .setColor('YELLOW');
        const msg = await message.channel.send({embeds: [msgembed]})
        setTimeout(() => {
        // Second
        let embed = new MessageEmbed()
        .setTitle(`Returns Latency And API Ping`)
        .addField('⌛ Websocket Latency', `\`${Math.floor(msg.createdAt - message.createdAt)}ms\``)
        .addField('📡 API Latency', `\`${Math.round(client.ws.ping)}ms\``)
        .setColor("GREEN")
        .setFooter(`Requested by: ${message.author.tag} | © ${author} - ${name} v${version}`, message.author.avatarURL())
        
        message.reply({embeds: [embed], allowedMentions: { repliedUser: false } }).then(m => setTimeout(() => m.delete(), 15000));
        msg.delete();
        }, 1500) 
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
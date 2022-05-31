//=====================================| Import the Module |=====================================\\

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js');
const { author, version } = require(`${process.cwd()}/package.json`);
const Settings = require(`${process.cwd()}/Settings/settings.json`);
const Config = require(`${process.cwd()}/Settings/config.json`);
const Emoji = require(`${process.cwd()}/Settings/emojis.json`);
const Embed = require(`${process.cwd()}/Settings/embed.json`);
const Discord = require('discord.js');
require('dotenv').config();
require('colors');
require('ms');

//=====================================| Code |=====================================\\

module.exports = async (client) => {
    console.table({
        'Name': client.user.tag,
        'Author': `${author}`,
        'Version': `v${version}`,
        'Status': `${client.user.presence.status}`,
        'Prefix': Config.SETTINGS.PREFIX,
        'Discord.js': `v${Discord.version}`,
        'Node.js': `${process.version}`,
        'Guilds': client.guilds.cache.size,
        'Users': client.users.cache.size,
        'Channels': client.channels.cache.size,
        'Message Commands': client.commands.size,
        'Slash Commands': client.slashCommands.size,
        'Memory Usage': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
        'CPU Usage': `${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%`,
        'Platform': process.platform,
        'Arch': process.arch,
    });
    
    console.log(`[READY] `.bold.green + `${client.user.tag} is online!`.yellow);

    //======================< Activity >======================\
    setInterval(async () => {
      // Animated Status Presence
        const activities = [
            `${Config.SETTINGS.PREFIX}help | /help`,
            `${Config.SETTINGS.PREFIX}help | /help`,
        ];

      client.user.setActivity(activities[Math.floor(Math.random() * activities.length)], {
        type: "LISTENING", // PLAYING, STREAMING, LISTENING, WATCHING
        url: "https://www.twitch.tv/"
    });
    }, 30000);

};




/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\               Handlers Coded by GalaXd#9165                 \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */
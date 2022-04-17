//=====================================| Import the Module |=====================================\\

const { author, version } = require(`${process.cwd()}/package.json`);
const { PREFIX } = require(`${process.cwd()}/settings/config.json`);
const Discord = require('discord.js');
require('dotenv').config();
const ms = require('ms');
require('colors');

//=====================================| Code |=====================================\\

module.exports = async (client) => {
    console.table({
        'Name': client.user.tag,
        'Author': `${author}`,
        'Version': `v${version}`,
        'Status': `${client.user.presence.status}`,
        'Prefix': PREFIX,
        'Discord.js': `v${Discord.version}`,
        'Node.js': `${process.version}`,
        'Guilds': client.guilds.cache.size,
        'Users': client.users.cache.size,
        'Channels': client.channels.cache.size,
        'Normal Commands': client.commands.size,
        'Slash Commands': client.slashCommands.size,
        'Memory Usage': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
        'CPU Usage': `${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%`,
        'Platform': process.platform,
        'Arch': process.arch,
      })
        console.log(`[READY] `.bold.green + `${client.user.tag} is online!`.yellow);

    // Animated Status Presence
    const activities = [
        `${PREFIX}help | /help => ${client.guilds.cache.size} Guilds`,
        `${PREFIX}help | /help => ${client.users.cache.size} Users`,
        `${PREFIX}help | /help => ${client.channels.cache.size} Channels`,
        `${PREFIX}help | Invite me Now!`
    ];
    setInterval(() => {
      let activity = activities[Math.floor(Math.random() * activities.length)];
      client.user.setActivity(activity, {
        type: "LISTENING", // PLAYING, STREAMING, LISTENING, WATCHING
        url: "https://www.twitch.tv/"
      });
    }, 30000);
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
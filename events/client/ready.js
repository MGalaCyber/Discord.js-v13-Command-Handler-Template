//=====================================| Import the Module |=====================================\\

const client = require(`${process.cwd()}/index`).client;
const Discord = require('discord.js');
const colors = require('colors');
const dotenv = require('dotenv').config();
const ms = require('ms');
const { PREFIX } = require(`${process.cwd()}/settings/config.json`);
const { author, version } = require(`${process.cwd()}/package.json`);

//=====================================| Code |=====================================\\

module.exports = {
    name: 'ready',
    once: true,
    
    async execute(client, Discord) {
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
        'Commands': client.commands.size,
        'slashCommands': client.slashCommands.size,
        'ping': ms(client.uptime),
        'Memory Usage': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
        'Platform': process.platform,
        'Arch': process.arch,
      })
        console.log(`[READY] `.bold.green + `${client.user.tag} is online!`.yellow);

    // Animated Status Presence
    const activities = [
        `${PREFIX}help | ${client.guilds.cache.size} Guilds`,
        `${PREFIX}help | ${client.users.cache.size} Users`,
        `${PREFIX}help | Invite me Now!`
    ];
    setInterval(() => {
      let activity = activities[Math.floor(Math.random() * activities.length)];
      client.user.setActivity(activity, {
        type: "LISTENING", // PLAYING, STREAMING, LISTENING, WATCHING
        url: "https://www.twitch.tv/"
      });
    }, 5000);
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
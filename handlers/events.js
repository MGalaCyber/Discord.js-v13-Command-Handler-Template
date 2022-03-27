//=====================================| Import the Module |=====================================\\

const client = require(`${process.cwd()}/index`).client;
const Discord = require('discord.js');
const fs = require('fs');

//=====================================| Code |=====================================\\

module.exports = (client, Discord) => {
    const eventFolders = fs.readdirSync(`${process.cwd()}/events`);
    for (const folder of eventFolders) {
        const eventFiles = fs.readdirSync(`${process.cwd()}/events/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of eventFiles) {
            const event = require(`${process.cwd()}/events/${folder}/${file}`);
            if (event.once) {
                client.once(event.name, async (...args) => await event.execute(client, Discord, ...args));
            } else {
                client.on(event.name, async (...args) => await event.execute(...args, client, Discord));
            };
        };
        console.log(`[EVENT] `.bold.green + `[${eventFiles.length}] `.cyan + `in `.yellow + `${folder} `.magenta + `was loaded!`.yellow);
    };
};


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
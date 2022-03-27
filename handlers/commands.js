//=====================================| Import the Module |=====================================\\

const client = require(`${process.cwd()}/index`).client;
const colors = require('colors');
const fs = require('fs');

//=====================================| Code |=====================================\\

module.exports = (client, Discord) => {
    const commandFolders = fs.readdirSync(`${process.cwd()}/commands`);
    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`${process.cwd()}/commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/commands/${folder}/${file}`);
            client.commands.set(command.name, command);
        }
        console.log(`[COMMANDS] `.bold.green + `[${commandFiles.length}] `.cyan + `in `.yellow + `${folder} `.magenta + `was loaded!`.yellow);
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
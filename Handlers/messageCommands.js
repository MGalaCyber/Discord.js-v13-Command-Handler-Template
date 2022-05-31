//=====================================| Import the Module |=====================================\\

const { readdirSync, read } = require('fs');
require('colors')

// ========================================| Code |======================================= \\

module.exports = async (client) => {
    const commandFolders = readdirSync(`${process.cwd()}/MessageCommands`);
    for (const folder of commandFolders) {
        const commandFiles = readdirSync(`${process.cwd()}/MessageCommands/${folder}/`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/MessageCommands/${folder}/${file}`);
            client.commands.set(command.name, command);
        }
        console.log(`[MESSAGE COMMANDS] `.bold.green + `[${commandFiles.length}] `.cyan + `in `.yellow + `${folder} `.magenta + `was loaded!`.yellow);
    };
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
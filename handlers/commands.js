//=====================================| Import the Module |=====================================\\

const colors = require('colors');
const { readdirSync } = require('fs');

// ========================================| Anti Crash System Script |======================================= \\

module.exports = async (client) => {
    const commandFolders = readdirSync(`${process.cwd()}/commands`);
    for (const folder of commandFolders) {
        const commandFiles = readdirSync(`${process.cwd()}/commands/${folder}/`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/commands/${folder}/${file}`);
            client.commands.set(command.name, command);
        }
        console.log(`[NORMAL COMMANDS] `.bold.green + `[${commandFiles.length}] `.cyan + `in `.yellow + `${folder} `.magenta + `was loaded!`.yellow);
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
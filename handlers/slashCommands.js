//=====================================| Import the Module |=====================================\\

const colors = require('colors');
const { readdirSync } = require('fs');

// ========================================| Anti Crash System Script |======================================= \\

module.exports = async (client) => {
    const slashCommandsArray = [];
    readdirSync(`${process.cwd()}/slashCommands/`)
    .forEach((dir) => {
        readdirSync(`${process.cwd()}/slashCommands/${dir}/`)
        .filter((file) => file.endsWith('.js'))
        .forEach((file) => {
            let pull = require(`${process.cwd()}/slashCommands/${dir}/${file}`);
            client.slashCommands.set(pull.name, pull);
            slashCommandsArray.push(pull);
        })
        console.log(`[SLASH COMMANDS] `.bold.green + `[${slashCommandsArray.length}] `.cyan + `in `.yellow + `${dir} `.magenta + `was loaded!`.yellow);
    })

    client.on('ready', async () => {
        if (client.deploySlash.enabled) {
            if (client.deploySlash.guild) {
                client.guilds.cache.get(client.deploySlash.guild).commands.set(slashCommandsArray);
            } else {
                client.application.commands.set(slashCommandsArray);
            }
        }
    })
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
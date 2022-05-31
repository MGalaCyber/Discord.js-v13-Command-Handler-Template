//=====================================| Import the Module |=====================================\\

const { readdirSync } = require('fs');
require('colors');

// ========================================| Code |======================================= \\

module.exports = async (client) => {
    const load_dir = (dir) => {
        const eventsFolders = readdirSync(`${process.cwd()}/Events/${dir}`).filter(d => d.endsWith('.js'));
        for (const file of eventsFolders) {
            const pull = require(`${process.cwd()}/Events/${dir}/${file}`);
            const eventName = file.split('.')[0];
            client.on(eventName, pull.bind(null, client));
        };
        console.log(`[EVENTS] `.bold.green + `[${eventsFolders.length}] `.cyan + `in `.yellow + `${dir} `.magenta + `was loaded!`.yellow);
    };
    ['Client', 'Interaction', 'Message'].forEach(e => load_dir(e));
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
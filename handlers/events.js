//=====================================| Import the Module |=====================================\\

const colors = require('colors');
const { readdirSync } = require('fs');

// ========================================| Anti Crash System Script |======================================= \\

module.exports = async (client) => {
    const load_dir = (dir) => {
        const events = readdirSync(`${process.cwd()}/events/${dir}`).filter(d => d.endsWith('.js'));
        for (const file of events) {
            const pull = require(`${process.cwd()}/events/${dir}/${file}`);
            const eventName = file.split('.')[0];
            client.on(eventName, pull.bind(null, client));
        }
        console.log(`[EVENTS] `.bold.green + `[${events.length}] `.cyan + `in `.yellow + `${dir} `.magenta + `was loaded!`.yellow);
    }
    ['client', 'message'].forEach(e => load_dir(e));
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
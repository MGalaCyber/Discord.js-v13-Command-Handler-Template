//=====================================| Import the Module |=====================================\\

const colors = require('colors');

//=====================================| Code |=====================================\\

module.exports = {
    name: 'shardReconnecting',
    once: true,

    async execute(client, Discord, id) {
        console.log(`[SHARD RECONNECTING] `.bold.red + `${id}`.yellow);
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
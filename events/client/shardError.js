//=====================================| Import the Module |=====================================\\

const colors = require('colors');

//=====================================| Code |=====================================\\

module.exports = {
    name: 'shardError',
    once: true,

    async execute(client, Discord, error, id) {
        console.log(`[SHARD ID ERROR] `.bold.red + `${id}`.yellow);
        console.log(`[SHARD ERROR] `.bold.red + `${error}`.yellow);
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
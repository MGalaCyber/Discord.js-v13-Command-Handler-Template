//=====================================| Import the Module |=====================================\\

const colors = require('colors');

//=====================================| Code |=====================================\\

module.exports = {
    name: 'shardResume',
    once: true,

    async execute(client, Discord, id, replayedEvents) {
        console.log(`[SHARD ID RESUME] `.bold.green + `${id}`.yellow);
        console.log(`[SHARD RESUME] `.bold.green + `${replayedEvents}`.yellow);
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
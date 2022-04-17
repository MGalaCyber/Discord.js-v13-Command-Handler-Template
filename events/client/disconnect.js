//=====================================| Import the Module |=====================================\

const colors = require('colors');

//=====================================| Code |=====================================\

module.exports = async (client) => {
    console.log(`[DISCONNECT] `.bold.red + `${client.user.tag}`.cyan + `has been disconnected from the Discord API.`.yellow);
    client.destroy();
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
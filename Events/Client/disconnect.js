//=====================================| Import the Module |=====================================\

require('colors');

//=====================================| Code |=====================================\

module.exports = async (client) => {
    console.log(`[DISCONNECT] `.bold.red + `${client.user.tag}`.cyan + `has been disconnected from the Discord API.`.yellow);
    client.destroy();
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
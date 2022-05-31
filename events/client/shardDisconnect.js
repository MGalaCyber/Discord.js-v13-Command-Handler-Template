//=====================================| Import the Module |=====================================\

require('colors');

//=====================================| Code |=====================================\

module.exports = async (client, event, id) => {
    console.log(`[SHARD ID DISCONNECT] `.bold.red + `${id}`.yellow);
    console.log(`[SHARD EVENT DISCONNECT] `.bold.red + `${event}`.yellow);
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
//=====================================| Import the Module |=====================================\

const colors = require('colors');

//=====================================| Code |=====================================\

module.exports = async (client, error) => {
    console.log(`[ERROR] `.bold.red `${error.message}`.yellow);
    console.log(`[ERROR] `.bold.red + `${error.stack}`.yellow);
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
//=====================================| Import the Module |=====================================\\

const colors = require('colors');

// ========================================| Anti Crash System Script |======================================= \\

module.exports = async (client) => {

process.on('unhandledRejection', (err, reason, p) => {
    console.log(`[UNHANDLED REJECTION] `.bold.red + `at: Promise:`.purple, p, 'reason:'.purple, reason);
    console.log(err, p)
  })
process.on('uncaughtException', (err, origin) => {
  console.log(`[UNCAUGHT EXCEPTION] `.bold.red, err, origin);
  console.log(err, origin)
  })
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(`[UNCAUGHT EXCEPTION MONITOR] `.bold.red, err, origin);
  console.log(err, origin)
  })
process.on('multipleResolves', (type, promise, reason) => {
  console.log(`[MULTIPLE RESOLVES] `.bold.red, type, promise, reason);
  console.log(type, promise, reason)
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
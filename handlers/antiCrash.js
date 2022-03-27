//=====================================| Import the Module |=====================================\\

const client = require(`${process.cwd()}/index`).client

// ========================================| Anti Crash System Script |======================================= \\

module.exports = (client, Discord) => {

process.on('unhandledRejection', (err, reason, p) => {
    console.log('Unhandled Rejection at: Promise:', p, 'reason:', reason);
    console.log(err, p)
  })
  process.on('uncaughtException', (err, origin) => {
    console.log('Uncaught Exception:', err, origin);
    console.log(err, origin)
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('Uncaught Exception:', err, origin);
    console.log(err, origin)
  })
  process.on('multipleResolves', (type, promise, reason) => {
    console.log('Multiple Resolves:', type, promise, reason);
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
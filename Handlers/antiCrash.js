//=====================================| Import the Module |=====================================\\

require('colors');

// ========================================| Code |======================================= \\

module.exports = async (client) => {

    process.on('multipleResolves', (type, promise, reason) => {
        console.log(`[MULTIPLE RESOLVES] `.bold.red);
        console.log(type, promise, reason)
    })

    process.on('unhandledRejection', (reason, promise) => {
        console.log(`[UNHANDLED REJECTION] `.bold.red);
        console.log(reason, promise)
    })

    process.on('uncaughtException', (err, origin) => {
        console.log(`[UNCAUGHT EXCEPTION] `.bold.red);
        console.log(err, origin)
    })

    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(`[UNCAUGHT EXCEPTION MONITOR] `.bold.red);
        console.log(err, origin)
    })

    process.on('warning', (warning) => {
        console.log(`[WARNING] `.bold.red + `${warning}`.yellow);
    })

    // process.on('message', (message) => {
    //     console.log(`[MESSAGE] `.bold.red + `${message}`.yellow);
    // })

}




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
//=====================================| Import the Module |=====================================\

require('discord.js');

//=====================================| Code |=====================================\

function clientSettingsObject() {
    return {
        shards: 'auto',
        allowedMentions: {
            parse: ['roles', 'users', 'everyone'],
            repliedUser: false,
        },
        failIfNotExists: false,
        partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
        intents: 32767,
        messageCacheMaxSize: 50,
        messageCacheLifetime: 60,
        messageSweepInterval: 60,
    };
};

module.exports = clientSettingsObject;




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
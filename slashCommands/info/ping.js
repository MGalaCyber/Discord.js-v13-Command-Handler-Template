//=====================================| Import the Module |=====================================\

const { errorCmdLogs2 } = require(`${process.cwd()}/functions/errorCmdLogs.js`);

//=====================================| Code |=====================================\

module.exports = {
    name: 'ping',
    description: 'Show the bot/s ping to the Discord API.',

    run: async (client, interaction, args, prefix) => {
        try {
            interaction.reply({
                content: `Pong! ${client.ws.ping}ms`,
                ephemeral: true
            }).catch(() => null);

        } catch (error) {
            errorCmdLogs2(client, interaction, error);
        }
    },
};


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
//=====================================| Import the Module |=====================================\

const { errorCmdLogs2 } = require(`${process.cwd()}/functions/errorCmdLogs.js`);
const { Client, Interaction } = require('discord.js');

/**
 * 
 * @param {Client} client 
 * @param {Interaction} interaction 
 */

//=====================================| Code |=====================================\

module.exports = async (client, interaction) => {
    try {
        if (interaction.isCommand()) {
            const cmd = client.slashCommands.get(interaction.commandName);
            if (!cmd) return interaction.reply({ content: '❌ An error occured.' }).catch(() => null);
    
            const args = [];
    
            for (let option of interaction.options.data) {
                if (option.type === 'SUB_COMMAND') {
                    if (option.name) args.push(option.name);
                    option.options?.forEach((x) => {
                        if (x.value) args.push(x.value);
                    });
                } else if (option.value) args.push(option.value);
            }
            interaction.member = interaction.guild.members.cache.get(interaction.user.id) || await interaction.guild.members.fetch(interaction.user.id).catch(() => null);
    
            cmd.run(client, interaction, args, '/');
        }

    } catch (error) {
        errorCmdLogs2(client, interaction, error);
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
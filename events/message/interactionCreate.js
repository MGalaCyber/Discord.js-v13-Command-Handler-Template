//=====================================| Import the Module |=====================================\\

const { PREFIX } = require(`${process.cwd()}/settings/config.json`);
const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

const prefix = PREFIX;

//=====================================| Code |=====================================\\

module.exports = {
    name: 'interactionCreate',

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    async execute(interaction, client) {
    // Slash Command Handling
        if (interaction.isCommand()) {
            const command = client.slashCommands.get(interaction.commandName);
            if (!command) return interaction.followUp(`Command ${interaction.commandName} not found.`) && client.slashCommands.delete(interaction.commandName);

            const args = [];
            
            for (let option of interaction.options.data) {
                if (option.type === "SUB_COMMAND") {
                    if (option.name) args.push(option.name);
                    option.options?.forEach((x) => {
                        if (x.value) args.push(x.value);
                    });
                } else if (option.value) args.push(option.value);
            }
            interaction.member = interaction.guild.members.cache.get(interaction.user.id);
    
            if (!interaction.member.permissions.has(command.userPerms || [])) return interaction.followUp({ content: "You do not have permission to use this command" });

            command.execute(client, interaction, args, prefix);
        }    

    // Context Menu Handling (comming soon for working)
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.execute(client, interaction, prefix);
    }        
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
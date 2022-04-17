//=====================================| Import the Module |=====================================\\

const { 
    PREFIX, ErrorChannel,
    DISCORD_SUPPORT, OAUTHO2_INVITE, WEBSITE,
    OWNER, CO_OWNER, TEAM_1, TEAM_2, TEAM_3,
    Guild_ID_1, Guild_ID_2, Guild_Test_1, Guild_Test_2
} = require(`${process.cwd()}/settings/config.json`);
// =======================================================
const { Client, Message, MessageEmbed, Collection, MessageActionRow, MessageButton } = require('discord.js');
const { footertext, wrongcolor } = require(`${process.cwd()}/settings/embed.json`);
// const guildSchema = require(`${process.cwd()}/databases/models/guild-schema`);
// const userSchema = require(`${process.cwd()}/databases/models/user-schema`);
const { errorCmdLogs1 } = require(`${process.cwd()}/functions/errorCmdLogs.js`);
const onCoolDown = require(`${process.cwd()}/functions/onCoolDown.js`);
const { author, version } = require(`${process.cwd()}/package.json`);
const Discord = require('discord.js');
// =======================================================
const prefix = PREFIX;

//=====================================| Code |=====================================\\

module.exports = async (client, message, Discord) => {
    try {
        //=====================================| Command Handling |=====================================\\
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
            || client.commands.find(cmd => cmd.cooldowns && cmd.cooldowns.includes(commandName))
            || client.commands.find(cmd => cmd.category && cmd.category.includes(commandName))
            || client.commands.find(cmd => cmd.descriptions && cmd.descriptions.includes(commandName))
            || client.commands.find(cmd => cmd.usage && cmd.usage.includes(commandName))
        ;
        
        // ====================< If the command doesn't exist, return >=================== \\
        if (!command) return message.reply({
            embeds: [new MessageEmbed()
                .setColor(wrongcolor)
                .setTitle(`${message.author.username} You have entered an invalid command!`)
                .setDescription(`The command \`${commandName}\` does not exist.\nPlease use \`${prefix}help\` to see all the commands.`)
                .setFooter(`${footertext} • ${version}`, message.client.user.displayAvatarURL())
            ]
        }).then(m => setTimeout(() => m.delete(), 6000));
        
        // ========================================| Other list Handler |======================================= \\
        
        // ====================< Owners only Check >=================== \\
        const staff = OWNER.concat(CO_OWNER, TEAM_1, TEAM_2, TEAM_3);
        if (command.ownerOnly && !staff.includes(message.author.id)) return;
        
        // ==================== Official/Private Guilds only Check =================== \\
        const private = Guild_ID_1.concat(Guild_ID_2, Guild_Test_1, Guild_Test_2);
        if (command.guildOnly && !private.includes(message.guild.id))
            return message.reply({
                embeds: [new MessageEmbed()
                    .setColor(wrongcolor)
                    .setTitle(`${message.author.username} You have entered an invalid command!`)
                    .setDescription(`The command \`${commandName}\` can only be used in the official server.`)
                    .setFooter(`${footertext} • ${version}`, message.client.user.displayAvatarURL())
                ]
            }).then(m => setTimeout(() => m.delete(), 6000));
        
        // ====================< NSFW only Check >=================== \\
        if (command.nsfwOnly && !message.channel.nsfw) return message.reply({
            embeds: [new MessageEmbed()
                .setColor(wrongcolor)
                .setTitle(`${message.author.username} This command only works in NSFW channels!`)
                .setDescription(`Please go to the NSFW channel to use this command!`)
                .setFooter(`${footertext} • ${version}`, message.client.user.displayAvatarURL())
            ]
        }).then(m => setTimeout(() => m.delete(), 6000))
        
        // ====================< Bots Permissions Check >=================== \\
        if (command.botPerms && !message.channel.permissionsFor(client.user).has(command.botPerms))
            return message.reply({
                embeds: [new MessageEmbed()
                    .setColor(wrongcolor)
                    .setTitle('I do not have the required permissions to execute this command!')
                    .setDescription(`I need the following permissions: \`${command.botPerms}\``)
                    .setFooter(`${footertext} • ${version}`, message.client.user.displayAvatarURL())
                ]
            }).then(m => setTimeout(() => m.delete(), 6000));
        
        // ====================< Users Permissions Check >=================== \\
        let userPerms = message.channel.permissionsFor(message.author);
        if (command.userPerms && !userPerms.has(command.userPerms))
            return message.reply({
                embeds: [new MessageEmbed()
                    .setColor(wrongcolor)
                    .setTitle(`${message.author.username} You do not have the required permissions to execute this command!`)
                    .setDescription(`You need the following permissions: \`${command.userPerms}\``)
                    .setFooter(`${footertext} • ${version}`, message.client.user.displayAvatarURL())
                ]
            }).then(m => setTimeout(() => m.delete(), 6000));
            
        // ====================< Cooldown Check >=================== \\
        if (onCoolDown(message, command)) {
            return await message.reply({
                embeds: [new MessageEmbed()
                    .setColor(wrongcolor)
                    .setTitle(`${message.author.username} You have been cooldown for ${command.cooldown} seconds!`)
                    .setDescription(`Please wait \`${onCoolDown(message, command).toFixed(1)}\` Before using the \`${command.name}\` command again!`)
                    .setFooter(`${footertext} • ${version}`, message.client.user.displayAvatarURL())
                ]
            }).then(m => setTimeout(() => m.delete(), 6000));
        }
        
        // ====================< Start Command >=================== \\
        try {
            command.execute(message, args, client, prefix);
        } catch (error) {
            console.error(error);
            message.reply({
                embeds: [new MessageEmbed()
                    .setColor(wrongcolor)
                    .setTitle(`${message.author.username} There was an error trying to execute that command!`)
                    .setDescription(`There was an error trying to execute that command.`)
                    .addField('Error', `\`\`\`${error}\`\`\``)
                    .setFooter(`${footertext} • ${version}`, message.client.user.displayAvatarURL())
                ]
            })
        }

    // ====================< Error Logs >=================== \\
    } catch (error) {
        errorCmdLogs1(client, message, error);
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
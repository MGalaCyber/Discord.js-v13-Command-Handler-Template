//=====================================| Import the Module |=====================================\\

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment, Discord } = require('discord.js');
const { errorCmdLogs1 } = require(`${process.cwd()}/Functions/errorCmdLogs.js`);
const { onCoolDown1 } = require(`${process.cwd()}/Functions/onCoolDown.js`);
const { author, version } = require(`${process.cwd()}/package.json`);
const Settings = require(`${process.cwd()}/Settings/settings.json`);
const Config = require(`${process.cwd()}/Settings/config.json`);
const Emoji = require(`${process.cwd()}/Settings/emojis.json`);
const Embed = require(`${process.cwd()}/Settings/embed.json`);
// =======================================================
const prefix = Config.SETTINGS.PREFIX;

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
        if (!command) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} ${message.author.username} You have entered an invalid command!`)
                        .setDescription(`The command \`${commandName}\` does not exist.\nPlease use \`${prefix}help\` to see all the commands.`)
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                ]
            }).then(m => setTimeout(() => m.delete(), 6000));
        }

        // ====================< Mention Prefix >=================== \\
        if (message.content.startsWith(`<@${client.user.id}>`)) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.successsolor)
                        .setTitle(`${Emoji.Message.SUCCESS} ${message.author.username} I am here!`)
                        .setDescription(`You can use \`${prefix}help\` to see all the message commands. or, you can use \`/help\` to see all the slash commands.`)
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                ]
            }).then(m => setTimeout(() => m.delete(), 6000));
        }

        // ========================================| Other list Handler |======================================= \\
        
        // ====================< Owners only Check >=================== \\
        const staff = Config.DEVELOPER.OWNER.concat(
                Config.DEVELOPER.CO_OWNER
            );
        if (command.ownerOnly && !staff.includes(message.author.id)) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} ${message.author.username} You have entered an invalid command!`)
                        .setDescription(`The command \`${commandName}\` does not exist.\nPlease use \`${prefix}help\` to see all the commands.`)
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            }

        // ==================== Official/Private Guilds only Check =================== \\
        const private = Config.SERVER_ID.OFFICIAL.Guild_ID_1.concat(
                Config.SERVER_ID.OFFICIAL.Guild_ID_2,
                Config.SERVER_ID.TEST.Guild_ID_1,
                Config.SERVER_ID.TEST.Guild_ID_2
            );
        if (command.guildOnly && !private.includes(message.guild.id)) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} ${message.author.username} You have entered an invalid command!`)
                        .setDescription(`The command \`${commandName}\` can only be used in the official server.`)
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            }

        // ====================< NSFW only Check >=================== \\
        if (command.nsfwOnly && !message.channel.nsfw) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} ${message.author.username} This command only works in NSFW channels!`)
                        .setDescription(`Please go to the NSFW channel to use this command!`)
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            }

        // ====================< Bots Permissions Check >=================== \\
        if (command.botPerms && !message.channel.permissionsFor(client.user).has(command.botPerms)) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} I do not have the required permissions to execute this command!`)
                        .setDescription(`I need the following permissions: \`${command.botPerms}\``)
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            }

        // ====================< Users Permissions Check >=================== \\
        let userPerms = message.channel.permissionsFor(message.author);
        if (command.userPerms && !userPerms.has(command.userPerms)) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} ${message.author.username} You do not have the required permissions to execute this command!`)
                        .setDescription(`You need the following permissions: \`${command.userPerms}\``)
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            }

        // ====================< Cooldown Check >=================== \\
        if (onCoolDown1(message, command)) {
            return await message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} ${message.author.username}, You have been cooldown for \`${command.cooldown}\` seconds!`)
                        .setDescription(`Please wait \`${onCoolDown1(message, command).toFixed(1)}\` Before using the \`${command.name}\` command again!`)
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                    ]
                }).then(m => setTimeout(() => m.delete(), onCoolDown1(message, command) * 1000));
            }
        
        // ====================< Start Command >=================== \\
        try {
            command.execute(message, args, client, prefix);
        } catch (error) {
            console.error(error);
            message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.wrongcolor)
                        .setTitle(`${Emoji.Message.ERROR} ${message.author.username} There was an error trying to execute that command!`)
                        .setDescription(`There was an error trying to execute that command.`)
                        .addField('Error', `\`\`\`${error}\`\`\``)
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            }

    // ====================< Error Logs >=================== \\
    } catch (error) {
        errorCmdLogs1(client, message, error);
    }
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
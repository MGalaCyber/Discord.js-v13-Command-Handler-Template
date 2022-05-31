//=====================================| Import the Module |=====================================\

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment, InteractionCreate } = require('discord.js');
const { errorCmdLogs2 } = require(`${process.cwd()}/Functions/errorCmdLogs.js`);
const { onCoolDown2 } = require(`${process.cwd()}/Functions/onCoolDown.js`);
const { author, version } = require(`${process.cwd()}/package.json`);
const Settings = require(`${process.cwd()}/Settings/settings.json`);
const Config = require(`${process.cwd()}/Settings/config.json`);
const Emoji = require(`${process.cwd()}/Settings/emojis.json`);
const Embed = require(`${process.cwd()}/Settings/embed.json`);

/**
 * 
 * @param {Client} client 
 * @param {InteractionCreate} interaction 
 */

//=====================================| Code |=====================================\

module.exports = async (client, interaction) => {
    try {
        //=====================================| Command Handling |=====================================\\
        if (interaction.isCommand()) {
            const command = client.slashCommands.get(interaction.commandName);
            if (!command) return interaction.reply({
                ephemeral: true,
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.wrongcolor)
                        .setDescription(`${Emoji.Message.ERROR} The command \`${interaction.commandName}\` doesn't exist!`)
                        .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                ]
            }).catch(() => null);
    
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

        // ========================================| Other list Handler |======================================= \\

        // ====================< NSFW only Check >=================== \\
            if (command.nsfwOnly && !interaction.channel.nsfw) {
                return interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new MessageEmbed()
                            .setColor(Embed.wrongcolor)
                            .setDescription(`${Emoji.Message.ERROR} This command can only be used in NSFW channels!`)
                            .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                    ]
                })
            }

        // ====================< Bots Permissions Check >=================== \\
            if (command.botPerms && !interaction.member.permissions.has(command.botPerms)) {
                return interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new MessageEmbed()
                            .setColor(Embed.wrongcolor)
                            .setDescription(`${Emoji.Message.ERROR} I don't have the required permissions to use this command\n \`${command.botPerms.join(`, `)}\``)
                            .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                    ]
                })
            }

        // ====================< Members Permissions Check >=================== \\
            if (command.userPerms && !interaction.member.permissions.has(command.userPerms)) {
                return interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new MessageEmbed()
                            .setColor(Embed.wrongcolor)
                            .setDescription(`${Emoji.Message.ERROR} You don't have the required permissions to use this command\n \`${command.userPerms.join(`, `)}\``)
                            .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                    ]
                })
            }

        // ====================< Cooldown Check >=================== \\
            if (command.cooldown && onCoolDown2(interaction, command)) {
                return interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new MessageEmbed()
                            .setColor(Embed.wrongcolor)
                            .setTitle(`${Emoji.Message.ERROR} You have been cooldown for \`${command.cooldown}\` seconds!`)
                            .setDescription(`Please wait \`${onCoolDown2(interaction, command).toFixed(1)}\` Before using the \`${command.name}\` command again!`)
                            .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                    ]
                })
            }

        // ====================< Start Command >=================== \\
            try {
                command.run(client, interaction, args, '/');
            } catch (error) {
                console.log(error);
                return interaction.reply({
                    ephemeral: true,
                    embeds: [
                        new MessageEmbed()
                            .setColor(Embed.wrongcolor)
                            .setDescription(`${Emoji.Message.ERROR} There was an error trying to execute that command!`)
                            .setDescription(`There was an error trying to execute that command.`)
                            .addField('Error', `\`\`\`${error}\`\`\``)
                            .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                    ]
                })
            }
        }

    } catch (error) {
        errorCmdLogs2(client, interaction, error);
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
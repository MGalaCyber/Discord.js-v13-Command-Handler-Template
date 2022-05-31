//=====================================| Import the Module |=====================================\

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js');
const { errorCmdLogs2 } = require(`${process.cwd()}/Functions/errorCmdLogs.js`);
const { author, version } = require(`${process.cwd()}/package.json`);
const Settings = require(`${process.cwd()}/Settings/settings.json`);
const Config = require(`${process.cwd()}/Settings/config.json`);
const Emoji = require(`${process.cwd()}/Settings/emojis.json`);
const Embed = require(`${process.cwd()}/Settings/embed.json`);
require('ms');

//=====================================| Code |=====================================\

module.exports = {
    name: 'ping',
    cooldown: 15,
    category: 'Info',
    nsfwOnly: false,
    botPerms: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'USE_APPLICATION_COMMAND', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS'],
    userPerms: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_APPLICATION_COMMAND'],
    description: '🏓 Show the bot\'s Latency to the Discord API.',

    run: async (client, interaction, args, prefix) => {
        try {
                // Function Uptime
                    let days = Math.floor(client.uptime / 86400000)
                    let hours = Math.floor(client.uptime / 3600000) % 24
                    let minutes = Math.floor(client.uptime / 60000) % 60
                    let seconds = Math.floor(client.uptime / 1000) % 60

                // Latency Check
                    let webLatency = new Date() - interaction.createdAt
                    let apiLatency = client.ws.ping
                    let totalLatency = webLatency + apiLatency

                // Emoji
                    let emLatency = {
                        Green: '🟢',
                        Yellow: '🟡',
                        Red: '🔴'
                    }

            return interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(totalLatency < 200 ? Embed.successcolor : totalLatency < 500 ? Embed.stanbycolor : Embed.wrongcolor)
                        .setTitle(`Returns Latency And API Ping`)
                        .setFields([
                            {
                                name: `📡 Websocket Latency`,
                                value: `\`${webLatency <= 200 ? emLatency.Green : webLatency <= 400 ? emLatency.Yellow : emLatency.Red}\` \`${webLatency}\`ms`,
                                inline: true
                            },
                            {
                                name: `🛰 API Latency`,
                                value: `\`${apiLatency <= 200 ? emLatency.Green : apiLatency <= 400 ? emLatency.Yellow : emLatency.Red}\` \`${apiLatency}\`ms`,
                                inline: true
                            },
                            {
                                name: `⏲ Uptime`,
                                value: `\`${days}Days\` : \`${hours}Hrs\` : \`${minutes}Mins\` : \`${seconds}Secs\``,
                                inline: true
                            }
                        ])
                        .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                ],
                ephemeral: true
            })

        } catch (error) {
            errorCmdLogs2(client, interaction, error);
        }
    },
};




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
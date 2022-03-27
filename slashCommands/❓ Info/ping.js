const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const { authoricon } = require(`${process.cwd()}/settings/embed.json`);
const { name, author, version } = require(`${process.cwd()}/package.json`);

module.exports = {
    name: 'ping',
    description: 'Get the ping of the bot.',
    // userPerms: ['ADMINISTRATOR'],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    async execute(client, interaction, args) {
        // First
        const embed1 = new MessageEmbed()
            .setColor('YELLOW')
            .setAuthor('Pinging...', authoricon)
        const msg1 = await interaction.reply({ embeds: [embed1] })
        setTimeout(() => {
        // Second
        const embed2 = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Returns Latency And API Ping`)
            // .addField(`⌛ Websocket Latency`, `${msg1.createdTimestamp - interaction.message.createdTimestamp}ms`, false)
            .addField(`📡 API Latency`, `${Math.round(client.ws.ping)}ms`, false)
            .setFooter(`© ${author} - ${name} v${version}`)
        interaction.editReply({ embeds: [embed2] });
        }, 1500);
    }
}
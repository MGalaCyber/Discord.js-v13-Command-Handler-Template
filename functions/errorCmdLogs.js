//=====================================| Code |=====================================\

const { ErrorChannel } = require(`${process.cwd()}/settings/config.json`);
const { footertext, wrongcolor } = require(`${process.cwd()}/settings/embed.json`);
const { version } = require(`${process.cwd()}/package.json`);
const { MessageEmbed } = require('discord.js');
require('colors');

//=====================================| Code |=====================================\

module.exports.errorCmdLogs1 = errorCmdLogs1;
module.exports.errorCmdLogs2 = errorCmdLogs2;

function errorCmdLogs1 (client, message, error) {
    console.log(String(error.stack).bgRed)
    const embed1 = new MessageEmbed()
      .setColor(wrongcolor)
      .setAuthor(`${message.guild.name} => Error System [NORMAL COMMANDS]`, message.guild.iconURL({ dynamic: true }))
      .setDescription(`_An error has occured_.\n\n**Error Code:** \`${error.name}\`\n**Error Message:** \`${error.message}\`\n**Stack:** \`\`\`yml\n${error.stack}\`\`\``)
      .setFooter(`Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB | CPU: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% | Ping: ${Date.now() - message.createdTimestamp}ms`)
    client.channels.cache.get(ErrorChannel).send({ embeds: [embed1] });

    const embed2 = new MessageEmbed()
      .setColor(wrongcolor)
      .setTitle(`${message.author.tag} => Error System`)
      .setDescription('_An error has occured_')
      .setFooter(`${footertext} • ${version}`, message.client.user.displayAvatarURL())
    client.channels.cache.get(message.channel.id).send({ embeds: [embed2] }).then(m => setTimeout(() => m.delete(), 6000));
}

function errorCmdLogs2 (client, interaction, error) {
    console.log(String(error.stack).bgRed)
    const embed3 = new MessageEmbed()
      .setColor(wrongcolor)
      .setAuthor(`${interaction.guild.name} => Error System [SLASH COMMANDS]`, interaction.guild.iconURL({ dynamic: true }))
      .setDescription(`_An error has occured_.\n\n**Error Code:** \`${error.name}\`\n**Error Message:** \`${error.message}\`\n**Stack:** \`\`\`yml\n${error.stack}\`\`\``)
      .setFooter(`Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB | CPU: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% | Ping: ${Date.now() - interaction.createdTimestamp}ms`)
    client.channels.cache.get(ErrorChannel).send({ embeds: [embed3] });
}

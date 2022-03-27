//=====================================| Import the Module |=====================================\\

const { 
    PREFIX,
    DISCORD_SUPPORT, OAUTHO2_INVITE, WEBSITE,
    OWNER, CO_OWNER, TEAM_1, TEAM_2, TEAM_3,
    Guild_ID_1, Guild_ID_2, Guild_Test_1, Guild_Test_2
} = require(`${process.cwd()}/settings/config.json`);
// =======================================================
const Discord = require('discord.js');
const { name, author, version } = require(`${process.cwd()}/package.json`);
const { Client, Message, MessageEmbed, Collection, MessageActionRow, MessageButton } = require('discord.js');
// =======================================================
const prefix = PREFIX;

//=====================================| Code |=====================================\\

module.exports = {
    name: 'messageCreate',

    /**
     * @param {Client} client
     * @param {Message} message
     */

    async execute(message, client, Discord) {
// ========================================| MessageCreate Events Script |======================================= \\

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
if (!command) return message.reply({ embeds: [new MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Error')
    .setDescription(`The command \`${commandName}\` does not exist.`)
]}).then(m => setTimeout(() => m.delete(), 6000));

// ========================================| Other list Handler |======================================= \\

// ====================< Owners only Check >=================== \\
const staff = OWNER.concat(CO_OWNER, TEAM_1, TEAM_2, TEAM_3);
if (command.ownerOnly && !staff.includes(message.author.id)) return; // message.channel.send('You are not allowed to use this command.').then(m => setTimeout(() => m.delete(), 6000));

// ==================== Official/Private Guilds only Check =================== \\
const private = Guild_ID_1.concat(Guild_ID_2, Guild_Test_1, Guild_Test_2);
if (command.guildOnly && !private.includes(message.guild.id))
    return message.reply({ embeds: [new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`This command is only available in official server!`)
    ]}).then(m => setTimeout(() => m.delete(), 6000));

// ====================< NSFW only Check >=================== \\
if (command.nsfwOnly && !message.channel.nsfw) return message.reply({ embeds: [new MessageEmbed()
    .setColor('#ff0000')
    .setTitle('This command only works in NSFW channels.')
    .setDescription(`Please go to [NSFW Channel](${message.channel.toString()}) to use this command!`)
]}).then(m => setTimeout(() => m.delete(), 6000));

// ====================< Bots Permissions Check >=================== \\
if (command.botPerms && !message.channel.permissionsFor(client.user).has(command.botPerms))
    return message.reply({ embeds: [new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('I do not have the required permissions to execute this command.')
    ]}).then(m => setTimeout(() => m.delete(), 6000));

// ====================< Users Permissions Check >=================== \\
let userPerms = message.channel.permissionsFor(message.author);
if (command.userPerms && !userPerms.has(command.userPerms))
    return message.reply({ embeds: [new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('You do not have the required permissions to execute this command.')
    ]}).then(m => setTimeout(() => m.delete(), 6000));
    
// ====================< Cooldown Check >=================== \\
const { cooldowns } = client;
if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
}
const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 1) * 1000;

if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply({ embeds: [new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('You are on cooldown.')
            .setDescription(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
        ]}).then(m => setTimeout(() => m.delete(), timeLeft * 1000));
    }
}
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

// ====================< Start Command >=================== \\
try {
    command.execute(message, args, client, prefix, Discord);
} catch (error) {
    console.error(error);
    message.reply({ embeds: [new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Error')
        .setDescription(`There was an error trying to execute that command.`)
        .addField('Error', `\`\`\`${error}\`\`\``)
    ]})
}

// ======================================== Random Code Events ======================================= \\  

// ====================< Mentions Prefix >=================== \\
client.on('message', async message => {
    const mentionPrefix = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(mentionPrefix)) {

const pingrow = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setLabel('Support')
        .setStyle('LINK')
        .setURL(DISCORD_SUPPORT)
        .setEmoji('904305582666838036')
        .setDisabled(false),
    new MessageButton()
        .setLabel('Invite me')
        .setStyle('LINK')
        .setURL(OAUTHO2_INVITE)
        .setEmoji('➕')
        .setDisabled(false),
    new MessageButton()
        .setLabel('Website')
        .setStyle('LINK')
        .setURL(WEBSITE)
        .setEmoji('🌐')
        .setDisabled(false),
    );

const pingEmbed = new MessageEmbed()    
    .setColor('#00ff00')
    .setTitle(`Hi ${message.author.username}'s, My prefix is [ \`${prefix}\` ]`)
    .setDescription(`If you need help, please use \`${prefix}help\` to see all my commands.\n\nIf you need support, please join our Support Server`)
    .setFooter(`© ${author} | ${name} v${version}`)
    
    return message.reply({ embeds: [pingEmbed], components: [pingrow] }).then(m => setTimeout(() => m.delete(), 25000));
    }
})

// ====================< Put your code here >=================== \\


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
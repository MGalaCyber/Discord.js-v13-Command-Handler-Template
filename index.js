/******************************************************************************************| INFORMATION |******************************************************************************************
 * @INFO :
 * 1.0 Import the required modules.
    * 1.1 Validating script for the advertisement.                                                  //////////////////////////////////////////////////////////////////////////////////////////////
 * 2.0 Create the Discord bot Client.                                                               ////                                                                                      ////
 * 3.0 Create the commands for the bot.                                                             \\\\                                        @NOTICE                                       \\\\
 * 4.0 Create/Custom the events for the bot.                                                        ////    This source code is public, it is forbidden to sell and buy this handler code     ////
 * 5.0 Create the functions for the bot.                                                            \\\\       if you want to use this handler code, please give credit from the owner        \\\\
 * 6.0 Create/Custom the variables for the bot.                                                     ////    it is forbidden to change the contents of the code (especially the core code)     ////
 *                                                                                                  \\\\                  it is forbidden to delete the credit in the code!                   \\\\
 *                                                                                                  ////                                                                                      ////
 * @CREDITS : MGalaCyber Development                                                                //////////////////////////////////////////////////////////////////////////////////////////////
 * @VERSION : 10.0.0
 * @GITHUB : MGalaCyber
**************************************************************************************| All Right Reserved! |**************************************************************************************/

//=====================================| Import the Module |=====================================\\

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectmenu, MessageAttachment, Interaction, Discord, InteractionCreate, Client, Collection } = require('discord.js');
const clientSettingsObject = require(`${process.cwd()}/Functions/clientSettingsObject.js`);
const Settings = require(`${process.cwd()}/Settings/settings.json`);
const Config = require(`${process.cwd()}/Settings/config.json`);
const Emoji = require(`${process.cwd()}/Settings/emojis.json`);
const Embed = require(`${process.cwd()}/Settings/embed.json`);
const client = new Client(clientSettingsObject());
require('dotenv').config();
require('colors');
require('ms');

//=====================================| DEPLOY SLASH COMMANDS |=====================================\\

client.deploySlash = {
    enabled: Settings.slashSettings.globalSlash,
    guild: Settings.slashSettings.guildSlashOnly
};

//=====================================| COLLECTIONS |=====================================\\

client.slashCommands = new Collection();
client.categories = new Collection();
client.cooldowns = new Collection();
client.commands = new Collection();
client.buttons = new Collection();
client.aliases = new Collection();
client.events = new Collection();

//=====================================| HANDLERS |=====================================\\

['events', 'messageCommands', 'slashCommands', Settings.antiCrash ? 'antiCrash' : null]
.forEach(handler => {
    require(`${process.cwd()}/Handlers/${handler}`)(client);
});

//=====================================| DATABASE |=====================================\\

require(`${process.cwd()}/Databases/connect.js`);

//=====================================| LOGIN TO BOT |=====================================\\

client.login(process.env.TOKEN);




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
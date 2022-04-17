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
 * @VERSION : 8.5.0
 * @GITHUB : MGalaCyber
**************************************************************************************| All Right Reserved! |**************************************************************************************/

//=====================================| Import the Module |=====================================\\

const { Discord, MessageEmbed, MessageAttachment, Client, Collection } = require('discord.js');
const clientSettingsObject = require(`${process.cwd()}/functions/clientSettingsObject.js`);
const settings = require(`${process.cwd()}/settings/settings.json`);
const client = new Client(clientSettingsObject());
const ms = require('ms');
require('dotenv').config();
require('colors');

//=====================================| DEPLOY SLASH COMMANDS |=====================================\\

client.deploySlash = {
    enabled: settings.globalSlash,
    guild: settings.guildSlashOnly
}

//=====================================| COLLECTIONS |=====================================\\

client.commands = new Collection();
client.slashCommands = new Collection();
client.buttons = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.cooldowns = new Collection();
client.events = new Collection();

//=====================================| HANDLERS |=====================================\\

['events', 'commands', 'slashCommands', settings.antiCrash ? 'antiCrash' : null]
.forEach(handler => {
    require(`${process.cwd()}/handlers/${handler}`)(client);
})

//=====================================| DATABASE |=====================================\\

require(`${process.cwd()}/databases/connect.js`);

//=====================================| LOGIN TO BOT |=====================================\\

client.login(process.env.TOKEN);


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
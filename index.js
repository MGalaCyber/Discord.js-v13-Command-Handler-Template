/**********************************************************************| INFORMATION |**********************************************************************
 * @INFO :
 * 1.0 Import the required modules.
    * 1.1 Validating script for the advertisement.
 * 2.0 Create the Discord bot Client.
 * 3.0 Create the commands for the bot.
 * 4.0 Create/Custom the events for the bot.
 * 5.0 Create the functions for the bot.
 * 6.0 Create/Custom the variables for the bot.
 * 
 * 
 * @CREDITS : MGalaCyber Development
 * @VERSION : 1.0.0
 * @GITHUB : MGalaCyber
 * 
 *
//////////////////////////////////////////////////////////////////////////////////////////////
////                                                                                      ////
\\\\                                        @NOTICE                                       \\\\
////    This source code is public, it is forbidden to sell and buy this handler code     ////
\\\\       if you want to use this handler code, please give credit from the owner        \\\\
////    it is forbidden to change the contents of the code (especially the core code)     ////
\\\\                  it is forbidden to delete the credit in the code!                   \\\\
////                                                                                      ////
//////////////////////////////////////////////////////////////////////////////////////////////

******************************************************************| All Right Reserved! |******************************************************************/


//=====================================| Import the Module |=====================================\\

const Discord = require('discord.js');
const mongoose = require('mongoose');
const fs = require('fs');
const colors = require('colors')
const ms = require('ms');
const dotenv = require('dotenv').config();
const settings = require(`${process.cwd()}/settings/settings.json`);
const client = new Discord.Client({
    messageCacheMaxSize: 50,
    messageCacheLifetime: 60,
    messageSweepInterval: 60,
    disableEveryone: false,
    shards: 'auto',
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: 32767
});

// ========================================| Collections |======================================= \\

client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.buttons = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.events = new Discord.Collection();

module.exports = client;

// ========================================| Handlers Scripts |======================================= \\

['events', 'commands', 'slashCommands', settings.antiCrash ? "antiCrash" : null]
    .filter(Boolean)
    .forEach(handler => {
    require(`${process.cwd()}/handlers/${handler}`)(client, Discord);
});

// ========================================| Database Reading Scripts |======================================= \\

// Database MongoDB
const databases = require(`${process.cwd()}/databases/connect`);
  
// ========================================| MongoDB Schema Reading |======================================= \\

client.ticketTranscript = mongoose.model('transcripts',
  new mongoose.Schema({
    Channel: String,
    Content: Array
  })
)

// ========================================| Login to Discord bot Script |======================================= \\

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
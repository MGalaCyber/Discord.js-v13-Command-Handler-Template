//=====================================| Import the Module |=====================================\

const { Collection } = require("discord.js");

//=====================================| Code |=====================================\

module.exports.onCoolDown1 = onCoolDown1;
module.exports.onCoolDown2 = onCoolDown2;

// MessageCreate Only
function onCoolDown1 (message, command) {
    if (!message || !message.client) throw 'No Message with a valid DiscordClient granted as First Parameter';
    if (!command || !command.name) throw 'No Command with a valid name granted as Second Parameter';
    const client = message.client;
    if (!client.cooldowns.has(command.name)) {
        client.cooldowns.set(command.name, new Collection());
    }
    const now = Date.now();
    const timestamps = client.cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;
    if (timestamps.has(message.member.id)) {
        const expirationTime = timestamps.get(message.member.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeleft = (expirationTime - now) / 1000;
            return timeleft
        } else {
            timestamps.set(message.member.id, now);
            setTimeout(() => timestamps.delete(message.member.id), cooldownAmount);
            return false;
        }
    } else {
        timestamps.set(message.member.id, now);
        setTimeout(() => timestamps.delete(message.member.id), cooldownAmount);
        return false
    }
}

// InteractionCreate only
function onCoolDown2 (interaction, cmd) {
    if (!interaction || !interaction.client) throw 'No Interaction with a valid DiscordClient granted as First Parameter';
    if (!cmd || !cmd.name) throw 'No Command with a valid name granted as Second Parameter';
    const client = interaction.client;
    if (!client.cooldowns.has(cmd.name)) {
        client.cooldowns.set(cmd.name, new Collection());
    }
    const now = Date.now();
    const timestamps = client.cooldowns.get(cmd.name);
    const cooldownAmount = (cmd.cooldown || 1) * 1000;
    if (timestamps.has(interaction.user.id)) {
        const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeleft = (expirationTime - now) / 1000;
            return timeleft
        } else {
            timestamps.set(interaction.user.id, now);
            setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
            return false;
        }
    } else {
        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
        return false
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
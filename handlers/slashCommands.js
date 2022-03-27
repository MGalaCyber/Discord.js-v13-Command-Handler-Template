//=====================================| Import the Module |=====================================\\

const { Guild_Test_1 } = require(`${process.cwd()}/settings/config.json`);
const colors = require('colors');
const { glob } = require('glob');
const { promisify } = require('util');
const globPromise = promisify(glob);

//=====================================| Code |=====================================\\

module.exports = async (client, Discord) => {
    const slashCommands = await globPromise(`${process.cwd()}/slashCommands/*/*.js`);

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file.name) return;
        client.slashCommands.set(file.name, file);

        console.log(`[SLASH COMMAND] `.bold.green + `[${file.name}] `.cyan + `was loaded!`.yellow);

        // Code for Context Menu
        if (['MESSAGE', 'USER'].includes(file.type)) delete file.description;

        // Code for UserPerms
        if (file.userPerms) file.defaultPermission = false;

        arrayOfSlashCommands.push(file);
    });

    client.on('ready', async () => {
        const guild = client.guilds.cache.get(Guild_Test_1);
        await guild.commands.set(arrayOfSlashCommands).then((cmd) => {
            const getRoles = (commandName) => {
                const permissions = arrayOfSlashCommands.find(
                    (x) => x.name === commandName
                ).userPerms;

                if (!permissions) return null;
                return guild.roles.cache.filter(
                    (x) => x.permissions.has(permissions) && !x.managed
                );
            };

            const fullPermissions = cmd.reduce((accumulator, x) => {
                const roles = getRoles(x.name);
                if (!roles) return accumulator;

                const permissions = roles.reduce((a, v) => {
                    return [
                        ...a,
                        {
                            id: v.id,
                            type: 'ROLE',
                            permission: true,
                        },
                    ];
                }, []);

                return [
                    ...accumulator,
                    {
                        id: x.id,
                        permissions,
                    },
                ];
            }, []);

            guild.commands.permissions.set({ fullPermissions });
        });
    })
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
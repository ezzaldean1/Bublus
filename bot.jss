const Discord = require('discord.js');

const client = new Discord.Client();
client.on('ready', () => {

 client.user.setGame('#Bُubbles Frined .. ','https://www.twitch.tv/peery13');

  console.log('---------------');

  console.log(' Platinum Bot Is Online')

  console.log('---------------')

});
            var prefix = "!" ;
            client.on('message', message => {

   

    if(message.author.bot) return;

    if(message.channel.type === 'dm') return;

   

    var command = message.content.toLowerCase().split(" ")[0]; // حقوق الفا كوودز Alpha Codes.

    var args = message.content.toLowerCase().split(" ");

    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));

    var prefix = '!'; // هنا تقدر تغير البرفكس <==================

   

    if(command == prefix + 'role') {

        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');

        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');

        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');

 

        let roleCommand = new Discord.RichEmbed()

        .setTitle(':white_check_mark: Role Command.')

        .setColor('GREEN')

        .setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n➥ \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\n➥ \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For remove from all role.\`\``)

        .setTimestamp()

        .setFooter(message.author.tag, message.author.avatarURL)

 

        if(!args[1]) return message.channel.send(roleCommand);

        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);

 

        if(userM) {

            var argsRole = message.content.toLowerCase().split(' ').slice(2);

        }else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {

            var argsRole = message.content.toLowerCase().split(' ').slice(3); // حقوق الفا كوودز Alpha Codes.

        }

 

        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));

 

        if(userM) {

            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');

            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` Any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);

           

            if(!message.guild.member(userM.user).roles.has(getRole.id)) {

                message.guild.member(userM.user).addRole(getRole.id);

                message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);

            }else if(message.guild.member(userM.user).roles.has(getRole.id)) {

                message.guild.member(userM.user).removeRole(getRole.id);

                message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);

            }

        }else if(args[1] === 'humans') {

            let notArgs = new Discord.RichEmbed()

            .setTitle(':white_check_mark: Role Command.')

            .setColor('GREEN')

            .setDescription(`**\n${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete the role from all humans.\`\``)

            .setTimestamp()

            .setFooter(message.author.tag, message.author.avatarURL)

           

            if(!args[2]) return message.channel.send(notArgs);

            if(!args[3]) return message.channel.send(notArgs); // حقوق الفا كوودز Alpha Codes.

            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');

            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

 

            if(args[2] === 'add') {

                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);

                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);

 

                let humansSure = new Discord.RichEmbed()

                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)

                .setColor('RED')

                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')

                .setTimestamp()

                .setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.

 

                message.channel.send(humansSure).then(msg => {

                    msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.

 

                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

                    let give = msg.createReactionCollector(giveHim, { time: 60000 });

                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });

 

                    give.on('collect', r => {

                        msg.delete();

                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {

                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {

                                message.guild.member(m).addRole(getRole.id);

                                setTimeout(() => {

                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);

                                }, 10000)

                            });

                        });

                    });

                    dontGive.on('collect', r => { // حقوق الفا كوودز Alpha Codes.

                        msg.delete();

                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

                    });

                })

            }else if(args[2] === 'remove') {

                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);

                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);

 

                let humansSure = new Discord.RichEmbed()

                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)

                .setColor('RED')

                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')

                .setTimestamp()

                .setFooter(message.author.tag, message.author.avatarURL)

 

                message.channel.send(humansSure).then(msg => {

                    msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.

 

                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });

                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

 

                    remove.on('collect', r => {

                        msg.delete();

                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**...`).then(message1 => {

                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {

                                message.guild.member(m).removeRole(getRole.id);

                                setTimeout(() => {

                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);

                                }, 10000)

                            });

                        });

                    }); // حقوق الفا كوودز Alpha Codes.

                    dontRemove.on('collect', r => {

                        msg.delete();

                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

                    });

                })

            } // حقوق الفا كوودز Alpha Codes.

        }else if(args[1] === 'bots') {

        let notArgs = new Discord.RichEmbed()

            .setTitle(':white_check_mark: Role Command.')

            .setColor('GREEN')

            .setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete the role from all bots.\`\``)

            .setTimestamp()

            .setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.

           

            if(!args[2]) return message.channel.send(notArgs);

            if(!args[3]) return message.channel.send(notArgs);

            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');

            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

 

            if(args[2] === 'add') {

                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);

                if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);

 

                let botsSure = new Discord.RichEmbed()

                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)

                .setColor('RED')

                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')

                .setTimestamp()

                .setFooter(message.author.tag, message.author.avatarURL)

 

                message.channel.send(botsSure).then(msg => {

                    msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.

 

                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

                    let give = msg.createReactionCollector(giveHim, { time: 60000 });

                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });

 

                    give.on('collect', r => {

                        msg.delete();

                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {

                            message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {

                                message.guild.member(b).addRole(getRole.id);

                                setTimeout(() => {

                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);

                                }, 10000)

                            });

                        });

                    });

                    dontGive.on('collect', r => {

                        msg.delete();

                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

                    });

                })

            }else if(args[2] === 'remove') { // حقوق الفا كوودز Alpha Codes.

                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);

                if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);

 

                let botsSure = new Discord.RichEmbed()

                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)

                .setColor('RED')

                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')

                .setTimestamp()

                .setFooter(message.author.tag, message.author.avatarURL)

 

                message.channel.send(botsSure).then(msg => {

                    msg.react('✅').then(() => msg.react('❎'))

 

                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });

                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

 

                    remove.on('collect', r => {

                        msg.delete();

                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {

                            message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {

                                message.guild.member(b).removeRole(getRole.id);

                                setTimeout(() => {

                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);

                                }, 10000)

                            });

                        });

                    });

                    dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.

                        msg.delete();

                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

                    });

                })

            }

        }else if(args[1] === 'all') { // حقوق الفا كوودز Alpha Codes.

            let notArgs = new Discord.RichEmbed()

            .setTitle(':white_check_mark: Role Command.')

            .setColor('GREEN')

            .setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For delete the role from all.\`\``)

            .setTimestamp()

            .setFooter(message.author.tag, message.author.avatarURL)

           

            if(!args[2]) return message.channel.send(notArgs);

            if(!args[3]) return message.channel.send(notArgs);

            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');

            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

 

            if(args[2] === 'add') {

                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`); // حقوق الفا كوودز Alpha Codes.

                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);

 

                let allSure = new Discord.RichEmbed()

                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)

                .setColor('RED')

                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give all the role.\n\n❎ = No no, cancel.')

                .setTimestamp()

                .setFooter(message.author.tag, message.author.avatarURL)

 

                message.channel.send(allSure).then(msg => {

                    msg.react('✅').then(() => msg.react('❎'))

 

                    let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

                    let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

                    let give = msg.createReactionCollector(giveAll, { time: 60000 });

                    let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });

 

                    give.on('collect', r => {

                        msg.delete();

                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {

                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {

                                message.guild.member(m).addRole(getRole.id);

                                setTimeout(() => {

                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);

                                }, 10000) // حقوق الفا كوودز Alpha Codes.

                            });

                        });

                    });

                    dontGive.on('collect', r => {

                        msg.delete();

                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

                    });

                })

            }else if(args[2] === 'remove') {

                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);

                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);

 

                let allSure = new Discord.RichEmbed() // حقوق الفا كوودز Alpha Codes.

                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)

                .setColor('RED')

                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')

                .setTimestamp()

                .setFooter(message.author.tag, message.author.avatarURL)

 

                message.channel.send(allSure).then(msg => {

                    msg.react('✅').then(() => msg.react('❎'))

 

                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id; // حقوق الفا كوودز Alpha Codes.

                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });

                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

 

                    remove.on('collect', r => {

                        msg.delete();

                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {

                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {

                                message.guild.member(m).removeRole(getRole.id);

                                setTimeout(() => {

                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);

                                }, 10000)

                            });

                        });

                    });

                    dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.

                        msg.delete();

                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));

                    }); // حقوق الفا كوودز Alpha Codes.

                })

            } // حقوق الفا كوودز Alpha Codes.

        }

    }

});

	
//voise online

client.on('voiceStateUpdate', (old, now) => {

  const channel = client.channels.get('488065517836435462');

  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;

  const size = channel.name.match(/\[\s(\d+)\s\]/);

  if (!size) return channel.setName(`.Bubbles Friends: [${currentSize}]`);

  if (currentSize !== size) channel.setName(`Bubbles Friends: [${currentSize}]`);

});
	

	
client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {

                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;

  let args = message.content.split(" ").slice(1);

  var argresult = args.join(' '); 

  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {

 m.send(`${argresult}\n ${m}`);

})

 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 

 message.delete(); 

};     

});
	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	


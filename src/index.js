const Discord = require('discord.js');
const { token } = require('../config.json');

const client = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds]});

// Discord Collections
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

// To get the handlers in /handlers directory
['eventHandler', 'commandHandler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord);
})

// To login with the token in config.json
client.login(token);

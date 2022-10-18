const Discord = require('discord.js');
const { token } = require('../config.json');

const client = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['eventHandler', 'commandHandler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord);
})

client.login(token);

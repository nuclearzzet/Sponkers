const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('../config.json');
const fs = require('node:fs');
const path = require('node:path');


const client = new Client({ intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();


client.once('ready', () => {
    console.log("Ready!");
});

const cmdh = require('./handlers/commandHandler')(client)

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);

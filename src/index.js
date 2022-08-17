const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('../config.json');
const { readdirSync } = require('node:fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();

const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'))
for(let file of commands){
	let pull = require(`./commands/${dirs}/${file}`);
	
}

client.once('ready', () => {
    console.log("Ready!");
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);

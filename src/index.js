// imports
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('../config.json');

// creating client
const client = new Client({ intents: [GatewayIntentBits.Guilds]});

//ready
client.once('ready', () => {
    console.log("Ready!");
});

//replying to commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if(commandName === 'ping'){
        await interaction.reply('Pong!');
    };
});

// logging in
client.login(token);

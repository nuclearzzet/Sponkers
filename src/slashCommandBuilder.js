const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('../config.json');

const commands = [];

const deploy = (dirs) => {
    const commandFiles = fs.readdirSync(`./src/commands/${dirs}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles){
        const command = require(`../src/commands/${dirs}/${file}`);

        commands.push(command.data.toJSON());
    }
}

['fun', 'info', 'moderation', 'music', 'owner'].forEach(dir => {
    deploy(dir)
})

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
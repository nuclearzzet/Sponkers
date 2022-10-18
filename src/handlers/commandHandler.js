const fs  = require('fs');

module.exports = (client, Discord) => {
    const load = (dirs) => {
        commandFiles = fs.readdirSync(`./src/commands/${dirs}/`).filter(file => file.endsWith('.js'));
            
        for (const file of commandFiles){
            const command = require(`../commands/${dirs}/${file}`);
            client.commands.set(command.data.name, command)
        }
    }
    ['fun', 'info', 'moderation', 'owner'].forEach(dir =>{
        load(dir);
    })
}
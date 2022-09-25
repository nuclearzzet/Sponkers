const { readdirSync } = require('fs')

module.exports = (client, Discord) => {
    const load = (dirs) => {
        eventFiles = readdirSync(`./src/events/${dirs}/`).filter(file => file.endsWith('.js'));

        for (const file of eventFiles){
            const event = require(`../events/${dirs}/${file}`);
            const eventName = event.name;
            if(event.once){
                client.once(event.name, (...args) => event.execute(...args));
            }else{
                client.on(event.name, (...args) => event.execute(...args));
            }
        }
    }
    ['client', 'guild'].forEach(dir => {
        load(dir)
    })
}
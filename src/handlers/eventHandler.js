const { readdirSync } = require('fs')

module.exports = (client, Dicord) => {
    const load = (dirs) => {
        eventFiles = readdirSync(`./src/events/${dirs}/`).filter(file => file.endsWith('.js'));

        for (let file in eventFiles){
            const event = require(`../events/${dirs}/${file}`)
            client.events.set(event.data.name, event);
        }
    }
    ['client', 'guild'].forEach(dir => {
        load(dir)
    })
}
module.exports = {
    name: 'interactionCreate',
    once: false,
    execute(interaction){
        if (!interaction.client.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction);

        if (!command) return;

        try{
            command.execute(interaction);
        }catch{
            console.error(error);
    		interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
}
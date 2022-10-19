const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
            .setName('queue')
            .setDescription('Replies with the queue'),
    
    async execute(interaction){
        await interaction.channel.send("Not implemented");
    }
}
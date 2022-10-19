const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
            .setName('weather')
            .setDescription('Replies with the weather information of the given place'),
    
    async execute(interaction){
        await interaction.channel.send("Not implemented");
    }
}
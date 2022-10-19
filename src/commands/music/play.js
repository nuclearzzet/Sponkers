const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
            .setName('play')
            .setDescription('Plays the music'),
    
    async execute(interaction){
        await interaction.channel.send("Not implemented");
    }
}
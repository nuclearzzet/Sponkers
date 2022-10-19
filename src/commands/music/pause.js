const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
            .setName('pause')
            .setDescription('Pauses the music'),
    
    async execute(interaction){
        await interaction.channel.send("Not implemented");
    }
}
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
            .setName('play')
            .setDescription('Plays the music')
            .addStringOption(option => 
                option
                    .setName('music')
                    .setDescription('The name of the music to be played')
                    .setRequired(true)),
    
    async execute(interaction){
        await interaction.reply("Not implemented")
    }
}
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
            .setName('skip')
            .setDescription('Skips the music'),
    
    async execute(interaction){
        await interaction.channel.send("Not implemented");
    }
}
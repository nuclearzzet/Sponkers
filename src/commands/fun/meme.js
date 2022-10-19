const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
            .setName('meme')
            .setDescription('Replies with a meme'),
    
    async execute(interaction){
        await interaction.channel.send("Not implemented");
    }
}
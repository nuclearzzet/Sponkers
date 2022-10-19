const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
            .setName('cat')
            .setDescription('Replies with a cat image'),
    
    async execute(interaction){
        await interaction.channel.send("Not implemented");
    }
}
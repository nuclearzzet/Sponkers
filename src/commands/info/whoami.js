const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName("whoami")
            .setDescription("Replies with user info"),
    
    async execute(interaction){
        const message = new EmbedBuilder()
                            .setColor(0x0099FF)
                            .setTitle(`${interaction.user.tag}`)
                            .addFields(
                                {name: 'Id:', value: `${interaction.user.id}`},
                                {name: 'Username:', value: `${interaction.user.username}`},
                                {name: 'Tag:', value: `${interaction.user.tag}`},
                                {name: 'Created At:', value: `${interaction.user.createdAt}`},
                            );
        
        await interaction.channel.send({embeds: [message]});
    }
}
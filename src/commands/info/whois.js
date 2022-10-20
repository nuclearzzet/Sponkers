const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName("whoami")
            .setDescription("Replies with user info")
            .addUserOption(option =>
                option
                    .setName('user')
                    .setDescription('The user')),
    
    async execute(interaction){

        const user = interaction.options.getUser('user');

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
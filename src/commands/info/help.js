const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
                .setName('help')
                .setDescription('Replies with command information'),
    
    async execute(interaction){
        const message = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle(`Help | ${interaction.user.tag}`)
                    .setDescription('Command Informations')
                    .addFields(
                        { name: '/help', value: 'This command',},
                        { name: '/ping', value: 'Check your ping'},
                        { name: '/whoami', value: 'Returns user info'},
                    );

        await interaction.channel.send({embeds: [message]});
    }

}
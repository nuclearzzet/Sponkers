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
                        // Information Commands
                        { name: '/help', value: 'Replies with this embed',},
                        { name: '/ping', value: 'Replies with your ping'},
                        { name: '/whoami', value: 'Replies with your info'},

                        // Moderation Commands
                        { name: '/kick', value: 'To kick a user from the server'},
                        { name: '/ban', value: 'To ban a user from the server'},
                        { name: '/unban', value: 'To unban a user from the server'},

                        // Server Functions
                        { name: '/channel-create', value: 'To create a channel'},
                        { name: '/channel-delete', value: 'To delete a channel'},
                        { name: '/role-create', value: 'To create a role'},
                        { name: '/role-delete', value: 'To delete a role'},

                        // Music Commands
                        { name: '/play', value: 'To play a given music'},
                        { name: '/pause', value: 'To pause the current music'},
                        { name: '/skip', value: 'To skip the current music'},
                        { name: '/queue', value: 'To get the queue'},
                    );

        if(await interaction.user.send({embeds: [message]})){
            await interaction.reply("Check your dm");
        }else{
            await interaction.reply("Could not send")
        }
    }
}
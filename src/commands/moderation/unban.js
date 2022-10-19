const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('unban')
            .setDescription('To unban a user'),

        async execute(interaction){
            if(interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers) || interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)){
                await interaction.channel.send("Not implemented yet, but checks for permission");
            }else{
                await interaction.channel.send("You don't have the permission to use this command");
            }
            
        }
}
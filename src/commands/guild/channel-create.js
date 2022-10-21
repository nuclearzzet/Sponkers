const { SlashCommandBuilder, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('channel-create')
            .setDescription('To create a new channel')
            .addStringOption(option =>
                option
                    .setName('name')
                    .setDescription('Give the name of the channel')
                    .setRequired(true))

            .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageChannels),

            async execute(interaction){
                if (interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels) || interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)){
                    
                    const channelName = interaction.options.getString('name');

                    if(await interaction.guild.channels.create({name: channelName})){
                        await interaction.reply(`Created channel ${channelName}`);
                    }else{
                        await interaction.reply("Could not be created");
                    }
                }else{
                    await interaction.reply("You don't have permission to execute this command");
                }
            }
}
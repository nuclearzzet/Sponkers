const { SlashCommandBuilder, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('channel-delete')
            .setDescription('To delete a channel')
            .addStringOption(option =>
                    option 
                        .setName('name')
                        .setDescription('channel name'))
            .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageRoles),

    async execute(interaction){
        const roleName = interaction.options.getString('name');

        await interaction.reply('Not implemented')
    }
}
const { SlashCommandBuilder, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('role-delete')
            .setDescription('To delete a role')
            .addStringOption(option =>
                    option 
                        .setName('name')
                        .setDescription('role name'))
            .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageRoles),

    async execute(interaction){
        const roleName = interaction.options.getString('name');

        await interaction.reply('Not implemented')
    }
}
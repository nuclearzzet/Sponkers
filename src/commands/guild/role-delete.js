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
        if(interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles) || interaction.member.permissions.has(PermissionsBitField.Flags.Administrator) ){
            const roleName = interaction.options.getString('name');

            // if(interaction.guild.roles.delete({name: roleName})){
            //     await interaction.reply(`Role ${roleName} deleted`);
            // }else{
            //     await interaction.reply("Failed to delete");
            // }
            await interaction.reply("not implemented");
        }else{
            await interaction.reply('You don\'t have permission to execute this commands');
        }
    }
}
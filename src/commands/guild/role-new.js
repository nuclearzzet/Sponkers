const { SlashCommandBuilder, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('role-new')
            .setDescription('To create a new role')
            .addStringOption(option =>
                option
                    .setName('name')
                    .setDescription('Give the name of the role')
                    .setRequired(true))

            .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageRoles),

            async execute(interaction){
                if (interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles) || interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)){
                    
                    const roleName = interaction.options.getString("name");

                    if(await interaction.guild.roles.create({name: roleName})){
                        await interaction.reply("Created");
                    }else{
                        await interaction.reply("Could not be created");
                    }
                }else{
                    await interaction.reply('You don\'t have permission to execute this command');
                }
            }
}
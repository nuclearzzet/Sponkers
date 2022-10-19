const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('ban')
            .setDescription('To ban a user')
            .addUserOption(option =>
                option
                    .setName('member')
                    .setDescription('The member you want to kick')
                    .setRequired(true))
            .addStringOption(option =>
                option
                    .setName('reason')
                    .setDescription('The reason for banning')
                    .setRequired(false))
            .setDefaultMemberPermissions(PermissionsBitField.Flags.BanMembers),


        async execute(interaction){
            if(interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers) || interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)){
                const member = interaction.options.getUser('member');
                const reason = interaction.options.getString('reason');

                await interaction.reply(`Banned ${member} for ${reason}`);
                await interaction.guild.members.ban(member);
            }else{
                await interaction.reply("You don't have the permission to use this command");
            }
        }
}
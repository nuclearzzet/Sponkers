const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('kick')
            .setDescription('To kick a member')
            .addUserOption(option =>
                option
                    .setName('member')
                    .setDescription('The member you want to kick')
                    .setRequired(true))
            .addStringOption(option =>
                option
                    .setName('reason')
                    .setDescription('The Reason for being kicked')
                    .setRequired(false))

            .setDefaultMemberPermissions(PermissionsBitField.KickMembers),

            async execute(interaction){
                if(interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers) || interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)){
                
                    const member = interaction.options.getUser('member');
                    const reason = interaction.options.getString('reason') ?? 'No Reason provided';

                    await interaction.reply(`Kicked ${member.username} for ${reason}`);
                    await interaction.guild.members.kick(member);

                }else{
                    await interaction.reply("You don't have the permission to use this command");
                }
                
            }
}
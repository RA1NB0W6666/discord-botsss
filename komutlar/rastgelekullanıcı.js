const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('#9400D3')
    .setTitle('Rastgele kullanıcı;')
    .setDescription(message.guild.members.random().displayName)
    .setThumbnail(message.author.avatarURL)
    .setFooter('ARGONT | İyi Eğlenceler')
    .setTimestamp()
    message.channel.send(embed).then(msg => {msg.delete(7000)});
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rastgelekullanıcı',
  kategori: 'yetkili',
  description: 'Sunucuda rastgele kullanıcı seçer',
  usage: 'rastgelekullanıcı'
};
const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const çekiliş = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Çekiliş!", true)
    .addField("Çekilişi Yapan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
    .addField(`Çekilişi Kazanan:`, `<@${message.guild.members.random().id}>`, true)
    .setColor("#9400D3")
    .setDescription('')
    return message.channel.sendEmbed(çekiliş);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekilişyap"],
  permLevel: 2
};

exports.help = {
  name: 'hızlıçekiliş',
  kategori: 'yetkili',
  description: 'Çekiliş yapar.',
  usage: 'hızlıçekiliş'
};
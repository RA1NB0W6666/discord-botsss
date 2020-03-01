const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı**', '**`rol-al`** adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply('rolünü alacağım kişiyi yazar mısın?').catch(console.error);
  if (rol.length < 1) return message.reply('Hangi Rolü O Kişiden Alcağımı Belirtmedin');
user.removeRole(rol);
  message.channel.send("**Rol Başarıyla Alındı** :ok_hand: ")

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rol-al',
  kategori: 'yetkili',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-al [kullanıcı] [@rol]'
};
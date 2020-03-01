const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkesten rol alabilmem için bir rol etiketle.')

  
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkesten ${rol} adlı rol alındı. **Eğer alınmadıysa lütfen özel rolümü en üste taşıyınız.**`)
        .setColor(rol.hexColor)
   
   
   message.guild.members.forEach(u => {
u.removeRole(rol)
   })
  // message.channel.send('Herkese **'+ rol.name +'** adlı rol verildi!')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-al'],
    permLevel: 0
}

exports.help = {
    name: 'herkestenrolal',
    kategori: 'yetkili',
    description: 'Herkesten toplu rol alır.',
    usage: 'herkestenrolal @rol'
}
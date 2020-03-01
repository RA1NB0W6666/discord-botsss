const Discord = require('discord.js')

exports.run = (client, message, params) => {
const embed = new Discord.RichEmbed()
.setTitle(':flag_tr: Türkiye saati aşağıda yazmaktadır.')
.setTimestamp()
.setFooter('Türkiyemizin Saati ->')
.setColor(0xff7f00)

message.channel.sendMessage(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'saat',
    kategori: 'kullanici',
    description: 'saat gösterir',
    usage: 'saat'
  };
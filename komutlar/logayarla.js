const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../loglar.json');
let kanal = JSON.parse(fs.readFileSync("./log.json", "utf8"));

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Log ayarla Komutu')
        .setDescription('Log kanalı ayarlamak için !logayarla #kanal')
        message.channel.send({embed})
        return
    }

    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            gkanal: channel.id
        };
    }
  
    fs.writeFile("./log.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
  
    const embed = new Discord.RichEmbed()
    .setTitle('Başarılı!')
    .setDescription(`Log kanalı ${channel} olarak ayarlandı.`)
    .setColor('RANDOM')
    message.channel.send({embed})
  

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['log-ayarlama','log-ayarla','log'],
    permLevel: 0
}

exports.help = {
    name: 'logayarla',
    kategori: 'ayarlar',
    description: 'Sunucunun log kanalını belirler.',
    usage: 'logayarla <#kanal>'
}
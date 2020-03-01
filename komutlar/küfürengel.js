const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Aktifleştirmek veya kapatmak için **aç** veya **kapat** yazmalısın!  
Örnek:
**${ayarlar.prefix}küfürengel aç** `).setColor("#9400D3"));
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` Yetkisine Sahip Olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'acik').then(i => {
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Küfür engel başarıyla açıldı! `Üyeleri Yasakla` yetkisine sahip olanların küfürü engellenmeyecektir.').setColor("#9400D3"));
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'kapali').then(i => {
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Küfür filtresi başarıyla kapatıldı.').setColor("#9400D3"));
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür-engel'],
  kategori: "moderasyon",
  permLevel: 3
};

exports.help = {
  name: 'küfürengel',
  kategori: 'ayarlar',
  description: 'Küfür Engelleme Sistemini Açar/Kapatır.',
  usage: 'küfürengel'
};
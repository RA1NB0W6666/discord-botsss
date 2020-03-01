const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports.run = async (Main, message, args) => {

      let reminderTime = args[0];
      if(!reminderTime) return message.channel.send(`**Yanlış Kullanım!**\n**Geçerli Kullanım Örneği:** ${ayarlar.prefix}hatırlatıcı 10min Uyan!!\n(min = Dakika)`);


      let Bilgi = new Discord.RichEmbed()
      .setColor('#9400D3')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
      .setDescription("**Hatırlatıcı başarıyla ayarlandı.**")

      .setTimestamp()

      message.channel.send(Bilgi);

      let reminder = args.slice(1).join(" ");
      
      setTimeout(function(){
        let Zamanlayıcı = new Discord.RichEmbed()
        .setColor('#9400D3')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Hatırlatıcı", `\`\`\`${reminder}\`\`\``)
        .setTimestamp()

        message.channel.send(Zamanlayıcı);
      }, ms(reminderTime));


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hatırlat'],
  permLevel: 0
};

exports.help = {
    name: 'hatırlatıcı',
    kategori: 'yetkili',
    description: 'Hatırlatıcı oluşturur.',
    usage: 'hatırlatıcı'
};
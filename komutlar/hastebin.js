const hastebin = require('hastebin-gen');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('DM kutunu kontrol eder misin? :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
    const hastEmb = new Discord.RichEmbed()
 hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0xFFF000)
      .setURL(hastLink)
      .addField('Link: ', `${hastLink}`)
      .setFooter('ARGONT | Hastebin Sistemi')
       return message.author.sendEmbed(hastEmb)
  }).catch(console.error);  
   
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hastebin',
  kategori: 'kullanıcı',
  description: 'Hastebine kod/cümle yüklersiniz.',
  usage: 'hastebin [kod/cümle]'
};
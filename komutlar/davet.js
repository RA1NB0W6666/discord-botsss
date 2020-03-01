const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

 exports.run = (client, message) => {
   const ozelmesajkontrol = new Discord.RichEmbed()
   .setColor(0x9400D3)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Davet linkim burada.');
    message.channel.sendEmbed(ozelmesajkontrol)
    const davet = new Discord.RichEmbed()
    .setColor('#9400D3')
    .setDescription('https://discordapp.com/oauth2/authorize?client_id=580092186331185162&scope=bot&permissions=8')
message.channel.sendEmbed(davet)
}

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['davet'],
   permLevel: 0
 };
 exports.help = {
   name: 'botdavet',
   kategori: 'bot',
   description: 'Botu sunucuna davet eder.',
   usage: 'botdavet'
 };
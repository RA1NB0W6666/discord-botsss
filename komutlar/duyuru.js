const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;

var filter = m => m.author.id === message.author.id;
 
  
  
      message.channel.send(`**Lütfen duyurunun yapılacağı kanalın adını yazınız.**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **Böyle bir kanal bulamadım**');
        room = collected.first().content;
        collected.first().delete();

            msg.edit('**Şimdi de yapacağınız duyuruyu yazınız.**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("#9400D3")
                  .setDescription(`**:trophy: Duyuruyu Yapan Admin:** **${message.author.username} **\n-----------------------------\n**:loudspeaker: Yapılan Duyuru:** \n ** ${title} **`)
                  .setFooter("ARGONT | Duyuru Sistemi");
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **YENİ DUYURU!** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {

            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **Maalesef gerekli yetkilerim bulunmamakta**`);
                  console.log(e);
                }
              });
            });
          });
        });
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: 'duyuru',
  kategori: 'yetkili',
  description: 'Sunucunuzda güzel görünümlü duyuru yapar.',
  usage: 'duyuru'
};
   
const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`Fotoğraf İşleniyor`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=partner&url=https://api.eggsybot.xyz/pub/resources/frames/partner.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./img/partner/partner.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/partner/partner.png`));
        }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'partner',
    kategori: 'cerefe',
    description: 'Avatarınıza Partner Efekti Ekler.',
    usage: 'partner'
  };
const { Canvas } = require("canvas-constructor");
const { get } = require("snekfetch");
const Discord = require('discord.js')

exports.run = (client, message, params) => {
    const serverSize = message.guild.memberCount;
    const userName = message.author.username + '#' + message.author.discriminator
    const userid = message.author.id
    const oyun = message.author.presence.game ? message.author.presence.game.name : 'Şu an oyun oynamıyor'
    const bot = message.author.bot ? 'Evet' : 'Hayır'
    const guildName = message.guild.name;
    get(message.guild.iconURL).then(guildIcon => {
        const canvas = new Canvas(500, 250)
        .setColor("#2C2F33")
        .addRect(0, 0, 500, 250)
        .setColor("#ffffff")
        .setTextFont('40px Impact')
        //.setTextAlign("center")
        .addText(`Kullanıcı Bilgileri`, 80, 40)
        .setTextFont('20px Impact')
        .addText(`Kullanıcı Adı : ${userName}`, 10, 150)
        .addText(`Ne Oynuyor? : ${oyun}`, 10,175)
        .addText(`Kullanıcı İd : ${userid}`, 10, 200)
        .addText(`Botmu? : ${bot}`, 10, 225)
        .save();
        
        message.channel.send({files: [{ attachment: canvas.toBuffer(), name: "kullanici.png"}]});
    });
}

module.exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["sunucuüye","sunucuü"],
  permLevel: 0
};

module.exports.help = {
  name: "kullanıcıbilgim",
  kategori: 'kullanıcı',
  description: "Kullanıcı bilgilerini gösterir.",
  usage: "kullanıcıbilgim"
};
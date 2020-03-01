const Discord = require("discord.js");

exports.run = async (xir, message, args, tools, con) => {
    let help = new Discord.RichEmbed()
        .setAuthor("Tüm Komutlar")
        .setColor("#9400D3")
        .addField("Bot Komutları", `${xir.commands.filter(cmd => cmd.help.kategori === 'bot').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Yetkili Komutları", `${xir.commands.filter(cmd => cmd.help.kategori === 'yetkili').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Ayarlanabilen Yetkili Komutları", `${xir.commands.filter(cmd => cmd.help.kategori === 'ayarlar').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Kullanıcı Komutları", `${xir.commands.filter(cmd => cmd.help.kategori === 'kullanıcı').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Eğlence Komutları", `${xir.commands.filter(cmd => cmd.help.kategori === 'eğlence').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Çerçeve ve Efekt Komutları", `${xir.commands.filter(cmd => cmd.help.kategori === 'cerefe').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
    message.channel.send(help)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","komutlar"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  kategori: 'bot',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
//XiR
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send({embed: {
            color: 0x9400D3,
            author: {
              name: "Ping Menüsü",
            },
                "thumbnail": {
                 "url": "https://cdn.discordapp.com/avatars/386421264409165829/08d0f8fb174dda6c6c01ce7d55bf0e76.png?size=2048"
            },
            title: "",
            description: ` :ping_pong:  [Pong](https://discordapp.com/oauth2/authorize?client_id=583977130283761675&scope=bot&permissions=0): **${Math.round(client.ping)}** ms \n`,
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "Rainbow | İyi eğlenceler"
            }
          }
        });  
        message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
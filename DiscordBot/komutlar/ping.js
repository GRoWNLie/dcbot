const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 
  const embed = new Discord.RichEmbed()

  .setDescription(`:ping_pong: Ping: (${client.ping} ms) `, message.author.name)
  message.channel.send(embed)
  
  
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ["ms",],
	permLevel: 0,
	kategori: 'genel',
  
}

exports.help = {
	name: 'ping',
	description: 'Botun gecikme süresini gösterir.',
	usage: 'ping'
}

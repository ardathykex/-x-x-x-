
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
const sunucubilgi = new Discord.RichEmbed()
.setAuthor(message.author.username + ' Olamaz!')
.setColor(0x000000)
.setTimestamp()
.setDescription('')
.setImage(`https://cdn.discordapp.com/attachments/265156286406983680/490439461574803467/adnlenny.gif`)
return message.channel.sendEmbed(sunucubilgi);
}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'ip',
description: 'ip',
usage: 'ip'
};
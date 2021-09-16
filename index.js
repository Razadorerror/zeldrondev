const Discord = require('discord.js')
const { Client, MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const client = new Client();



const talkedRecently = new Set();

client.on('ready', () => {
  
  console.log('Razador {EKAV BOT READY}')

}
)
 

client.login(process.env.token);
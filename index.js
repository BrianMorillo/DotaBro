var request = require("request");
const commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new commando.Client();
var request = require("request");
var generalChannel;
var voiceChannel;
var dispatcher;

bot.registry.registerGroup('dota','Dota');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

console.log("Server Running..");
bot.login('NDAwNTA4NTE3MTkyMzAyNTkz.DTcyfA.bU4G2SSvdAZJ2xPsfADAbyQjfbo');

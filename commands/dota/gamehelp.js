const commando = require('discord.js-commando');
var enableGameHelp = false;
var lowerCasedArg;
var intervalFunction;
var voiceChannel;
var dispatcher;
var readyForMsg = true;

class Gamehelp extends commando.Command{
	constructor(client){
		super(client,{
			name: 'gamehelp',
			group: 'dota',
			memberName: 'gamehelp',
			description: 'initializes in-game help(only for admins)'
		});
	}
	async run(message,args){
		lowerCasedArg = args.toLowerCase();
		if(lowerCasedArg == "enable" && enableGameHelp == false){
			enableGameHelp = true;
			message.channel.send("Game Help Enabled");
			message.channel.send("Game Help Started");
			voiceChannel = message.member.voiceChannel;
			console.log("Working");
			voiceChannel.join().then(connection =>	{/*ADD CODE HERE WHEN CONNECTION HAPPENS*/}).catch(err => console.log(err));
			
			//ONCE THE GAME STARTS WAIT 1 MINUTE TO ENABLE THE NOTIFICATION SYSTEM SINCE YOU CANT STACK THE FIRST MINUTE
				intervalFunction = setInterval(function() {
					setTimeout(function(){
						if(readyForMsg = true){
							readyForMsg = false;
							dispatcher = voiceChannel.connection.playFile('./stack.mp3');
							dispatcher.on("end", end => {readyForMsg=true});
						}
					}, 30000);
				}, 60000);	

		}else if(lowerCasedArg == "disable" && enableGameHelp == true){
			enableGameHelp = false;
			lowerCasedArg = "";
			clearInterval(intervalFunction);
			voiceChannel.leave();
			message.channel.send("Game Help Disabled");

		}else if(lowerCasedArg == "rosh" && enableGameHelp == true){
			message.channel.send("spawn notifier enabled");
			setTimeout(function(){
				if(readyForMsg = true){
							readyForMsg = false;
							dispatcher = voiceChannel.connection.playFile('./rosh.mp3');
							dispatcher.on("end", end => {readyForMsg=true});
				}
			}, 480000);

		}else{
			message.channel.send("You can either ENABLE or DISABLE the help");
		}
	}
}
module.exports = Gamehelp;

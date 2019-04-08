const commando = require('discord.js-commando');

class Stackmap extends commando.Command{
	constructor(client){
		super(client,{
			name: 'stackmap',
			group: 'dota',
			memberName: 'stackmap',
			description: 'Shows the updated stack time map'
		});
	}
	async run(message,args,channel){
			message.channel.send({embed: {
						color: 13899047,
						title: "MAP FOR STACKING",
						image: {
						      url: "https://www.google.com/"
						    }
						}
			});
	}
	
}
module.exports = Stackmap;

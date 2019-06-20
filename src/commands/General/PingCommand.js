const Command = require('../../structure/DiscordCommand')
	  DiscordEmbed = require('../../structure/DiscordEmbed')

module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client)
        this.client = client

		this.name = 'ping'
        this.category = 'General'
        this.description = 'See latency of bot.'
        this.aliases = ['latency']

        this.enabled = true
        this.guildOnly = false
	   }
	async run(message, args) {
		let embed = new DiscordEmbed(message.author)
		.setDescription("Ping!")
		message.channel.send(embed).then(msg => {
			msg.edit(embed.setDescription(`Pong! ${Math.round(this.client.ping) + 'ms'}`))
		})
	}
}

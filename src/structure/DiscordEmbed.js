const Discord = require('discord.js')

module.exports = class DiscordEmbed extends Discord.RichEmbed {
	constructor(user, data = {}) {
		super(data)
		this.setFooter('Executed by ' + user.tag, user.avatarURL)
	}
}

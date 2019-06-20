const Command = require('../../structure/DiscordCommand');
      DiscordEmbed = require('../../structure/DiscordEmbed'),

module.exports = class EvalCommand extends Command {
    constructor(client, config) {
        super(client)
        this.client = client

        this.name = 'eval'
        this.category = 'Admin'
        this.description = 'Use eval in bot.'
        this.aliases = []

        this.enabled = true
        this.guildOnly = false
    }
    async run(message, args){
        if (!message.author.id == '268979650070315010' && !'535989700561993733') return message.channel.send("Sem permissão")
        try {
            let argumentos = args.join(" ");
            let code = eval(argumentos)
    
            if (typeof code !== 'string')
                code = require('util').inspect(code, { depth: 0 });
            let embed = new DiscordEmbed(message.author)
            .setColor('RANDOM')
            .addField('Entrada', `\`\`\`js\n${argumentos}\`\`\``)
            .addField('Saída', `\`\`\`js\n${code}\n\`\`\``)
            message.channel.send(embed)
        } catch(e) {
            message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
        }
    }
}

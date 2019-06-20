const Command = require('../structure/DiscordCommand')

module.exports = class {
    constructor(client) {
    this.client = client
}
    async run(){
        console.log("[ONLINE] Bot connected successfully.")
    }
}

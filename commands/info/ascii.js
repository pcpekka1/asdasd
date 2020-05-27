
const ascii = require('figlet');

module.exports = {
  name: "ascii",
  category: "info",
  description: "Get bot ping :/asdasdasd",
  usage: "ascii",
  run: (client, message, args) => {
    if (!args.join(' ')) return message.reply('please specify texts for the ascii conversion');

        let rendered = figletAsync(text);
        message.channel.send(rendered, {
            code: 'md'
})
})
}
}

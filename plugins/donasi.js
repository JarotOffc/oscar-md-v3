let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0858-5053-9404]
│ •  [0858-5053-9404]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

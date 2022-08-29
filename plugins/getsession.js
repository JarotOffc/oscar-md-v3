let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Wait!, Proses Getting File oscar.data.json')
    let sesi = await fs.readFileSync('./oscar.data.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'oscar.data.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['owner']
handler.command = /^(g(et)?oscar)?(data.json)?)$/i

handler.owner = true

module.exports = handler

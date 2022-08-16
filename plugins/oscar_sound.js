let fs = require('fs')
let handler = async (m) => {
let jarot = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-07-14-at-18.12.80.opus')
conn.sendFile(m.chat, jarot, '', '', m, true)
}

handler.customPrefix = /^(jarot)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler

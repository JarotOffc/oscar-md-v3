//Jangan Di ganti!! 
// Jika ada yang Jual sc langsung Di hapus!!

let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/239f046a928370340401f.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://youtu.be/FHntJPk2PkU
│ *Mampir Youtube Owner Banh:* 
│ ╰ https://tinyurl.com/2qsejxnw
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa mampir Youtube Owner Kak!
• Jangan Lupa kasih star & kasih credit

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler

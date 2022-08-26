const uploadFile = require('../lib/uploadFile')
let { sticker } = require('../lib/sticker.js')
const uploadImage = require('../lib/uploadImage')
let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Kirim foto/video yang ingin diubah ke url dengan caption *${usedPrefix}${command}* atau reply medianya`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       let flokasi = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6285850539404-1625305606@g.us" } : {}) 
                        },
       message: {
                    locationMessage: {
                    name: '「 Broadcast 」\n' + text,
                    jpegThumbnail: await (await fetch('https://telegra.ph/file/6ff7406b4b0020be3669e.jpg')).buffer() //Gambarnye
                          }
                        }
                      }
       await conn.delay(1500)
       let stek = await sticker(true, `${link}`, 'Jarot Cok', 'Ah~ Yamete Kudesai 🥵💦🍆')
      conn.sendFile(id, stek, '', '', flokasi)
     }
  m.reply('*Broadcast selesai*')
}
handler.help = ['broadcaststicker','bcstik', 'bcstick'].map(v => v + ' <reply media>')
handler.tags = ['owner']
handler.command = /^(broadcaststicker|bcstik|bcstick)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

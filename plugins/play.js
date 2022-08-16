process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} california`
  let chat = global.db.data.chats[m.chat]
  await m.reply(global.wait)
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Konten Tidak ditemukan!'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }

  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 20290,
    status: 1,
    surface : 1,
    message: `❏ oscarbotz`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://telegra.ph/file/ad0f27b9d5e469827e654.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  await conn.send3ButtonImg(m.chat, await (await fetch(thumb)).buffer(), `
*PLAY OSCARBOTZ*
├●───────────────┤
◁ㅤ ❚❚ㅤ▷
┏┉━━━━━━━━━━━❏
┆• *Judul:* ${title}
│• *Audio:* ${filesizeF}
│• *Video:* ${yt2.filesizeF}
┆• *Server:* ${usedServer}
└❏
`.trim(), global.botdate, `💽 Audio`, `.yta ${vid.url}`, `🎥 Video`, `.yt ${vid.url}`, '🔎 YouTube Search', `.yts ${title}`, ftrol, {
    contextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: 'Apa benar ini yang anda cari?',
            description: 'Apa benar ini yang anda cari?',
            mediaType: 2,
          thumbnail: await (await fetch(thumb)).buffer(),
         mediaUrl: `https://vt.tiktok.com/ZSdy5q2fJ/`
        }
     }
    })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler

let wm = global.botwm

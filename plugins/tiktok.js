let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, text, command, args }) => {
	let ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9999999,
    status: 404,
    surface : 404,
    message: `❏ TIKTOK DOWNLOADER`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://telegra.ph/file/c2c7057129ff6f42095b8.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let res = await fetch(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${args[0]}`)
    let json = await res.json()
    if (!json.status) return m.reply(`Harap masukkan URL sebagai parameter.\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSdpHWxxG/?k=1`, m)
    let data = json.result
    let video = data.video
    let thumb = await (await fetch(data.thumb)).buffer()
    let tag = `@${m.sender.split('@')[0]}`
    conn.reply(m.chat, '*WAIT! | Mohon Tunggu Sebentar...*', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(), contextInfo: { externalAdReply: {title: 'Lagi Memuat Data', sourceUrl: 'https://vt.tiktok.com/ZSdnasM19/', body: '© 𝙷𝚊𝚘𝚛𝚒𝚋𝚘𝚝𝚣 𝙱𝚢 𝚉𝚒𝚟𝚏𝚞𝚛𝚛', thumbnail: await (await fetch('https://telegra.ph/file/7d3c2136bec2eaec00f2e.jpg')).buffer(),}}})
let txt = `Hai Kak ${tag}, Videonya Udah Jadi Nih, Kalau Mau Versi Ekstensi Lain, Pilih Dibawah Ya` 
    await conn.sendButtonVid(m.chat, video, txt, 'Mau Ganti Ke Versi Music Klik Dibawah', `Audio`, `.tiktokaudio ${args[0]}`, 0, { quoted: ftroli,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://vt.tiktok.com/ZSRRmS8vh/',
            title: 'Tiktok Downloader 🎥',
            body: wm,
          thumbnail: thumb
        }
     }
    })
 } 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((tt|tiktok)?(dl)?)$/i

module.exports = handler

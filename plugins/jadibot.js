let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let youtube = global.yt
let owner = global.owner
let anu = `Hallo mypren 👋
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
⟩» *Kalau kakak mau jadi bot silahkan jasa run aja kak*
          
━━━〔 🏧 *HARGA* 🏧 〕━━ꕥ
⬡ *1 minggu * 15.000
⬡ *3 minggu:* 25.000
⬡ *Tutorial Jadibot:* 50.000
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* ${6285850539404}
⬡ *PULSA:* ${6285850539404}
⬡ *YouTube:* ${'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ'}
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 📮 *RULES* 📮 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!
⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person Jasa Tutorial:
wa.me/${6285850539404} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, '𝘿𝙤𝙣𝙖𝙨𝙞', '.donasi', '𝙎𝙚𝙬𝙖𝘽𝙤𝙩', '.sewaoscar', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler

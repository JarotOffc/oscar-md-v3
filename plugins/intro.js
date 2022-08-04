let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur     :* 
│ *Hobby    :* 
│ *Kelas    :* 
│ *Asal     :* 
│ *Agama    :* 
| *Youtubeme:* https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

module.exports = handler

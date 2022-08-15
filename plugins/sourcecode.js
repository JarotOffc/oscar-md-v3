let handler = async (m, { conn }) => {
	
	// Link Script jgn di ganti ya KONTOL
    // Kalo mau masukin github kamu tinggal add aja link githubnya tapi jangan di hapus sumber script!
    // Jangan Ngeyell..
    // Kalo ngeyel gk bakal up sc lagi
    
    let txt = `
Bot ini menggunakan script github

𝙈𝙖𝙪 𝙨𝙘𝙧𝙞𝙥𝙩?
𝘾𝙚𝙠 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙍𝙞𝙨𝙢𝙖𝙗𝙤𝙩𝙯  𝙤𝙛𝙛𝙘
Script original By Aine-Md
`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


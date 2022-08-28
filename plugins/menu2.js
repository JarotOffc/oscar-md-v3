let handler = async (m, { conn, usedPrefix: _p, args, command }) => { 
 let locale = 'id' 
  let d = new Date(new Date + 3600000) 
   let _uptime = process.uptime() * 1000 
   let uptime = clockString(_uptime) 
   let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
     let date = d.toLocaleDateString(locale, { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }) 
      let caption = ` ┌━––「 ˚DAFTAR MENU 」––━┈▧ 
 │◦〉  ${_p}? all   
 │◦〉  ${_p}? Rpg-Absen  
 │◦〉  ${_p}? rpg  
 │◦〉  ${_p}? Game
 │◦〉  ${_p}? Exp, Limit && Pay
 │◦〉  ${_p}? Sticker
 │◦〉  ${_p}? Main
 │◦〉  ${_p}? Kerang Ajaib
 │◦〉  ${_p}? Quotes
 │◦〉  ${_p}? Admin
 │◦〉  ${_p}? Group
 │◦〉  ${_p}? internet
 │◦〉  ${_p}? Anonymous Chat
 │◦〉  ${_p}? Downloader
 │◦〉  ${_p}? Berita
 │◦〉  ${_p}? Tools
 │◦〉  ${_p}? Fun
 │◦〉  ${_p}? Database
 │◦〉  ${_p}? Voting
 │◦〉  ${_p}? Absen
 │◦〉  ${_p}? Catatan
 │◦〉  ${_p}? Jadian
 │◦〉  ${_p}? Islami
 │◦〉  ${_p}? Owner
 │◦〉  ${_p}? Advanced
 │◦〉  ${_p}? info  
 │◦〉  ${_p}? Audio
 │◦〉  ${_p}? Premium
 │◦〉  ${_p}? Maker   
 ╰━–━–━–━–━–⊙–━–━–━–━┈▧` 
      await conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/0c308dfdb4f3217546663.jpg')).buffer(), caption, `ıll Runtime : ${uptime}\nlıl Tanggal : ${week} ${date}`, 'Donasi', `.donasi`, 'Owner', '.owner', m) 
  }  
  handler.help = ['menu2'] 
  handler.tags = ['main']  
  handler.command = /^(menu2)$/i  
    
  module.exports = handler 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 }

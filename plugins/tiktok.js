let fetch = require('node-fetch') 
 let fs = require('fs') 
 let handler = async(m, { conn, usedPrefix, text, command }) => { 
     if (!text) throw `Harap masukkan URL sebagai parameter.\n\nContoh: ${usedPrefix + command} https://vm.tiktok.com/ZSepbsKQw/` 
     let res = await fetch(global.API('rey', '/api/download/tiktok', { url: text }, 'apikey')) 
     if (!res.ok) throw await `${res.status} ${res.statusText}` 
     let json = await res.json() 
     await conn.sendFile(m.chat, json.result.nowatermark, '', 'Selesai...', m) 
 } 
 handler.command = /^tiktok$/i 
 handler.tags = ['downloader'] 
 handler.help = ['tiktok'] 
 handler.limit = true 
 module.exports = handler

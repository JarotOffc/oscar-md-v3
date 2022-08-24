let fs = require('fs') 
let chalk = require('chalk')

global.owner = [
  ['6285850539404'],
  ['6285850539404'],
  ['6285850539404', 'Owner', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.fotonya1 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini kalo mau di ganti silahkan ganti aja
global.fotonya2 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //gw lupa nih foto apa aja:v
global.fotonya3 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini juga ganti
global.fotonya4 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini juga ganti
global.fotonya5 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini juga ganti
global.fotonya6 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg' //ini ganti pakai foto sosialmedia mu
global.fotonya7 = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg'
global.instagram = 'https://instagram.com/Jarotr_'
global.dana = '085850539404'
global.saweria = 'https://saweria.co/jarotoffc'
global.pulsa = '085850539404'
global.yt = 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ'
global.mods = [] // Want some help?
global.price1 = '𝐍𝐈𝐇 𝐁𝐀𝐍𝐆 𝐋𝐈𝐒𝐓 𝐒𝐄𝐖𝐀𝐍𝐘𝐀\n\n》PERBULAN Rp 15.000\nMAKSIMAL 2 GRUP\n》2 BULAN 25.000\nMAKSIMAL 3 GRUP \n》3 BULAN Rp 40.000\nMAKSIMAL 2 GRUP'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  zeks: 'https://api.zeks.me',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apikeyaine',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '@𝐎𝐒𝐂𝐀𝐑-𝐌𝐃'
  var sticker_author = '𝐎𝐬𝐜𝐚𝐫'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Sticker WM
global.packname = sticker_name
global.author = sticker_author
global.wm = '©𝐎𝐒𝐂𝐀𝐑-𝐌𝐝'

global.anu = 'https://telegra.ph/file/054b6fe59958df5ad6b1f.jpg'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

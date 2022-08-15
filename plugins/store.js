/*============== Jangan di ganti! ==============*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let jarot = `
*STORE CREATOR*
«================»
››╭─〘 *Store* 〙
╭╡📮: Store owner kami.
│┝‷✧ *jasa murid bot:*
│┝‷✧ *jasa Jadi bot:*
│┝‷✧ *jasa Sewa bot:*
│╰───···─────
│⁺◛˖ Ingin membeli store owner? Chat owner aja…
╰──────────···───
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya1)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '',
           hydratedButtons: [{
             urlButton: {
               displayText: 'YouTube creator🌱',
               url: 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ
             }

           },
                {
               urlButton: {
               displayText: 'GROUP BOT🌍',
               url: 'https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL
             }

           },
               {
             quickReplyButton: {
               displayText: 'Instagram',
               url: ig
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(store|.store)$/i
handler.command = new RegExp
handler.help = ['.store']
module.exports = handler

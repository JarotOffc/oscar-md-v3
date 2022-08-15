/*============== Jangan di ganti! ==============*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let jarot = `
*––––––『 SOURCE CODE 』––––––*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya3)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'subscribe banh!',
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙎𝙤𝙪𝙧𝙘𝙚 𝘾𝙤𝙙𝙚 🐈',
               url: 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ
             }

           },
                {
               urlButton: {
               displayText: '𝙔𝙤𝙪𝙏𝙪𝙗𝙚🌍',
               url: 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ'
             }

           },
               {
             urlButton: {
               displayText: '𝙂𝙧𝙤𝙪𝙥 𝘽𝙤𝙩 𝙊𝙛𝙛𝙘',
               url: 'https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL'
             }
             
           },
               {
             quickReplyButton: {
               displayText: '𝙈𝙚𝙣𝙪',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '𝘿𝙤𝙣𝙖𝙨𝙞',
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
handler.customPrefix = /^(sc|script|sourcecode|.sc|.script|.sourcecode)$/i
handler.command = new RegExp
handler.help = ['.script,.sc']
module.exports = handler

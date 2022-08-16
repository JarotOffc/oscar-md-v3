let result = await jarot.tiktok(text)
goh = await axios.get(`https://tinyurl.com/api-create.php?url=${result.media[1].url}`)
const caption = `*乂 T I K T O K  D O W N L O A D E R*

   *› Judul :* ${result.title}
   *› Ext :* ${result.media[0].extension}
   *› Size :* ${result.media[0].formattedSize}
   *› Quality :* ${result.media[0].quality}
   *› Duration :* ${result.duration}
   *› Jumlah Media :* ${result.media.length}
   *› URL :* ${goh.data}

_Silahkan Pilih audio atau nowatermark klik tekan tombol akses di bawah yah_`
let buttons = [
{buttonId: `mp4 ${result.media[1].url}`, buttonText: {displayText: 'Nowm'}, type: 1},
{buttonId: `mp3 ${result.media[2].url}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: { url: result.media[0].url },
caption: `${caption}`,
footer: `Made With ${global.botname}`,
buttons: buttons,
headerType: 5
}
seina.sendMessage(m.chat, buttonMessage, { quoted: m })

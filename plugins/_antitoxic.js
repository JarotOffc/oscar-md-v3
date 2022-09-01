let handler = async (m, { conn, command, text }) => {
await conn.sendMessage(m.chat, { delete: m.key })
}
handler.customPrefix = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|asu|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|goblok|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i
handler.command = new RegExp

module.exports = handler

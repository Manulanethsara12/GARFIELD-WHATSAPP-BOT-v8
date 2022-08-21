// 👈 You Can change this your choice
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m online now👋*
*Manula Nethsara*
*I am 16 years old developer...*
*From Sri Lanka 🇱🇰*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/manula.nethsara.3*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+94768453015'] //👈  Enter Your number
global.premium =  ['+94768453015'] //👈  Enter Your number
global.ownernomer = '+94768453015' //👈  Enter Your number
global.ownername = 'Manula Nethsara' //👈 Enter Your name
global.botname = '❖꧁༒MR Manu༒꧂❖' //👈 Enter Your Bot name
global.footer = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙼𝙰𝙽𝚄𝙻𝙰 𝙽𝙴𝚃𝙷𝚂𝙰𝚁𝙰' //👈 Enter Your Name
global.ig = 'https://github.com/Manulanethsara12/GARFIELD-WHATSAPP-BOT-v8' // 👈 You Can change this your choice
global.region = 'Sri Lanka, N.W.P, Kurunegala' // 👈 You Can change this your choice
global.sc = 'https://github.com/Manulanethsara12/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follw Us ℹ️'// 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.facebook.com/manula.nethsara.3'// 👈 Enter your Social media link to follow now button
global.welcome = '*Welcome To The Group 🦋*' // 👈 You Can change this your choice
global.bye = '*Good Bye🐼*' // 👈 You Can change this your choice
global.packname = '❖꧁༒MR Manu༒꧂❖'  // 👈 You Can change this your choice 
global.author = 'Dark Monster🤖' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://telegra.ph/file/412ce09517ca392b20361.jpg' 
global.spoty = 'https://telegra.ph/file/6e6e3abb387957c4b4934.jpg'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
// Do Not Change 👇 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

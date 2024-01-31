const Discord = require('discord.js-selfbot-v13');
const dotenv = require('dotenv');
require('dotenv').config();
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

client.on('ready', async () => {


    console.clear();
  
    console.log(`Connectado como: ${client.user.tag}`
    );

    const r = new Discord.RichPresence()
      .setApplicationId(process.env.appid)
      .setType(process.env.appType) 
      .setURL(process.env.appURL)
      .setState(process.env.appState)
  
      .setName(process.env.appName)
      .setDetails(process.env.appDetails)
  
  
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage(process.env.appLargeImageURL)
      .setAssetsLargeText(process.env.appLargeImageText)
      .setAssetsSmallImage(process.env.appSmallImageURL)
      .setAssetsSmallText(process.env.appSmallImageText)
      .addButton(process.env.appButton1Text, process.env.appButton1URL)
      .addButton(process.env.appButton2Text,process.env.appButton2URL)
      
  
    client.user.setActivity(r);
    client.user.setPresence({ status: process.env.appStatus });
  })

  
  client.login(process.env.token)
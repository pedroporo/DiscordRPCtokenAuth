const Discord = require("discord.js-selfbot-v13");
const dotenv = require("dotenv");
require("dotenv").config();
const Discord = require("discord.js-selfbot-v13");
const dotenv = require("dotenv");
require("dotenv").config();
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
});

client.on("ready", async () => {
  app = process.env.appid;
  console.clear();

  console.log(`Connectado como: ${client.user.tag}`);
  const getExtendURL = await Discord.RichPresence.getExternal(
    client,
    process.env.appid,
    process.env.appLargeImageURL,
    process.env.appSmallImageURL
  );

  const r = new Discord.RichPresence(client)
    .setApplicationId(process.env.appid)
    .setType(process.env.appType)
    .setURL(process.env.appURL)
    .setState(process.env.appState)

    .setName(process.env.appName)
    .setDetails(process.env.appDetails)

    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(getExtendURL[0].external_asset_path)
    .setAssetsLargeText(process.env.appLargeImageText)
    .setAssetsSmallImage(getExtendURL[1].external_asset_path)
    .setAssetsSmallText(process.env.appSmallImageText);
  //Si no quereis que haiga botones poned los .addButton asi
  /*.appButton
         .appButton*/

  /*.addButton(process.env.appButton1Text, process.env.appButton1URL)
      .addButton(process.env.appButton2Text,process.env.appButton2URL)*/

  client.user.setActivity(r);
  client.user.setPresence({ status: process.env.appStatus });
});
  const r = new Discord.RichPresence(client)
    .setApplicationId(process.env.appid)
    .setType(process.env.appType)
    .setURL(process.env.appURL)
    .setState(process.env.appState)

    .setName(process.env.appName)
    .setDetails(process.env.appDetails)

    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(getExtendURL[0].external_asset_path)
    .setAssetsLargeText(process.env.appLargeImageText)
    .setAssetsSmallImage(getExtendURL[1].external_asset_path)
    .setAssetsSmallText(process.env.appSmallImageText);
  //Si no quereis que haiga botones poned los .addButton asi
  /*.appButton
         .appButton*/

  /*.addButton(process.env.appButton1Text, process.env.appButton1URL)
      .addButton(process.env.appButton2Text,process.env.appButton2URL)*/

  client.user.setActivity(r);
  client.user.setPresence({ status: process.env.appStatus });
});

client.login(process.env.token);

client.login(process.env.token);

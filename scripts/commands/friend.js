const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports.config = {
  name: "friend",
  version: "1.0.0",
  permssion: 0,
  credits: "Mohammad Nayan",
  description: "friends photo frame",
  category: "friends",
  prefix: true,
  cooldowns: 2,
};

module.exports.run = async function({ api, event, args, Users, threadID, senderID, messageID }) {
  if (module.exports.config.credits !== "Mohammad Nayan") {
    return api.sendMessage(
      "Warning: You have changed the credits (Mohammad Nayan). Please replace it with the original one.",
      threadID,
      messageID
    );
  }

  const uid = senderID;
  const info = args.join(" ");
  const userName = await Users.getNameUser(uid);

  if (!info) {
    return api.sendMessage(`${userName}, Please tag your 2 friends.`, threadID);
  }

  const mentionedIDs = Object.keys(event.mentions);

  if (mentionedIDs.length < 2) {
    return api.sendMessage("Please mention two friends to use this command.", threadID);
  }

  const id1 = mentionedIDs[0];
  const id2 = mentionedIDs[1];

  const name1 = await Users.getNameUser(uid); 
  const name2 = await Users.getNameUser(id1); 
  const name3 = await Users.getNameUser(id2); 

  api.sendMessage("Processing your image, please wait...", threadID, (err, info) => {
    setTimeout(() => api.unsendMessage(info.messageID), 5000);
  });

  try {
    const apiUrl = `https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`;
    const apiResponse = await axios.get(apiUrl);
    const apiData = apiResponse.data.api;
    const imgUrl = `${apiData}/nayan/friend?uid=${id1}&uid2=${uid}&uid3=${id2}`;

    const response = await axios.get(imgUrl, { responseType: 'arraybuffer' });
    const image = await jimp.read(response.data);
    const outputPath = `./fbcoverv2_${uid}.png`;

    await image.writeAsync(outputPath);

    const attachment = fs.createReadStream(outputPath);
    api.sendMessage({
      body: `[💏] FRIEND 1: ${name1}\n[💏] FRIEND 2: ${name2}\n[💏] FRIEND 3: ${name3}`,
      attachment
    }, threadID, () => fs.unlinkSync(outputPath)); 
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while generating the image.", threadID);
  }
};

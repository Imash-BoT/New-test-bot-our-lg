`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const postDb = require(`./postDb`);
const _๐๐๐_ = require(`./_๐๐๐_`);
require(`python-format-js`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const Ping = Pong.toFixed(4);
const date = require(`date-and-time`);
const now = new Date();
const cleanRF = require(`./cleanRF`);
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const fs = require(`fs`);
var แดแดกแดส = [
  `just joined the server!`,
  `just joined. Everyone,look busy!`,
  `just joined!`,
  `joined the party!`,
  `welcome, we were expecting you to join!`,
  `welcome, we hope you bought pizza for us!`,
  `welcome, leave your weapons by the door!`,
  `Swooosh! Just landed.`,
  `just joined. Hide your bananas!`,
  `just joined. Seems OP, please nerf!`,
  `just slid into the server!`,
  `has spawned in the server!`,
  `just showed up in the server!`,
];
var Flower = [`๐`, `๐ป`, `๐ผ`, `๐น`, `๐ธ`, `๐ฎ`];
var People = [`๐ฎ`, `๐ณ`, `๐คฑ`, `๐คฐ`, `๐`];
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
exports.welbuts = async (
  ำสวำษจีผส,
  GroupID,
  GroupMemData,
  GroupMemG,
  GroupMemBio,
  MemNum
) => {
  try {
    var ๊ฐแดแดแดสแดแดแดกแดสแดแดแดแด = await postDb.getMessage(GroupID, `setwelcome`);
    const แดกแดสแดแดแดแดสแดxแด = แดแดกแดส[Math.floor(Math.random() * แดแดกแดส.length)];
    const FlowerWel = Flower[Math.floor(Math.random() * Flower.length)];
    const PeopleWel = People[Math.floor(Math.random() * People.length)];
    `|โฌก===========================================|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |===========================================โฌก|`;
    var แดแดแดกแดสแดแดแดแด = MemNum.substring(0, MemNum.length - 15);
    `|โฌก===========================================|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |===========================================โฌก|`;
    try {
      ๐ป๐ป๐๐๐๐๐ = await ำสวำษจีผส.getProfilePicture(`${MemNum.split(`@`)[0]}@c.us`);
    } catch {
      ๐ป๐ป๐๐๐๐๐ = "https://i.postimg.cc/gcw6vq3X/Npp.png";
    }
    `|โฌก===========================================|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |===========================================โฌก|`;
    const downloader = await new Downloader({
      url: ๐ป๐ป๐๐๐๐๐,
      directory: `${__dirname}`,
      fileName: `${แดแดแดกแดสแดแดแดแด}_${FlowerWel}.png`,
      cloneFiles: false,
    });
    await downloader.download();
    let content = fs.readFileSync(`${__dirname}/${แดแดแดกแดสแดแดแดแด}_${FlowerWel}.png`);
    const media = await ำสวำษจีผส.prepareMessage(
      GroupID,
      content,
      MessageType.image,
      {
        mimetype: Mimetype.png,
      }
    );
    `|โฌก===========================================|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |===========================================โฌก|`;
    await ำสวำษจีผส
      .sendMessage(
        GroupID,
        {
          contentText: `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ โข@${แดแดแดกแดสแดแดแดแด} 
${แดกแดสแดแดแดแดสแดxแด}

โโโโโโ
โ${FlowerWel}๐๐ถ๐ผ: ${GroupMemBio.status}
โ${PeopleWel}๐๐๐ฆ๐๐๐ซ ๐๐จ๐ฎ๐ง๐ญ: ${GroupMemG}
โ๐ช๐๐ซ๐จ๐ฎ๐ฉ ๐๐๐ฆ๐: ${GroupMemData.subject}
โโโโโโโโโโโโโโ

${๊ฐแดแดแดสแดแดแดกแดสแดแดแดแด.message}`,
          footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen3 โ\nโฟ ${Clock} โข ${Ping}ms โ`,
          buttons: [
            {
              buttonId: `${แดแดษช}help`,
              buttonText: { displayText: `${แดแดษช}help` },
              type: 1,
            },
            {
              buttonId: `${แดแดษช}menu`,
              buttonText: { displayText: `${แดแดษช}menu` },
              type: 1,
            },
            {
              buttonId: `${แดแดษช}repo`,
              buttonText: { displayText: `${แดแดษช}repo` },
              type: 1,
            },
          ],
          headerType: 4,
          imageMessage: media.message.imageMessage,
        },
        MessageType.buttonsMessage,
        {
          contextInfo: { mentionedJid: [MemNum] },
        }
      )
      .then(cleanRF.cleanRF(`${__dirname}/${แดแดแดกแดสแดแดแดแด}_${FlowerWel}.png`))
      .catch((Error) => console.log(Error));
    `|โฌก===========================================|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |===========================================โฌก|`;
  } catch (Error) {
    console.log(
      `โฌก==========================โฌก    ๐น ` +
        Error +
        `๐น    โฌก==========================โฌก`
    );
  }
};
`|๐น|`;
`|๐น|`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;

`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { SakuraTenorMaker } = require(`./SakuraTenorMaker`);
const _๐๐๐_ = require(`./_๐๐๐_`);
const โฮนัฮทั = require(`./oShit`);
const ffmpeg = require(`fluent-ffmpeg`);
const cleanRF = require(`./cleanRF`);
require(`python-format-js`);
const ๊ฐแดแดแด = require(`./oShit`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const Downloader = require(`nodejs-file-downloader`);
const anime = require(`anime-actions`);
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const vers = require(`../package.json`);
const Ping = Pong.toFixed(4);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
exports.SakuraGM = async (ำสวำษจีผส, mozart, ึวำสสว) => {
  var SakuraGMid = mozart.key.id;
  var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
  var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
  const defaultnm = ึวำสสว.commandName;
  const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  if (ึวำสสว.isReply) {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    var Receiver = mozart.message.extendedTextMessage.contextInfo.participant;
    var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
    var SakuraGMid = mozart.message.extendedTextMessage.contextInfo.stanzaId;
  }
  const link = SakuraTenorMaker(FinalName.toLowerCase());
  `โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
  const jsoncool = JSON.parse(fs.readFileSync(`./Sakura๐ฐ๏ธServer/Coolist.json`));
  await jsoncool.push(ึวำสสว.sender);
  fs.writeFileSync(`./Sakura๐ฐ๏ธServer/Coolist.json`, JSON.stringify(jsoncool));
  console.log("ID Added " + ึวำสสว.sender);
  setTimeout(async (error) => {
    if (error) console.log(error);
    await jsoncool.splice(ึวำสสว.sender);
    fs.writeFileSync(`./Sakura๐ฐ๏ธServer/Coolist.json`, JSON.stringify(jsoncool));
    console.log("ID Removed " + ึวำสสว.sender);
  }, 10000);
  `โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
  if (ึวำสสว.isReply) {
    const downloader = await new Downloader({
      url: link,
      directory: `${__dirname}`,
      fileName: `${FinalName}_${SakuraGMid}.gif`,
      cloneFiles: false,
    });
    try {
      await downloader.download();
      await ffmpeg(`${__dirname}/${FinalName}_${SakuraGMid}.gif`)
        .outputOptions([
          `-pix_fmt yuv420p`,
          `-c:v libx264`,
          `-movflags +faststart`,
          `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
        ])
        .save(`${__dirname}/${FinalName}_${SakuraGMid}.mp4`)
        .on(`end`, async () => {
          console.log(`Finished`);
          await ำสวำษจีผส
            .sendMessage(
              ึวำสสว.chatId,
              fs.readFileSync(`${__dirname}/${FinalName}_${SakuraGMid}.mp4`),
              MessageType.video,
              {
                contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
                quoted: mozart,
                mimetype: `video/gif`,
                caption: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ 

โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
โ๐ช ๐๐ซ๐จ๐ฆ: @${ีกษฆึึษีผศถษฆวศถีผสส}
โ๐ ๐๐จ: @${ึษสึึีผษขึศถีผสส}
โโโโโโโโโโโโโโ`,
              }
            )
            .then(
              cleanRF.cleanRF(
                `${__dirname}/${FinalName}_${SakuraGMid}.gif`,
                `${__dirname}/${FinalName}_${SakuraGMid}.mp4`
              )
            );
        })
        .on(`Error`, async (Error) => {
          console.log(Error);
        });
    } catch (Error) {
      console.log(Error);
    }
  }

  if (!ึวำสสว.isReply) {
    const downloader = await new Downloader({
      url: link,
      directory: `${__dirname}`,
      fileName: `${FinalName}_${SakuraGMid}.gif`,
      cloneFiles: false,
    });
    try {
      await downloader.download();
      ffmpeg(`${__dirname}/${FinalName}_${SakuraGMid}.gif`)
        .outputOptions([
          `-pix_fmt yuv420p`,
          `-c:v libx264`,
          `-movflags +faststart`,
          `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
        ])
        .save(`${__dirname}/${FinalName}_${SakuraGMid}.mp4`)
        .on(`end`, async () => {
          console.log(`Finished`);
          await ำสวำษจีผส
            .sendMessage(
              ึวำสสว.chatId,
              fs.readFileSync(`${__dirname}/${FinalName}_${SakuraGMid}.mp4`),
              MessageType.video,
              {
                contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
                quoted: mozart,
                mimetype: `video/gif`,
                caption: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ 

โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
โ๐ช ๐๐ซ๐จ๐ฆ: @${ีกษฆึึษีผศถษฆวศถีผสส}
โโโโโโโโโโโโโโ`,
              }
            )
            .then(
              cleanRF.cleanRF(
                `${__dirname}/${FinalName}_${SakuraGMid}.gif`,
                `${__dirname}/${FinalName}_${SakuraGMid}.mp4`
              )
            )
            .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
        })
        .on(`error`, async (Error) => {
          console.log(Error);
        });
    } catch (Error) {
      console.log(Error);
    }
  }
};
`|๐น|`;
`|๐น|`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;

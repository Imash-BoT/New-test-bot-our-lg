`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
`|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
const Sakura_Buttons = require(`../../Sakura๐ฐ๏ธServer/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura๐ฐ๏ธServer/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura๐ฐ๏ธServer/cleanRF`);
const _๐๐๐_ = require(`../../Sakura๐ฐ๏ธServer/_๐๐๐_`);
const ๊ฐแดแดแด = require(`../../Sakura๐ฐ๏ธServer/oShit`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const getVideoId = require(`get-video-id`);
const ffmpeg = require(`fluent-ffmpeg`);
const readline = require(`readline`);
const ytdl = require(`ytdl-core`);
const yts = require(`yt-search`);
var path = require(`path`);
const fs = require(`fs`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
module.exports = {
  name: newScpt,
  ึวำสสวำวษจสึ: `*${แดแดษช}${newScpt}* _song name_
๐๐๐๐๐ซ๐๐ก ๐๐จ๐ฎ๐๐ฎ๐๐? _${แดแดษช}ytsearch_`,
  async handle(ำสวำษจีผส, mozart, ึวำสสว, Needs, ๊ฑษชแดสแดแด, Clock, Ping) {
    try {
      var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
      var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
      const defaultnm = ึวำสสว.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      if (Needs.length === 0) {
        var ๐Usage = ๊ฑษชแดสแดแด.get(ึวำสสว.commandName);
        var แดษชแดขแดแดษชแดแดสแด =
          ๐Usage.ึวำสสวำวษจสึ === undefined ? `Null` : ๐Usage.ึวำสสวำวษจสึ;
        const แดสษขแดแดแดษดแด = require(`../../Sakura๐ฐ๏ธServer/ษดแดแดแดแดสษขแดแดแดษดแด`);
        return แดสษขแดแดแดษดแด.ษดแดแดแดแดสษขแดแดแดษดแด(
          ำสวำษจีผส,
          mozart,
          ึวำสสว,
          ีกษฆึึษีผศถษฆวศถ,
          ีกษฆึึษีผศถษฆวศถีผสส,
          ึวำสสว.commandName,
          แดษชแดขแดแดษชแดแดสแด
        );
      }
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      if (ึวำสสว.body.includes(`http`)) {
        var ๐Usage = ๊ฑษชแดสแดแด.get(ึวำสสว.commandName);
        var แดษชแดขแดแดษชแดแดสแด =
          ๐Usage.ึวำสสวำวษจสึ === undefined ? `Null` : ๐Usage.ึวำสสวำวษจสึ;
        const แดสษขแดแดแดษดแด = require(`../../Sakura๐ฐ๏ธServer/ษดแดแดแดแดสษขแดแดแดษดแด`);
        return แดสษขแดแดแดษดแด.ษดแดแดแดแดสษขแดแดแดษดแด(
          ำสวำษจีผส,
          mozart,
          ึวำสสว,
          ีกษฆึึษีผศถษฆวศถ,
          ีกษฆึึษีผศถษฆวศถีผสส,
          ึวำสสว.commandName,
          แดษชแดขแดแดษชแดแดสแด
        );
      }
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      const Bagde = require(`../../Sakura๐Goose/badge`);
      const ms = require(`parse-ms`);
      Bagde.findOne(
        {
          ID: ึวำสสว.sender,
        },
        async (Error, userBadge) => {
          if (Error) return console.log(Error);
          if (!userBadge) {
            var newUser = new Bagde({
              ID: ึวำสสว.sender,
              Badge: `๐งตสแด๊ฑษชแด-10แดแดแดแดแดษดแด๊ฑ`,
              value: `True`,
              Limits: 10,
              CurrentLimitTime: Date.now(),
              PermanentLimitTime: 86400000,
            });
            await newUser
              .save()
              .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
            return Sakura_Buttons.MTB(
              ำสวำษจีผส,
              mozart,
              ึวำสสว,
              `*๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส},*

โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}  
โ๐ค *User Added To Database For First Time!*
โ๐ฆ _Try ${แดแดษช}${defaultnm} Again!_
โโโโโโโโโโโโโโ`
            );
          } else {
            `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
            console.log(userBadge);
            var clock =
              userBadge.PermanentLimitTime -
              (Date.now() - userBadge.CurrentLimitTime);
            if (clock > 0 && userBadge.Limits == 0) {
              userBadge.value = `False`;
              await userBadge
                .save()
                .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
            }
            `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
            if (clock > 0 && !userBadge.Limits == 0) {
              userBadge.Limits = userBadge.Limits - 1;
              userBadge.value = `True`;
              await userBadge
                .save()
                .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
            }
            `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
            if (clock < 0 && userBadge.Limits == 0) {
              if (userBadge.Badge === `๐งตสแด๊ฑษชแด-10แดแดแดแดแดษดแด๊ฑ`) {
                userBadge.Limits = 10;
              } else if (userBadge.Badge === `๐ฅสสแดษดแดขแด-20แดแดแดแดแดษดแด๊ฑ`) {
                userBadge.Limits = 20;
              } else if (userBadge.Badge === `๐ฅ๊ฑษชสแด?แดส-40แดแดแดแดแดษดแด๊ฑ`) {
                userBadge.Limits = 40;
              } else if (userBadge.Badge === `๐ฅษขแดสแด-60แดแดแดแดแดษดแด๊ฑ`) {
                userBadge.Limits = 60;
              } else if (userBadge.Badge === `๐แดสแดแดษชษดแดแด-80แดแดแดแดแดษดแด๊ฑ`) {
                userBadge.Limits = 80;
              } else if (userBadge.Badge === `๐แดษชแดแดแดษดแด-100แดแดแดแดแดษดแด๊ฑ`) {
                userBadge.Limits = 100;
              }
              userBadge.CurrentLimitTime = Date.now();
              userBadge.value = `True`;
              await userBadge
                .save()
                .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
            }
          }
          `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
          const hold = require(`../../Sakura๐ฐ๏ธServer/Hold`);
          hold.Hold(ึวำสสว);
          `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
          if (!ึวำสสว.fromMe && userBadge.value === `False`) {
            let time = ms(
              userBadge.PermanentLimitTime -
                (Date.now() - userBadge.CurrentLimitTime)
            );
            return Sakura_Buttons.MTB(
              ำสวำษจีผส,
              mozart,
              ึวำสสว,
              `๐ก๐๐ข๐ฉ: _Buy Higher Badges Using ${แดแดษช}shop_

โโโโโโโโโ ๐๐ฆ๐ฉ๐จ๐ซ๐ญ๐๐ง๐ญ
โโ๏ธ ๐๐ฎ๐ฑ๐ด๐ฒ: ${userBadge.Badge}
โ๐ค ๐ฅ๐ฒ๐ป๐ฒ๐๐_๐๐ป: ${time.hours}h ${time.minutes}m ${time.seconds}s
โโโโโโโโโโโโโโ`
            );
          }
          `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
          var TubeSearch = await yts(Needs.join(` `));
          var Tube = TubeSearch.videos.slice(0, 1);
          console.log(Tube[0]);
          Tube.forEach(async function (Found) {
            if (Found.seconds > `1200`) {
              userBadge.Limits = userBadge.Limits + 1;
              await userBadge
                .save()
                .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
              return Sakura_Buttons.MIB(
                ำสวำษจีผส,
                mozart,
                ึวำสสว,
                `โญ๐๐ฎ๐๐ข๐จ ๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส}, 
๐ฃ๐น๐ฒ๐ฎ๐๐ฒ ๐๐ต๐ผ๐ผ๐๐ฒ ๐ฆ๐บ๐ฎ๐น๐น๐ฒ๐ฟ ๐๐ฎ๐๐ข๐จ ๐ง๐ต๐ฒ๐ป 20-๐บ๐ถ๐ป๐๐๐ฒ๐!

โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
โ๐ป ๐๐ข๐ญ๐ฅ๐: ${Found.title}
โโฐ ๐๐ฎ๐ซ๐๐ญ๐ข๐จ๐ง: ${Found.timestamp}
โ๐ ๐๐ข๐ง๐ค: ${Found.url}
โโโโโโโโโโโโโโ`,
                Found.thumbnail
              );
            }
            `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
            Sakura_Buttons.MIB(
              ำสวำษจีผส,
              mozart,
              ึวำสสว,
              `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส},
โโโโโโ ๐ฃ๐น๐ฒ๐ฎ๐๐ฒ ๐๐ฎ๐ถ๐!
โโญ ๐๐ถ๐น๐ฒ๐ง๐๐ฝ๐ฒ: _Audio_
โโฐ ๐ช๐ฎ๐ถ๐๐ง๐ถ๐บ๐ฒ: _Depends on Length of file._
โโโโโโโโโโโโโโ

โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
โ๐ป ๐๐ข๐ญ๐ฅ๐: ${Found.title}
โ๐ ๐๐ข๐๐ฐ๐ฌ: ${Found.views}
โโฐ ๐๐ฎ๐ซ๐๐ญ๐ข๐จ๐ง: ${Found.timestamp}
โโ๏ธ ๐๐ฎ๐ญ๐ก๐จ๐ซ: ${Found.author.name}
โ๐ ๐๐๐ฌ๐๐ซ๐ข๐ฉ๐ญ๐ข๐จ๐ง: ${Found.description}
โ๐ ๐๐ข๐ง๐ค: ${Found.url}
โโโโโโโโโโโโโโ`,
              Found.thumbnail
            );
            `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
            try {
              const Link = Found.url;
              const { id } = getVideoId(Link);
              var YouFile = Date.now() + `_` + id + `_` + `.mp3`;
              var YouStream = ytdl(Link, {
                quality: `highestaudio`,
              });
            } catch (Error) {
              console.log(`โโโโโโฌก|โญ๐๐ญ๐๐ฅ-๐๐จ๐ซ๐ ๐๐ซ๐ซ๐จ๐ซ: ` + Error);
              userBadge.Limits = userBadge.Limits + 1;
              await userBadge
                .save()
                .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
              return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart);
            }
            `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
            try {
              ffmpeg(YouStream)
                .audioBitrate(128)
                .save(YouFile)
                .on(`progress`, (p) => {
                  readline.cursorTo(process.stdout, 0);
                  process.stdout.write(`โโโโโโฌก|๐ฏ๐๐ซ๐จ๐?๐ซ๐๐ฌ๐ฌ: ${p.targetSize}kb`);
                })
                .on(`end`, async () => {
                  console.clear();
                  console.log(`โโโโโโฌก|๐ฅ๐๐จ๐ฐ๐ง๐ฅ๐จ๐๐ ๐๐ข๐ง๐ข๐ฌ๐๐: ` + YouFile);
                  return await ำสวำษจีผส
                    .sendMessage(
                      ึวำสสว.chatId,
                      fs.readFileSync(YouFile),
                      MessageType.audio,
                      {
                        quoted: mozart,
                        mimetype: `audio/mp4`,
                      }
                    )
                    .then(cleanRF.cleanRF(YouFile))
                    .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
                })
                .on(`error`, async (Error) => {
                  console.log(`โโโโโโฌก|๐๐๐จ๐ฐ๐ง๐ฅ๐จ๐๐ ๐๐ซ๐ซ๐จ๐ซ: ` + Error);
                  userBadge.Limits = userBadge.Limits + 1;
                  await userBadge
                    .save()
                    .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
                  return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart);
                });
            } catch (Error) {
              console.log(`โโโโโโฌก|๐บ๐๐๐ฆ๐ฉ๐๐? ๐๐ซ๐ซ๐จ๐ซ: ` + Error);
              userBadge.Limits = userBadge.Limits + 1;
              await userBadge
                .save()
                .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
              return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart);
            }
            `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
          });
        }
      );
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
    } catch (Error) {
      ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart);
      return;
    }
  },
};
`|๐น|`;
`|๐น|`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;

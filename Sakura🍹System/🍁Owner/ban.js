`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
`|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
const Sakura_Buttons = require(`../../Sakura๐ฐ๏ธServer/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura๐ฐ๏ธServer/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const BanList = require(`../../Sakura๐ฐ๏ธServer/BanList`);
const ๊ฐแดแดแด = require(`../../Sakura๐ฐ๏ธServer/oShit`);
const motor = require(`../../Sakura๐ฐ๏ธServer/motor`);
const _๐๐๐_ = require(`../../Sakura๐ฐ๏ธServer/_๐๐๐_`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
module.exports = {
  name: newScpt,
  async handle(ำสวำษจีผส, mozart, ึวำสสว, Needs, ๊ฑษชแดสแดแด, Clock, Ping) {
    try {
      var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
      var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
      const defaultnm = ึวำสสว.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      if (!ึวำสสว.fromMe && !ึวำสสว.isSenderDev) {
        return Sakura_Buttons.MIB(
          ำสวำษจีผส,
          mozart,
          ึวำสสว,
          `*โ Owner Only | You Are Not Allowed! โ*`,
          _๐๐๐_.ษดแดแดแดแดแดษชษด
        );
      }
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      if (ึวำสสว.isPm && ึวำสสว.fromMe) {
        let แดแดแดสแดษด = ึวำสสว.chatId;
        BanList.addBanlistUser(แดแดแดสแดษด, ``);
        return Sakura_Static.MGS(
          ำสวำษจีผส,
          mozart,
          ึวำสสว,
          `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส} 

โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
โ๐๐๐๐ง๐ง๐๐: ${แดแดแดสแดษด.substring(0, แดแดแดสแดษด.indexOf(`@`))}
โ๐ก๏ธ๐๐ฎ๐๐จ ๐๐๐ง: _Banlisted from using the bot!_
โโ๏ธ๐๐ง๐?๐ข๐ง๐: โสสแด
โโโโโโโโโโโโโโ`,
          `./Sakuraโฃ๏ธReactor/ึวำสสวโข.mp4`
        );
        `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      } else {
        if (Needs.length > 0) {
          let แดแดแดสแดษด = await motor.nomentioncontact(Needs, ำสวำษจีผส, ึวำสสว);
          if (แดแดแดสแดษด === undefined) return;
          แดแดแดสแดษด += `@s.whatsapp.net`;
          if (ึวำสสว.owner === แดแดแดสแดษด) {
            return Sakura_Buttons.MIB(
              ำสวำษจีผส,
              mozart,
              ึวำสสว,
              `*โ Owner Only | You Are Not Allowed! โ*`,
              _๐๐๐_.ษดแดแดแดแดแดษชษด
            );
          }
          `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
          BanList.addBanlistUser(แดแดแดสแดษด, ึวำสสว.chatId);
          return Sakura_Static.MGS(
            ำสวำษจีผส,
            mozart,
            ึวำสสว,
            `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส} 

โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
โ๐๐๐๐ง๐ง๐๐: ${แดแดแดสแดษด.substring(0, แดแดแดสแดษด.indexOf(`@`))}
โ๐ก๏ธ๐๐ฎ๐๐จ ๐๐๐ง: _Banlisted from using the bot in this group!_
โโ๏ธ๐๐ง๐?๐ข๐ง๐: โสสแด
โโโโโโโโโโโโโโ`,
            `./Sakuraโฃ๏ธReactor/ึวำสสวโข.mp4`
          );
          `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
        } else if (ึวำสสว.isReply) {
          let แดแดแดสแดษด = ึวำสสว.replyParticipant;
          if (ึวำสสว.owner === แดแดแดสแดษด) {
            return Sakura_Buttons.MIB(
              ำสวำษจีผส,
              mozart,
              ึวำสสว,
              `*โ Owner Only | You Are Not Allowed! โ*`,
              _๐๐๐_.ษดแดแดแดแดแดษชษด
            );
          }
          `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
          BanList.addBanlistUser(แดแดแดสแดษด, ึวำสสว.chatId);
          return Sakura_Static.MGS(
            ำสวำษจีผส,
            mozart,
            ึวำสสว,
            `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส} 

โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
โ๐๐๐๐ง๐ง๐๐: ${แดแดแดสแดษด.substring(0, แดแดแดสแดษด.indexOf(`@`))}
โ๐ก๏ธ๐๐ฎ๐๐จ ๐๐๐ง: _Banlisted from using the bot in this group!_
โโ๏ธ๐๐ง๐?๐ข๐ง๐: โสสแด
โโโโโโโโโโโโโโ`,
            `./Sakuraโฃ๏ธReactor/ึวำสสวโข.mp4`
          );
          `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
        } else {
          BanList.addBanlistUser(``, ึวำสสว.chatId);
          return Sakura_Static.MGS(
            ำสวำษจีผส,
            mozart,
            ึวำสสว,
            `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส} 

โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
โ๐๐๐ซ๐จ๐ฎ๐ฉ ๐๐๐ง๐ง๐๐: ${ึวำสสว.groupName}
โ๐ก๏ธ๐๐ฎ๐๐จ ๐๐๐ง: _Bot has been disabled for the group!_
โโ๏ธ๐๐ง๐?๐ข๐ง๐: โสสแด
โโโโโโโโโโโโโโ`,
            `./Sakuraโฃ๏ธReactor/ึวำสสวโข.mp4`
          );
        }
      }
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
    } catch (Error) {
      ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart);
      return;
    }
  },
};
`|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
`|๐น|`;
`|๐น|`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;

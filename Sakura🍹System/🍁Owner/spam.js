`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
`|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
const Sakura_Buttons = require(`../../Sakura๐ฐ๏ธServer/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura๐ฐ๏ธServer/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _๐๐๐_ = require(`../../Sakura๐ฐ๏ธServer/_๐๐๐_`);
const ๊ฐแดแดแด = require(`../../Sakura๐ฐ๏ธServer/oShit`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
module.exports = {
  name: newScpt,
  ึวำสสวำวษจสึ: `${แดแดษช}spam <amount> <message>`,
  async handle(ำสวำษจีผส, mozart, ึวำสสว, Needs, ๊ฑษชแดสแดแด, Clock, Ping) {
    try {
      var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
      var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
      const defaultnm = ึวำสสว.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      const hold = require("../../Sakura๐ฐ๏ธServer/Hold");
      hold.Hold(ึวำสสว);
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

      let count = Number(Needs.shift());
      if (isNaN(count)) {
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
      if (count > 0) {
        count = parseInt(count);
      } else {
        Sakura_Static.MGS(
          ำสวำษจีผส,
          mozart,
          ึวำสสว,
          `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส},


โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
Spam Amount can't be zero.`,
          `./Sakuraโฃ๏ธReactor/ึวำสสวโข.mp4`
        );
        return 0;
      }
      if (Needs.length) {
        let text = Needs.join(` `);
        for (let i = 0; i < count; i++)
          await ำสวำษจีผส
            .sendMessage(ึวำสสว.chatId, text, MessageType.text)
            .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
      } else {
        return Sakura_Static.MGS(
          ำสวำษจีผส,
          mozart,
          ึวำสสว,
          `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส},


โโโโโโ๐ฟ๐๐จ๐ฉ๐ข๐: ${FinalName}
No text found for spamming!!! Please read /help spam.`,
          `./Sakuraโฃ๏ธReactor/ึวำสสวโข.mp4`
        );
      }
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

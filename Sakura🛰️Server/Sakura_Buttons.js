`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _๐๐๐_ = require(`./_๐๐๐_`);
const ๊ฐแดแดแด = require(`./oShit`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const Ping = Pong.toFixed(4);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Sakura_Text_But = (ำสวำษจีผส, mozart, ึวำสสว, MainText) => {
  if (ึวำสสว.isReply) {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    var Receiver = mozart.message.extendedTextMessage.contextInfo.participant;
    var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
    const buttonMessage = {
      contentText: MainText,
      footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
      buttons: [
        {
          buttonId: `${แดแดษช}help`,
          buttonText: { displayText: `${แดแดษช}help` },
          type: 1,
        },
      ],
      headerType: 1,
    };
    ำสวำษจีผส
      .sendMessage(ึวำสสว.chatId, buttonMessage, MessageType.buttonsMessage, {
        quoted: mozart,
        contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
      })
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
  } else {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    const defaultnm = ึวำสสว.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    const buttonMessage = {
      contentText: MainText,
      footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
      buttons: [
        {
          buttonId: `${แดแดษช}help`,
          buttonText: { displayText: `${แดแดษช}help` },
          type: 1,
        },
      ],
      headerType: 1,
    };
    ำสวำษจีผส
      .sendMessage(ึวำสสว.chatId, buttonMessage, MessageType.buttonsMessage, {
        quoted: mozart,
        contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
      })
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
  }
};
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Sakura_Image_But = async (ำสวำษจีผส, mozart, ึวำสสว, MainText, MediaUrl) => {
  if (ึวำสสว.isReply) {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    var Receiver = mozart.message.extendedTextMessage.contextInfo.participant;
    var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
    const media = await ำสวำษจีผส.prepareMessage(
      ึวำสสว.chatId,
      { url: MediaUrl },
      MessageType.image,
      { mimetype: Mimetype.png }
    );
    return await ำสวำษจีผส
      .sendMessage(
        ึวำสสว.chatId,
        {
          contentText: MainText,
          footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
          buttons: [
            {
              buttonId: `${แดแดษช}help`,
              buttonText: { displayText: `${แดแดษช}help` },
              type: 1,
            },
          ],
          headerType: 4,
          imageMessage: media.message.imageMessage,
        },
        MessageType.buttonsMessage,
        {
          quoted: mozart,
          contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
        }
      )
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
  } else {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    const defaultnm = ึวำสสว.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    const media = await ำสวำษจีผส.prepareMessage(
      ึวำสสว.chatId,
      { url: MediaUrl },
      MessageType.image,
      { mimetype: Mimetype.png }
    );
    return await ำสวำษจีผส
      .sendMessage(
        ึวำสสว.chatId,
        {
          contentText: MainText,
          footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
          buttons: [
            {
              buttonId: `${แดแดษช}help`,
              buttonText: { displayText: `${แดแดษช}help` },
              type: 1,
            },
          ],
          headerType: 4,
          imageMessage: media.message.imageMessage,
        },
        MessageType.buttonsMessage,
        {
          quoted: mozart,
          contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
        }
      )
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
  }
};
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Sakura_Video_But = async (ำสวำษจีผส, mozart, ึวำสสว, MainText, MediaUrl) => {
  if (ึวำสสว.isReply) {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    var Receiver = mozart.message.extendedTextMessage.contextInfo.participant;
    var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
    const media = await ำสวำษจีผส.prepareMessage(
      ึวำสสว.chatId,
      { url: MediaUrl },
      MessageType.video,
      { mimetype: `video/mp4` }
    );
    return await ำสวำษจีผส
      .sendMessage(
        ึวำสสว.chatId,
        {
          contentText: MainText,
          footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
          buttons: [
            {
              buttonId: `${แดแดษช}help`,
              buttonText: { displayText: `${แดแดษช}help` },
              type: 1,
            },
          ],
          headerType: 5,
          videoMessage: media.message.videoMessage,
        },
        MessageType.buttonsMessage,
        {
          quoted: mozart,
          contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
        }
      )
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
  } else {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    const defaultnm = ึวำสสว.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    const media = await ำสวำษจีผส.prepareMessage(
      ึวำสสว.chatId,
      { url: MediaUrl },
      MessageType.video,
      { mimetype: `video/mp4` }
    );
    return await ำสวำษจีผส
      .sendMessage(
        ึวำสสว.chatId,
        {
          contentText: MainText,
          footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
          buttons: [
            {
              buttonId: `${แดแดษช}help`,
              buttonText: { displayText: `${แดแดษช}help` },
              type: 1,
            },
          ],
          headerType: 5,
          videoMessage: media.message.videoMessage,
        },
        MessageType.buttonsMessage,
        {
          quoted: mozart,
          contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
        }
      )
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
  }
};
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Sakura_GIF_But = async (ำสวำษจีผส, mozart, ึวำสสว, MainText, MediaUrl) => {
  if (ึวำสสว.isReply) {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    var Receiver = mozart.message.extendedTextMessage.contextInfo.participant;
    var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
    const media = await ำสวำษจีผส.prepareMessage(
      ึวำสสว.chatId,
      { url: MediaUrl },
      MessageType.video,
      { mimetype: `video/gif` }
    );
    return await ำสวำษจีผส
      .sendMessage(
        ึวำสสว.chatId,
        {
          contentText: MainText,
          footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
          buttons: [
            {
              buttonId: `${แดแดษช}help`,
              buttonText: { displayText: `${แดแดษช}help` },
              type: 1,
            },
          ],
          headerType: 5,
          videoMessage: media.message.videoMessage,
        },
        MessageType.buttonsMessage,
        {
          quoted: mozart,
          contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
        }
      )
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
  } else {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    const defaultnm = ึวำสสว.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    const media = await ำสวำษจีผส.prepareMessage(
      ึวำสสว.chatId,
      { url: MediaUrl },
      MessageType.video,
      { mimetype: `video/gif` }
    );
    return await ำสวำษจีผส
      .sendMessage(
        ึวำสสว.chatId,
        {
          contentText: MainText,
          footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
          buttons: [
            {
              buttonId: `${แดแดษช}help`,
              buttonText: { displayText: `${แดแดษช}help` },
              type: 1,
            },
          ],
          headerType: 5,
          videoMessage: media.message.videoMessage,
        },
        MessageType.buttonsMessage,
        {
          quoted: mozart,
          contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
        }
      )
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
  }
};
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Sakura_VideoAudio_But = async (
  ำสวำษจีผส,
  mozart,
  ึวำสสว,
  MainText,
  MediaUrl
) => {
  if (ึวำสสว.isReply) {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    var Receiver = mozart.message.extendedTextMessage.contextInfo.participant;
    var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
  } else {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    const defaultnm = ึวำสสว.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  }
  const media = ำสวำษจีผส.prepareMessage(
    ึวำสสว.chatId,
    { url: MediaUrl },
    MessageType.mp4Audio,
    { mimetype: `audio/mp4` }
  );
  const buttonMessages = {
    videoMessage: media.message.videoMessage,
    contentText: MainText,
    footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
    buttons: [
      {
        buttonId: `${แดแดษช}help`,
        buttonText: { displayText: `${แดแดษช}help` },
        type: 1,
      },
    ],
    headerType: 5,
  };
  ำสวำษจีผส
    .sendMessage(ึวำสสว.chatId, buttonMessages, MessageType.buttonsMessage, {
      mimetype: Mimetype.mp4Audio,

      quoted: mozart,
    })
    .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
};
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Sakura_Location_But = async (
  ำสวำษจีผส,
  mozart,
  ึวำสสว,
  MainText,
  MediaUrl
) => {
  if (ึวำสสว.isReply) {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    var Receiver = mozart.message.extendedTextMessage.contextInfo.participant;
    var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
  } else {
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    const defaultnm = ึวำสสว.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  }
  const media = ำสวำษจีผส.prepareMessage(
    ึวำสสว.chatId,
    { url: MediaUrl },
    MessageType.location
  );
  const buttonMessages = {
    locationMessage: media.message.locationMessage,
    contentText: MainText,
    footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐ ๐๐จ๐ญ โข ๐๐ง๐?๐ข๐ง๐: kryozen${vers.vers} โ\nโฟ ${Clock} โข ${Ping}ms โ`,
    buttons: [
      {
        buttonId: `${แดแดษช}help`,
        buttonText: { displayText: `${แดแดษช}help` },
        type: 1,
      },
    ],
    headerType: 6,
  };
  ำสวำษจีผส
    .sendMessage(ึวำสสว.chatId, buttonMessages, MessageType.buttonsMessage, {
      quoted: mozart,
    })
    .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, mozart));
};
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
module.exports = {
  MTB: Sakura_Text_But,
  MGB: Sakura_GIF_But,
  MIB: Sakura_Image_But,
  MVB: Sakura_Video_But,
  MLB: Sakura_Location_But,
  MAB: Sakura_VideoAudio_But,
};
`|๐น|`;
`|๐น|`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;

`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`๐นึวำสสวโข.env`)) {
  require(`dotenv`).config({
    path: `./๐นึวำสสวโข.env`,
  });
} else {
  require(`dotenv`);
}
const env = {
  SAKURA: process.env.SAKURA === undefined ? `Null` : process.env.SAKURA,
  SAKURAMDB:
    process.env.SAKURAMDB === undefined ? `Null` : process.env.SAKURAMDB,
  HEROKU_API_KEY:
    process.env.HEROKU_API_KEY === undefined
      ? `Null`
      : process.env.HEROKU_API_KEY,
  HEROKU_APP_NAME:
    process.env.HEROKU_APP_NAME === undefined
      ? `Null`
      : process.env.HEROKU_APP_NAME,
  IMDB: `5e36f0db`,
  FOXTROT: `^[/]`,
  CCD: process.env.CCD === undefined ? `91` : process.env.CCD,
  OCR: `9ffb44def388957`,
  TEN: `0G2R8PTUGMRP`,
  ษดแดแดแดแดแดแดแดษชษด: `./Sakuraโฃ๏ธReactor/ึวำสสวNotMeAdmin.png`,
  ษดแดแดแดแดแดษชษด: `./Sakuraโฃ๏ธReactor/ึวำสสวMemErr.png`,
  WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
  ERROR: `https://i.postimg.cc/XqPBcyq0/image.png`,
  INVL: `https://i.postimg.cc/XqPBcyq0/image.png`,
  MEE: `https://i.postimg.cc/XqPBcyq0/image.png`,
  HASH: `https://chat.whatsapp.com/LKN8uVBd8ucHRHofz0jBSd`,
  HASH2: `https://chat.whatsapp.com/HKO5WLEZxMe3xWCyiv6vBu`,
  DEV: `918436686758,917430922909,918250889325`,
  HEROKU: process.env.HEROKU,
  SAKURAQL: (process.env.SAKURAQL =
    process.env.SAKURAQL === undefined
      ? `./Sakuraโฃ๏ธReactor/๐นึวำสสวโข.db`
      : process.env.SAKURAQL),
  POSTQL:
    process.env.SAKURAQL === `./Sakuraโฃ๏ธReactor/๐นึวำสสวโข.db`
      ? new Sequelize({ dialect: `sqlite`, storage: process.env.SAKURAQL })
      : new Sequelize(process.env.SAKURAQL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false },
          },
        }),
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
};
module.exports = env;
`|๐น|`;
`|๐น|`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;

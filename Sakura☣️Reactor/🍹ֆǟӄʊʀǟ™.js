`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
(async () => {
  const { ึวำสสว, ำสวำษจีผส } = require(`../Sakura๐ฐ๏ธServer/๐นึวำสสวโข`);
  const _๐๐๐_ = require(`../Sakura๐ฐ๏ธServer/_๐๐๐_`);
  const ึวำสสวgoose = require("mongoose");
  const Kolor = require(`chalk`);
  `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
  try {
    const แดษชแดขแดแดษชษขษชแด = require(`simple-git`)();
    await แดษชแดขแดแดษชษขษชแด.fetch();
    var ๊ฐแดแดแดสแดแดแดษชแดขแดแดษช = await แดษชแดขแดแดษชษขษชแด.log([`KrakinzLab..origin/KrakinzLab`]);
    if (๊ฐแดแดแดสแดแดแดษชแดขแดแดษช.total != 0) {
      require(`simple-git`)()
        .exec(async () => {
          console.log(
            Kolor.green(`๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @Owner

โโโโโโ๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐)
โ๐กINFO โฌฐ ๐๐๐ฐ ๐๐ฉ๐๐๐ญ๐ ๐ฉ๐๐ง๐๐ข๐ง๐ , ๐ฎ๐ฉ๐๐๐ญ๐ข๐ง๐ ...
โโโโโโโโโโโโโโ`)
          );
        })
        .pull(async (Error, update) => {
          if (Error) {
            try {
              const mergeSummary = await แดษชแดขแดแดษชษขษชแด.merge();
              console.log(
                Kolor.green(`๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @Owner

โโโโโโ๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐)
โ๐กINFO โฌฐ _๐๐๐๐ผ ๐จ๐ฝ๐ฑ๐ฎ๐๐ฒ๐ฑ ๐ช๐ถ๐๐ต ๐ก๐ฒ๐ ๐๐ผ๐ฐ๐ฎ๐น ๐ ๐ฒ๐ฟ๐ด๐ฒ..._
โ ๐๐ฎ๐๐ฒ๐๐ ๐๐ต๐ฎ๐ป๐ด๐ฒ๐: _[${mergeSummary.merges.length}]_
โโโโโโโโโโโโโโ`)
              );
            } catch (Error) {
              console.log(
                Kolor.red(`๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @Owner

โโโโโโ๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐)
โโERROR โฌฐ ๐ ๐ฒ๐ฟ๐ด๐ฒ ๐ฟ๐ฒ๐๐๐น๐๐ฒ๐ฑ ๐ถ๐ป ๐ฐ๐ผ๐ป๐ณ๐น๐ถ๐ฐ๐๐!
โโโโโโโโโโโโโโ
${Error}`)
              );
            }
          }
          if (update && update.summary.changes) {
            var child = require(`child_process`).exec(`npm i --force`);
            child.stdout.pipe(process.stdout);
            child.on(`exit`, async function () {
              process.exitCode(1);
              console.log(
                Kolor.red(`๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @Owner

โโโโโโ๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐)
โ๐กINFO โฌฐ ๐๐๐๐ผ ๐จ๐ฝ๐ฑ๐ฎ๐๐ฒ๐ฑ...
โโโโโโโโโโโโโโ`)
              );
            });
          }
        });
    }
  } catch (Error) {
    console.log(
      Kolor.red(`๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @Owner

โโโโโโ๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐)
โโERROR โฌฐ ๐ ๐ฒ๐ฟ๐ด๐ฒ ๐ฟ๐ฒ๐๐๐น๐๐ฒ๐ฑ ๐ถ๐ป ๐ฐ๐ผ๐ป๐ณ๐น๐ถ๐ฐ๐๐!
โ${Error}
โโโโโโโโโโโโโโ`)
    );
  }
  `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
  try {
    console.log(Kolor.yellow(`๐นINFO โฌฐ SakuraGoose Connecting!`));
    await ึวำสสวgoose
      .connect(_๐๐๐_.SAKURAMDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .catch((err) => {
        console.log(Kolor.red(`๐นINFO โฌฐ SakuraGoose Error: \n${err}`));
        process.exit(0);
      });
    console.log(Kolor.green(`๐นINFO โฌฐ SakuraGoose Connected!`));
  } catch (โฮฑะฒัััฯั) {
    console.log(โฮฑะฒัััฯั);
    console.log(Kolor.red(`โERROR โฌฐ ๐ฃ๐น๐ฒ๐ฎ๐๐ฒ ๐ฟ๐ฒ๐ฑ๐ฒ๐ฝ๐น๐ผ๐ ๐๐ผ๐๐ฟ ๐ฏ๐ผ๐!`));
    process.exit(1);
  }
  `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
  ำสวำษจีผส.logger.level = "error";
  await ึวำสสว().catch((โฮฑะฒัััฯั) => {
    console.log(โฮฑะฒัััฯั);
    console.log(Kolor.red(`โERROR โฌฐ ๐ฃ๐น๐ฒ๐ฎ๐๐ฒ ๐ฟ๐ฒ๐ฑ๐ฒ๐ฝ๐น๐ผ๐ ๐๐ผ๐๐ฟ ๐ฏ๐ผ๐!`));
    process.exit(1);
  });
})();
`|๐น|`;
`|๐น|`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;

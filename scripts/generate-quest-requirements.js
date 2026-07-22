const fs = require("node:fs");
const vm = require("node:vm");

const context = {};
vm.createContext(context);
vm.runInContext(
  `${fs.readFileSync("js/data/game-data.js", "utf8")};this.questNames=questNames;`,
  context,
);

const decode = (value) =>
  value
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replace(/<[^>]+>/g, "")
    .trim();

async function requirementsFor(title) {
  const wikiTitle = title.replaceAll("’", "'");
  const template = `{{Recursive Questreq|${wikiTitle.replaceAll("|", "{{!}}")}}}`;
  const params = new URLSearchParams({
    action: "parse",
    format: "json",
    prop: "text",
    contentmodel: "wikitext",
    text: template,
  });
  const response = await fetch(`https://runescape.wiki/api.php?${params}`);
  if (!response.ok) throw new Error(`${title}: ${response.status}`);
  const payload = await response.json();
  const html = payload.parse?.text?.["*"] || "";
  const skills = [...html.matchAll(/class="skillreq" data-skill="([^"]+)" data-level="(\d+)"/g)].map(
    ([, skill, level]) => ({ skill: decode(skill), level: Number(level) }),
  );
  const questSection = html.match(/Quests required:<\/th>[\s\S]*?<ul>([\s\S]*?)<\/ul>/)?.[1] || "";
  const quests = [...questSection.matchAll(/<a [^>]*title="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(
    ([, attribute, label]) => decode(label || attribute),
  );
  return { skills, quests: [...new Set(quests)] };
}

(async () => {
  const output = {};
  for (const title of context.questNames) {
    output[title] = await requirementsFor(title);
    process.stdout.write(".");
  }
  fs.writeFileSync(
    "js/data/quest-requirements.js",
    `// Generated from RuneScape Wiki Recursive Questreq on ${new Date().toISOString().slice(0, 10)}.\nwindow.F2P_QUEST_REQUIREMENTS = ${JSON.stringify(output, null, 2)};\n`,
  );
  process.stdout.write(`\nGenerated ${Object.keys(output).length} quest requirement records.\n`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

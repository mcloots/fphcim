const categories = {
  quest: { label: "Quests", tag: "Quest" },
  level: { label: "Levels", tag: "Level" },
  boss: { label: "Bosses", tag: "Boss" },
  achievement: { label: "Achievements", tag: "Achievement" },
};

const phases = [
  {
    id: "start",
    name: "Foundation",
    short: "Phase 1",
    desc: "Start safely, unlock mobility and collect quick quest XP.",
  },
  {
    id: "setup",
    name: "Self-sufficient",
    short: "Phase 2",
    desc: "Build your resource chain and baseline equipment.",
  },
  {
    id: "quests",
    name: "Questing",
    short: "Phase 3",
    desc: "Complete the more dangerous quest lines with proper preparation.",
  },
  {
    id: "power",
    name: "Power-up",
    short: "Phase 4",
    desc: "Tier 50 equipment, protection prayers and consistent combat.",
  },
  {
    id: "boss",
    name: "Bossing",
    short: "Phase 5",
    desc: "Progress from safe entry bosses to the final F2P tests.",
  },
  {
    id: "max",
    name: "The 99 path",
    short: "Phase 6",
    desc: "Efficient linked grinds towards every F2P level 99.",
  },
];

const questNames = [
  "Cook’s Assistant",
  "The Blood Pact",
  "Let Them Eat Pie",
  "Rune Mysteries",
  "The Restless Ghost",
  "Imp Catcher",
  "Demon Slayer",
  "Ernest the Chicken",
  "Goblin Diplomacy",
  "Gunnar’s Ground",
  "The Knight’s Sword",
  "Pirate’s Treasure",
  "Vampyre Slayer",
  "Witch’s House",
  "Gertrude’s Cat",
  "Druidic Ritual",
  "Wolf Whistle",
  "What’s Mine is Yours",
  "Stolen Hearts",
  "Death Plateau",
  "The Death of Chivalry",
  "Perils of Ice Mountain",
  "Myths of the White Lands",
  "Swept Away",
  "Beneath Cursed Tides",
  "A Shadow over Ashdale",
  "Song from the Depths",
  "A Soul’s Bane",
  "One Piercing Note",
  "Missing, Presumed Death",
  "Broken Home",
  "Gower Quest",
  "Dragon Slayer",
  "Chef’s Assistant",
  "Once Upon a Slime",
  "Heartstealer",
  "Hearts of Sanguine",
  "Priest in Peril",
  "Shield of Arrav",
  "There’s No Place Like Home...",
  "Visions of Havenhythe",
  "Violet is Blue",
  "Violet is Blue Too",
  "Necromancy!",
  "Duck Quest",
  "A Christmas Reunion",
  "Cold Front",
  "Corporate Egg-spionage",
  "Field of Screams",
  "Great Egg-spectations",
  "Guys and Dolls",
  "It’s Snow Bother",
];
const seasonalQuests = new Set([
  "A Christmas Reunion",
  "Cold Front",
  "Corporate Egg-spionage",
  "Field of Screams",
  "Great Egg-spectations",
  "Guys and Dolls",
  "It’s Snow Bother",
]);

const skills = [
  "Attack",
  "Strength",
  "Defence",
  "Constitution",
  "Ranged",
  "Prayer",
  "Magic",
  "Runecrafting",
  "Dungeoneering",
  "Mining",
  "Smithing",
  "Fishing",
  "Cooking",
  "Firemaking",
  "Woodcutting",
  "Crafting",
  "Fletching",
];
const skillMethods = {
  Attack: [
    "Train alongside Strength and Defence using the best self-made melee weapon available.",
    "Burthorpe trolls and Lumbridge Catacombs early; move to hill giants, deadly red spiders or cockroach soldiers when your accuracy is reliable.",
    "Prioritise 100% hit chance and useful drops over fighting the highest-level target.",
  ],
  Strength: [
    "Use the same route as Attack, switching combat XP to Strength after each weapon-tier unlock.",
    "Burthorpe trolls → hill giants → deadly red spiders or cockroach soldiers.",
    "Keep Attack high enough to maintain accuracy; faster kills mean better XP and less food used.",
  ],
  Defence: [
    "Train through melee, ranged or magic once your damage skill is at the current equipment tier.",
    "Use low-risk monsters with predictable damage and a nearby bank.",
    "Upgrade armour at 10-level metal tiers and never AFK combat on a Hardcore account.",
  ],
  Constitution: [
    "Constitution XP is earned automatically while training combat. Do not grind it separately.",
    "Quest rewards such as Witch’s House accelerate the early levels.",
    "Let your other combat 99s carry this skill to 99.",
  ],
  Ranged: [
    "Use the best bow, crossbow or thrown weapon you can produce consistently.",
    "Burthorpe trolls early, then minotaurs, hill giants, lesser demons or cockroach soldiers.",
    "Fletch ammunition in bulk first and exploit monsters weak to ranged.",
  ],
  Prayer: [
    "Unlock Cremation from ghost-like creatures early; use valuable bones on lit logs instead of burying them.",
    "Dragon bones give 180 Prayer XP and 144 Firemaking XP when cremated, making later dragon kills an efficient linked grind.",
    "Prayer is supply-limited in F2P. Green dragons can supply bones, but their Wilderness locations are disproportionately risky for a Hardcore account.",
  ],
  Magic: [
    "Use combat spells with self-crafted runes; switch to High Level Alchemy at 55 for useful drops when nature runes permit.",
    "Train on targets weak to magic and combine the grind with combat drops.",
    "Runecrafting 44 supports nature runes; staves reduce elemental rune consumption.",
  ],
  Runecrafting: [
    "Use Runespan for sustained XP, especially after the early altar levels.",
    "Craft elemental and combat runes conventionally when you need supplies for Magic.",
    "Alternate efficient Runespan sessions with supply runs instead of trying to source every Magic rune manually.",
  ],
  Dungeoneering: [
    "Complete solo floors, reset only after finishing every floor available in your current prestige band.",
    "Use small floors for speed early and larger floors once complexity and XP rewards improve.",
    "Prestige errors cost substantial XP; bind the best weapon you can use.",
  ],
  Mining: [
    "Mine the highest core ore needed by your Smithing tier and store it in the best ore box available.",
    "Copper/tin → iron → coal/mithril → adamant/luminite → runite; common gem rocks are a strong high-level alternative.",
    "Process ores rather than dropping them: an Ironman needs the bars, gems and Smithing XP.",
  ],
  Smithing: [
    "Complete The Knight’s Sword early, then smith the highest core metal equipment available.",
    "Use Burthorpe or Lumbridge furnaces/anvils and upgrade your ore box and pickaxe each tier.",
    "Burial armour gives strong XP but destroys the item; first make permanent equipment and tool upgrades.",
  ],
  Fishing: [
    "Move through crayfish, trout/salmon, lobster and swordfish as levels unlock.",
    "Lumbridge/Barbarian Village early; Karamja or resource-dungeon spots for higher fish.",
    "Bank and cook most catches: food security matters more than maximum fishing XP on HCIM.",
  ],
  Cooking: [
    "Cook the fish gathered during Fishing and use the Lumbridge Castle range when convenient.",
    "Advance from crayfish and trout to lobster and swordfish; stop using food with excessive burn rates.",
    "Keep a protected bossing-food reserve instead of consuming every high-tier fish during routine training.",
  ],
  Firemaking: [
    "Burn or bonfire logs gathered through Woodcutting after reserving enough for Fletching.",
    "Use the highest log with a reasonable success rate; bonfires are relaxed while line fires can be faster.",
    "Decide your log split before long sessions so Firemaking does not starve Fletching.",
  ],
  Woodcutting: [
    "Progress through normal, oak, willow, maple and yew trees.",
    "Draynor willows are convenient; Daemonheim resource dungeons and scattered yews support later levels.",
    "Bank logs for Fletching and Firemaking rather than power-dropping valuable Ironman supplies.",
  ],
  Crafting: [
    "Use quest XP early, then process clay, leather, silver/gold jewellery and gems obtained from Mining.",
    "Common gem rocks can connect high-level Mining and Crafting progression.",
    "Save cut gems for useful jewellery and urns; gather ingredients in batches to reduce travel.",
  ],
  Fletching: [
    "Make the highest shortbows available from your Woodcutting logs, then string them when bowstrings are worth sourcing.",
    "Create your own arrows, bolts and bows to support Ranged training.",
    "Shortbows are generally the practical XP route; reserve ammunition supplies before using all logs for bows.",
  ],
};

const bossDetails = {
  "Count Draynor": [
    "Suggested: basic food and any combat style around level 15+.",
    "Fight during Vampyre Slayer. Use the quest item and keep the door route clear.",
  ],
  Delrith: [
    "Suggested: Silverlight, food and combat stats around 20+.",
    "Fight during Demon Slayer and select the correct incantation from your quest notes.",
  ],
  Elvarg: [
    "Suggested: 40+ combat stats, rune equipment, anti-dragon shield and strong food.",
    "Keep the shield equipped, watch your food and retain a one-click emergency teleport.",
  ],
  Agoroth: [
    "Suggested: 40+ combat stats, solid food and familiar combat abilities.",
    "Complete A Shadow over Ashdale; avoid telegraphed attacks rather than trying to absorb them.",
  ],
  "Ivar, King of Bones": [
    "Suggested HCIM baseline: level 50+ in your chosen combat style, 50+ Defence, 43 Prayer and reliable tier 50 equipment.",
    "Learn his three telegraphed styles: Bone Bludgeon uses melee, Skeletal Shrapnel uses ranged and Conk Blast uses magic. Move out of area attacks and switch to the matching protection prayer before each hit.",
    "Every kill guarantees one colossal bone worth 400 Prayer XP when buried. Bury it manually: colossal bones do not work with the bonecrusher and cannot be offered at altars or the Ectofuntus.",
    "His bonecrusher maul, magic skull mask, colossal bone and pet drop are all available in F2P.",
  ],
  "Giant Mole": [
    "Suggested HCIM baseline: 60+ combat stats, tier 50 gear, protection prayers and a full food inventory.",
    "Use an instance, track its digging phases and leave early if supplies fall below your safety margin.",
  ],
  "King Black Dragon": [
    "Suggested HCIM baseline: 70+ combat stats, dragonfire protection, prayer and strong food.",
    "Access through the Grouping System where possible; avoid carrying valuables through the Wilderness.",
  ],
  "Chaos Elemental": [
    "Suggested: 70+ combat stats, cheap replaceable gear and free inventory spaces.",
    "This is a Wilderness encounter. It is optional and disproportionately risky for a Hardcore account.",
  ],
};

const questWarnings = {
  "The Knight’s Sword":
    "Bring food and avoid unnecessary contact with Ice Warriors and Ice Giants.",
  "Witch’s House":
    "Prepare food before the experiment’s multiple forms and do not underestimate its final form.",
  "The Death of Chivalry":
    "Bring combat supplies and keep an emergency teleport available.",
  "Dragon Slayer":
    "Equip an anti-dragon shield for Elvarg and use your strongest reliable food.",
  "Broken Home":
    "The normal completion is safe when following the guide; challenge runs can wait.",
  "A Shadow over Ashdale":
    "Review Agoroth’s telegraphed attacks before entering the final encounter.",
};

const questXp = {
  "Cook's Assistant": [["Cooking", 300]],
  "The Blood Pact": [
    ["Attack", 100],
    ["Strength", 100],
    ["Defence", 100],
    ["Ranged", 100],
    ["Magic", 100],
  ],
  "Let Them Eat Pie": [
    ["Cooking", 100],
    ["Thieving", 150],
  ],
  "Rune Mysteries": [
    ["Magic", 250],
    ["Runecrafting", 250],
  ],
  "The Restless Ghost": [["Prayer", 1125, "includes ancient bones"]],
  "Imp Catcher": [["Magic", 875]],
  "Demon Slayer": [["Combat choice", 300]],
  "Ernest the Chicken": [],
  "Goblin Diplomacy": [["Crafting", 200]],
  "Gunnar's Ground": [],
  "The Knight's Sword": [["Smithing", 12725]],
  "Pirate's Treasure": [],
  "Vampyre Slayer": [["Combat choice", 4825]],
  "Witch's House": [["Constitution", 6325]],
  "Gertrude's Cat": [["Cooking", 1525]],
  "Druidic Ritual": [["Herblore", 250]],
  "Wolf Whistle": [["Summoning", 276]],
  "What's Mine is Yours": [
    ["Mining", 1000],
    ["Smithing", 400],
  ],
  "Stolen Hearts": [
    ["Constitution", 250],
    ["Combat choice", 250],
  ],
  "Death Plateau": [
    ["Skill choice", 300],
    ["Skill choice", 2700, "optional deliveries"],
  ],
  "The Death of Chivalry": [
    ["Magic", 250],
    ["Strength", 250],
    ["Prayer", 250],
    ["Combat choice", 500],
    ["Combat choice", 3500, "optional · level 40"],
    ["Prayer", 60000, "optional · 65 Prayer"],
  ],
  "Perils of Ice Mountain": [
    ["Farming", 500],
    ["Hunter", 500],
    ["Construction", 500],
    ["Thieving", 500],
  ],
  "Myths of the White Lands": [
    ["Skill choice", 500],
    ["Crafting", 2000, "optional · level 30"],
    ["Woodcutting", 20000, "optional · level 80"],
  ],
  "Swept Away": [
    ["Skill choice", "10× level", "10 goulash portions"],
    ["Magic", "variable", "optional broom rewards"],
  ],
  "Beneath Cursed Tides": [
    ["Combat choice", 10000],
    ["Fishing", 5000],
    ["Cooking", 5000],
  ],
  "A Shadow over Ashdale": [
    ["Attack", 300],
    ["Strength", 300],
    ["Defence", 300],
    ["Constitution", 300],
  ],
  "Song from the Depths": [
    ["Constitution", 700],
    ["Constitution", 5000, "optional · level 50"],
    ["Constitution", 25000, "optional · level 80"],
  ],
  "A Soul's Bane": [
    ["Defence", 500],
    ["Constitution", 500],
  ],
  "One Piercing Note": [
    ["Prayer", 250],
    ["Prayer", 50000, "optional Holy Cithara"],
  ],
  "Missing, Presumed Death": [
    ["Prayer", 500],
    ["Combat choice", 1500],
    ["Constitution", 50000, "optional · level 75"],
    ["Skill choice", 30000, "optional · level 75"],
  ],
  "Broken Home": [["Skill choice", "level-scaled", "small XP lamp"]],
  "Gower Quest": [
    ["F2P skill choice", 250, "all F2P skills 10+"],
    ["F2P skill choice", 1500, "all F2P skills 30+"],
    ["F2P skill choice", 12000, "all F2P skills 50+"],
  ],
  "Dragon Slayer": [
    ["Strength", 18650],
    ["Defence", 18650],
  ],
  "Chef's Assistant": [
    ["Cooking", 1500],
    ["Cooking", 8000, "optional post-quest"],
  ],
  "Once Upon a Slime": [["Cooking", 2500]],
  Heartstealer: [],
  "Hearts of Sanguine": [
    ["Herblore", 250],
    ["Smithing", 250],
  ],
  "Priest in Peril": [["Prayer", 1406]],
  "Shield of Arrav": [],
  "There's No Place Like Home...": [["Construction", 250]],
  "Visions of Havenhythe": [],
  "Violet is Blue": [["Skill choice", 3000, "3 × 1,000 lamps"]],
  "Violet is Blue Too": [["Skill choice", 12000, "3 × 4,000 lamps"]],
  "Necromancy!": [["Necromancy", 200]],
  "Duck Quest": [["Herblore", 500]],
  "A Christmas Reunion": [["Skill choice", 5000]],
  "Cold Front": [["Skill choice", 4500, "3 × 1,500 lamps"]],
  "Corporate Egg-spionage": [["Thieving", 5000]],
  "Field of Screams": [],
  "Great Egg-spectations": [["Cooking", 5000]],
  "Guys and Dolls": [],
  "It's Snow Bother": [["Skill choice", 15000, "3 × 5,000 lamps"]],
};
const route = [
  [
    "start",
    "achievement",
    "Activate every F2P lodestone",
    "Unlock Lumbridge, Burthorpe, Taverley, Falador, Port Sarim, Draynor, Varrock, Edgeville, Al Kharid, Ashdale, City of Um, Wendlewick and Wilderness Crater.",
  ],
  [
    "start",
    "achievement",
    "Set up your daily routine",
    "Complete daily challenges, check Shooting Stars, and buy feather stock from Lumbridge, Port Sarim and the new Fishing Shop in Wendlewick.",
  ],
  [
    "start",
    "achievement",
    "Join the F2P Ironman community",
    "Use the F2pironmanfc Friends Chat and Star Find community to locate stars and ask current F2P questions.",
  ],
  [
    "start",
    "quest",
    "The Blood Pact",
    "An early combat introduction that unlocks the Lumbridge Catacombs.",
  ],
  [
    "start",
    "quest",
    "Cook’s Assistant",
    "Collect a quick Quest Point and learn the basic route around Lumbridge.",
  ],
  [
    "start",
    "quest",
    "Rune Mysteries",
    "Unlock the Runecrafting path and access to rune essence.",
  ],
  [
    "start",
    "quest",
    "The Restless Ghost",
    "Important early Prayer XP without dangerous combat.",
  ],
  [
    "start",
    "level",
    "Fishing & Cooking 20",
    "Fish crayfish in Burthorpe and cook them nearby. Keep a food stack before starting combat quests.",
  ],
  [
    "start",
    "level",
    "Woodcutting, Firemaking & Fletching 20",
    "Cut normal and oak logs around Burthorpe; split them between fires and your first bows or arrow shafts.",
  ],
  [
    "start",
    "level",
    "Mining & Smithing 20",
    "Mine copper and tin, smelt bronze bars, and upgrade your pickaxe and ore box as soon as each tier allows.",
  ],
  [
    "setup",
    "quest",
    "The Knight’s Sword",
    "A major early Smithing XP boost; bring food for the Ice Warriors.",
  ],
  [
    "setup",
    "quest",
    "What’s Mine is Yours",
    "Unlock Doric and Boric tasks and additional Mining and Smithing progression.",
  ],
  [
    "setup",
    "level",
    "Mining & Smithing 50",
    "Mine your own ores, upgrade to rune and retain bars for Crafting and Fletching.",
  ],
  [
    "setup",
    "level",
    "Fishing & Cooking 50",
    "Build a generous stock of swordfish and lobsters for quests and bosses.",
  ],
  [
    "setup",
    "level",
    "Woodcutting, Firemaking & Fletching 50",
    "Use logs across three skills and make your own ranged ammunition and shortbows.",
  ],
  [
    "setup",
    "level",
    "Combat stats to 40",
    "Train Attack, Strength, Defence, Ranged and Magic; Constitution will follow naturally.",
  ],
  [
    "setup",
    "achievement",
    "Unlock the Cremation ability",
    "Kill ghost-like creatures once they are comfortable targets until Cremation drops. Unlock it immediately, then cremate valuable bones on lit logs for both Prayer and Firemaking XP.",
  ],
  [
    "setup",
    "level",
    "Runecrafting 50",
    "Use Runespan for sustained XP, but craft rune supplies conventionally when Magic needs them.",
  ],
  [
    "setup",
    "level",
    "Magic 55 & High Level Alchemy",
    "Unlock High Level Alchemy for duplicate drops and self-smithed equipment; Runecrafting 44 supports nature runes.",
  ],
  [
    "setup",
    "level",
    "Crafting urn supply",
    "Mine clay, make skilling urns in batches and use them throughout Mining, Fishing, Cooking, Woodcutting, Firemaking and Runecrafting.",
  ],
  [
    "quests",
    "quest",
    "Witch’s House",
    "Free Constitution XP; take care during the experiment fight.",
  ],
  [
    "quests",
    "quest",
    "Death Plateau",
    "Unlock further Burthorpe content and collect useful combat rewards.",
  ],
  [
    "quests",
    "quest",
    "The Death of Chivalry",
    "Strong early rewards, but bring good food and an emergency teleport.",
  ],
  [
    "quests",
    "quest",
    "Song from the Depths",
    "Claim its F2P quest rewards and continue the complete quest route; no members-only bossing is required.",
  ],
  [
    "quests",
    "quest",
    "Broken Home",
    "Complete a relaxed first run before pursuing the challenge rewards later.",
  ],
  [
    "quests",
    "quest",
    "Dragon Slayer",
    "HCIM checkpoint: rune equipment, an anti-dragon shield, good food and a teleport.",
  ],
  [
    "quests",
    "achievement",
    "All 45 permanent F2P quests",
    "Finish every permanent F2P quest and end with the hardest combat quests.",
  ],
  [
    "power",
    "level",
    "All combat stats 60+",
    "A sensible safety baseline for Giant Mole, KBD and quest replays.",
  ],
  [
    "power",
    "level",
    "Prayer 43",
    "Protection prayers are a core layer of HCIM safety.",
  ],
  [
    "power",
    "achievement",
    "Lumbridge achievements: Beginner → Hard",
    "Work through each tier and claim Explorer’s ring rewards as they become available.",
  ],
  [
    "power",
    "achievement",
    "Varrock achievements: Easy → Elite",
    "Complete every F2P-compatible task and benefit from Varrock armour.",
  ],
  [
    "power",
    "achievement",
    "Daemonheim achievements",
    "Combine these with Dungeoneering training and resource dungeons.",
  ],
  [
    "power",
    "achievement",
    "Unlock F2P resource dungeons",
    "Use Dungeoneering milestones to open convenient ore, monster and banking locations as they become available.",
  ],
  [
    "power",
    "achievement",
    "Prepare the green dragon bone route",
    "After Dragon Slayer, build reliable Ranged accuracy and bring an anti-dragon shield. Green dragons provide dragon bones for Cremation, but only use this Wilderness route if you knowingly accept the HCIM risk.",
  ],
  [
    "power",
    "level",
    "Prepare the long grinds",
    "Stock ore boxes, urns, feathers, logs, runes and food before committing to extended 90–99 sessions.",
  ],
  [
    "boss",
    "boss",
    "Ivar, King of Bones",
    "Your first repeatable mechanics boss: enter with 50+ in one combat style, 50+ Defence and preferably 43 Prayer. Every kill guarantees a colossal bone worth 400 Prayer XP when buried.",
  ],
  [
    "boss",
    "achievement",
    "Ivar combat achievements",
    "Progress from your first kill through Broken Bones kill-count milestones, then complete Protect from Ivar and the remaining mechanic challenges.",
  ],
  [
    "boss",
    "boss",
    "Giant Mole",
    "Your first repeatable boss. Use a safe instance and learn its escape phases.",
  ],
  [
    "boss",
    "boss",
    "King Black Dragon",
    "Bring dragonfire protection, food and a teleport; avoid risky Wilderness routes.",
  ],
  [
    "boss",
    "boss",
    "Chaos Elemental",
    "Only attempt this if you knowingly accept the Wilderness risk; it is not required for any 99.",
  ],
  [
    "boss",
    "achievement",
    "Boss collection & kill milestones",
    "Build kill count for each boss; pets and rare drops are optional prestige goals.",
  ],
  [
    "max",
    "level",
    "Mining → Smithing 99",
    "Mine the ores for your own bars, keep the best ore box, and turn spare bars into burial equipment after permanent upgrades are complete.",
  ],
  [
    "max",
    "level",
    "Woodcutting → Fletching & Firemaking 99",
    "Distribute logs deliberately between bows and bonfires.",
  ],
  [
    "max",
    "level",
    "Fishing → Cooking 99",
    "Cook your entire catch and keep a generous HCIM food reserve separate.",
  ],
  [
    "max",
    "level",
    "Runecrafting → Magic 99",
    "Use Runespan for Runecrafting and your self-made runes for Magic where efficient.",
  ],
  [
    "max",
    "level",
    "Melee trio + Constitution 99",
    "Train Attack, Strength and Defence in a controlled way; Constitution progresses alongside them.",
  ],
  [
    "max",
    "level",
    "Ranged 99",
    "Use self-made equipment and choose monsters with useful drops.",
  ],
  [
    "max",
    "level",
    "Crafting 99",
    "Process gem drops, hides, silver and gold gathered during your other grinds.",
  ],
  [
    "max",
    "level",
    "Prayer 99",
    "Cremate valuable bones throughout the account: dragon bones give 180 Prayer XP plus 144 Firemaking XP each. Collect bones passively, and treat Wilderness green dragons as an optional high-risk Ranged source.",
  ],
  [
    "max",
    "level",
    "Dungeoneering 99",
    "Run solo floors, prestige correctly, bind a strong primary and secondary style, and claim every useful F2P token reward.",
  ],
  [
    "max",
    "achievement",
    "17 F2P skills at level 99",
    "The ultimate F2P max milestone.",
  ],
  [
    "max",
    "achievement",
    "Maximum HCIM-compatible F2P RuneScore",
    "Complete every F2P achievement that can actually be earned on a Hardcore Ironman. The complete F2P list currently contains 742 achievements worth 4,525 RuneScore.",
  ],
];

const slug = (text) =>
  text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
const explicitRouteItems = route.map((x, i) => ({
  id: `route-${slug(x[2])}`,
  phase: x[0],
  category: x[1],
  title: x[2],
  desc: x[3],
  route: true,
  original: i,
}));
const routeQuestTitles = new Set(
  explicitRouteItems
    .filter((x) => x.category === "quest")
    .map((x) => slug(x.title)),
);
const routeQuestItems = questNames
  .filter((title) => !routeQuestTitles.has(slug(title)))
  .map((title, i) => ({
    id: `route-quest-${slug(title)}`,
    phase: "quests",
    category: "quest",
    title,
    desc: seasonalQuests.has(title)
      ? "Complete this seasonal F2P quest while the event is available."
      : "Complete this permanent F2P quest as part of the full quest route.",
    route: true,
    original: route.length + i,
  }));
const routeItems = [...explicitRouteItems, ...routeQuestItems];
const questItems = questNames.map((title, i) => ({
  id: `quest-${slug(title)}`,
  phase: "quests",
  category: "quest",
  title,
  desc: seasonalQuests.has(title)
    ? "Complete this seasonal free-to-play quest while available."
    : "Complete this permanent free-to-play quest.",
  original: i,
}));
const levelItems = skills.flatMap((skill, si) =>
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 99].map((level, li) => ({
    id: `level-${slug(skill)}-${level}`,
    phase: "max",
    category: "level",
    title: `${skill} level ${level}`,
    desc:
      level === 99
        ? "Earn 13,034,431 XP and reach the skillcape milestone."
        : `Reach level ${level} in ${skill}.`,
    original: si * 10 + li,
  })),
);
const bossItems = [
  "Count Draynor",
  "Delrith",
  "Elvarg",
  "Agoroth",
  "Ivar, King of Bones",
  "Giant Mole",
  "King Black Dragon",
  "Chaos Elemental",
].map((title, i) => ({
  id: `boss-${slug(title)}`,
  phase: "boss",
  category: "boss",
  title,
  desc:
    i < 4
      ? "Defeat this F2P quest boss without risking your HCIM status."
      : "Defeat this repeatable F2P boss and record your first kill.",
  original: i,
}));
const achievementItems = (window.F2P_ACHIEVEMENTS || []).map((item, i) => ({
  id: `achievement-${item.id}`,
  phase: "max",
  category: "achievement",
  title: item.name,
  desc: `${item.description} · ${item.category}${item.subcategory && item.subcategory !== "N/A" ? ` / ${item.subcategory}` : ""} · ${item.runeScore} RuneScore`,
  wiki: item.url,
  runeScore: item.runeScore,
  achievementCategory: item.category,
  original: i,
}));

const libraryItems = [
  ...questItems,
  ...levelItems,
  ...bossItems,
  ...achievementItems,
];
const grindSkills = [
  {
    skill: "Mining",
    type: "Gathering",
    urn: { name: "Strong mining urn", base: 2000, rune: "earth rune" },
    methods: [
      [
        "Runite ore (estimate)",
        400,
        "ores",
        "Mining Guild resource dungeon",
        "Runite rocks sit very close to its deposit box. Requires 45 Dungeoneering; use the Mining Guild rocks before that.",
      ],
      [
        "Luminite (estimate)",
        340,
        "ores",
        "Dwarven Mine resource dungeon",
        "The rocks are extremely close to a deposit box. Requires 15 Dungeoneering and feeds your Smithing grind.",
      ],
      [
        "Common gem rocks (estimate)",
        120,
        "gems",
        "Al Kharid mine resource dungeon",
        "A compact mine-to-deposit route for gems. Requires 75 Dungeoneering, so use the main Al Kharid mine until unlocked.",
      ],
    ],
  },
  {
    skill: "Fishing",
    type: "Gathering",
    urn: { name: "Plain fishing urn", base: 2500, rune: "water rune" },
    methods: [
      [
        "Fly fishing, trout/salmon average",
        60,
        "feathers",
        "Lumbridge river, beside the market",
        "The nearby bank chest lets you keep fish. Barbarian Village is the faster drop-fishing alternative.",
      ],
      [
        "Lobster",
        90,
        "lobsters",
        "Musa Point, Karamja",
        "The main F2P lobster spot. Note fish with Stiles or return through Port Sarim when you need them banked.",
      ],
      [
        "Swordfish",
        100,
        "swordfish",
        "Musa Point, Karamja",
        "The F2P harpoon spot. Bring an Explorer ring teleport or use Stiles to reduce long banking trips.",
      ],
    ],
  },
  {
    skill: "Woodcutting",
    type: "Gathering",
    urn: { name: "Plain woodcutting urn", base: 4125, rune: "earth rune" },
    methods: [
      [
        "Willow logs",
        67.5,
        "logs",
        "Draynor Village bank",
        "Several willows are only a short walk from the bank: ideal for banking Fletching and Firemaking supplies.",
      ],
      [
        "Maple logs",
        100,
        "logs",
        "Daemonheim Peninsula",
        "The reliable F2P maple cluster. Use the Daemonheim bank route and carry urns.",
      ],
      [
        "Yew logs (urn does not apply)",
        175,
        "logs",
        "Edgeville yews",
        "Two yews are close to Edgeville bank. Varrock Palace is a useful alternative when crowded.",
      ],
    ],
  },
  {
    skill: "Smithing",
    type: "Artisan",
    methods: [
      [
        "Rune burial sets (bar-equivalent estimate)",
        1600,
        "rune bars",
        "Artisans' Workshop, Falador",
        "Everything is in one place and burial armour gives the best XP from bars, but destroys the finished equipment.",
      ],
      [
        "Rune equipment +3 (bar-equivalent estimate)",
        1200,
        "rune bars",
        "Artisans' Workshop, Falador",
        "Short movement between forge and anvil. Keep +3 items when you still need combat gear or later burial sets.",
      ],
      [
        "Adamant burial sets (bar-equivalent estimate)",
        600,
        "adamant bars",
        "Artisans' Workshop, Falador",
        "A bank-adjacent route that also earns Respect. Upgrade to rune as soon as your levels allow.",
      ],
    ],
  },
  {
    skill: "Cooking",
    type: "Artisan",
    urn: { name: "Plain cooking urn", base: 4750, rune: "fire rune" },
    methods: [
      [
        "Swordfish (successful cooks)",
        140,
        "swordfish",
        "Al Kharid range",
        "The closest permanent F2P range to a bank. Lumbridge Castle range can save fish with its lower burn chance.",
      ],
      [
        "Lobster (successful cooks)",
        120,
        "lobsters",
        "Al Kharid range",
        "A very short bank-to-range loop. Use Lumbridge Castle range when its lower burn chance matters.",
      ],
      [
        "Salmon (successful cooks)",
        90,
        "salmon",
        "Lumbridge Market or Barbarian Village",
        "Cook beside the fishing spot: Lumbridge has a bank chest; Barbarian Village has a permanent fire.",
      ],
    ],
  },
  {
    skill: "Firemaking",
    type: "Artisan",
    methods: [
      [
        "Willow logs",
        90,
        "logs",
        "Grand Exchange",
        "A large clear area beside a bank. Draynor is convenient when cutting the willows yourself.",
      ],
      [
        "Maple logs",
        135,
        "logs",
        "Grand Exchange",
        "Bank access and clear lanes keep the route simple. Yeti Town bonfire is a relaxed alternative after Violet is Blue.",
      ],
      [
        "Yew logs",
        202.5,
        "logs",
        "Grand Exchange",
        "Best practical bank access. Reserve every log needed for Fletching before burning yews.",
      ],
    ],
  },
  {
    skill: "Fletching",
    type: "Artisan",
    methods: [
      [
        "Willow shortbows (u)",
        33.3,
        "willow logs",
        "Draynor Village bank",
        "Cut willows next to the bank, then fletch full inventories while bank-standing.",
      ],
      [
        "Maple shortbows (u)",
        50,
        "maple logs",
        "Daemonheim bank",
        "Fletch each banked load from the nearby maple trees to avoid hauling logs elsewhere.",
      ],
      [
        "Yew shortbows (u)",
        67.5,
        "yew logs",
        "Edgeville bank",
        "Nearby yews make Edgeville the cleanest combined Woodcutting and Fletching loop.",
      ],
    ],
  },
  {
    skill: "Crafting",
    type: "Artisan",
    methods: [
      [
        "Cut diamonds",
        107.5,
        "diamonds",
        "Al Kharid mine resource dungeon",
        "Mine common gem rocks and cut gems near the deposit route. Requires 75 Dungeoneering.",
      ],
      [
        "Cut rubies",
        85,
        "rubies",
        "Al Kharid mine resource dungeon",
        "The same compact route supplies rubies without trading. Bank uncut gems for exact tracking.",
      ],
      [
        "Strong mining urns",
        85.2,
        "urns",
        "Burthorpe pottery",
        "Clay, water and pottery facilities are grouped closely. Make batches, then add earth runes at a bank.",
      ],
    ],
  },
  {
    skill: "Runecrafting",
    type: "Artisan",
    methods: [
      [
        "Runespan (estimated XP/hour)",
        60000,
        "hours",
        "Runespan via Wizards' Tower",
        "Resource-free and safe: the default HCIM XP route. Stay on the highest stable island you can use.",
      ],
      [
        "Nature runes (estimated XP/essence)",
        9,
        "rune essence",
        "Nature altar via the Wilderness",
        "Useful runes, but the route is dangerous for HCIM. Prefer Runespan unless you explicitly accept the risk.",
      ],
    ],
  },
];
const combatSpots = [
  {
    levels: "1-30",
    name: "Burthorpe trolls",
    tags: "Bank nearby / very low risk",
    detail:
      "Low Defence targets close to the bank and lodestone. Good for testing all three styles.",
  },
  {
    levels: "25-45",
    name: "Lumbridge Catacombs",
    tags: "Bank nearby / food drops",
    detail:
      "A smooth step up after Blood Pact. Choose enemies you kill quickly and delay the deeper rooms.",
  },
  {
    levels: "40-60",
    name: "Hill giants, Edgeville Dungeon",
    tags: "Safespot / big bones",
    detail:
      "Useful for Ranged or Magic and Prayer supplies. Do not enter the Wilderness section.",
  },
  {
    levels: "55-75",
    name: "Cockroach soldiers",
    tags: "Safespots / useful drops",
    detail:
      "Strong mid-game targets. Their ranged attacks punish weak armour, so safespot or match them carefully.",
  },
  {
    levels: "70-99",
    name: "Greater demons, Karamja Volcano",
    tags: "High health / no nearby bank",
    detail:
      "Solid late XP, but long banking and hard hits require active play and an emergency teleport.",
  },
];
const communityTips = [
  {
    title: "Unlock Cremation from ghosts early",
    prerequisites: ["Tier 30-40 Magic recommended", "Earth spells", "A tinderbox and logs"],
    description:
      "Farm Ankous on the fourth level of the Stronghold of Security: they are weak to Earth spells and have better supporting drops than ordinary ghosts. Once Cremation drops, use valuable bones on lit logs; dragon bones give 180 Prayer XP and 144 Firemaking XP each.",
  },
  {
    title: "Add Wendlewick to your feather run",
    prerequisites: ["Wendlewick lodestone", "Enough coins for feather stock"],
    description:
      "Visit the Fishing Shop in southern Wendlewick alongside Lumbridge Fishing Supplies and Gerrant’s shop in Port Sarim. The fisherwoman by the dock and the market assistant both open the same Wendlewick shop stock.",
  },
  {
    title: "Use Ivar as an early mechanics check",
    prerequisites: [
      "50+ in one combat style",
      "50+ Defence",
      "43 Prayer recommended",
      "Reliable tier 50 equipment",
    ],
    description:
      "Ivar, King of Bones is a useful first repeatable mechanics boss. Learn his three combat tells and use the matching protection prayer. Every kill guarantees a colossal bone worth 400 Prayer XP; bury it manually because it does not work with the bonecrusher or bone-offering sites.",
  },
  {
    title: "Offer every Daemonheim bone at an altar",
    prerequisites: ["Dungeoneering floors", "An altar found during the floor"],
    description:
      "Do not bury bones immediately inside Daemonheim. Save them until you find an altar: ordinary Dungeoneering bones give 15.7 Prayer XP at an altar instead of 4.5 XP when buried. This turns regular floor clearing into meaningful passive Prayer training.",
  },
  {
    title: "Unlock the War’s Retreat teleport early",
    prerequisites: ["10 total boss kills"],
    description:
      "Ten boss kills unlock the direct War’s Retreat teleport, one of the best F2P bank teleports. Build the first kills on a boss you can defeat safely, then use the teleport to shorten gathering, shop and bossing routes.",
  },
  {
    title: "Take every uncapped Shooting Star reward",
    prerequisites: ["Mining level for the star layer", "A pickaxe"],
    description:
      "Shooting Star rewards currently include 35,000 coins, cosmic and astral runes, and gold stone spirits. The reward limit was removed on 16 March 2026, so convenient additional stars can fund shop runs and improve later ore gathering instead of being only a once-daily activity.",
  },
  {
    title: "Use the Shooting Star double-ore window",
    prerequisites: ["Complete a Shooting Star", "Ore or gem route prepared"],
    description:
      "A completed star grants a 15-minute Mining buff with a 25% chance to receive double ore. Move directly to luminite, runite or gem rocks after claiming the reward; the timer pauses while logged out, so prepare the destination first.",
  },
  {
    title: "Buy resource-saving Dungeoneering rewards before 99 grinds",
    prerequisites: ["Dungeoneering tokens", "Relevant reward requirements"],
    description:
      "Prioritise the gem bag for gem mining, Scroll of efficiency before mass Smithing and Scroll of dexterity before dragonhide Crafting. Permanent material savings are unusually valuable on an Ironman because every refunded bar or hide also saves gathering time.",
  },
  {
    title: "Delay blue dragonhide bodies until Scroll of dexterity",
    prerequisites: ["60 Dungeoneering", "60 Crafting", "20,000 Dungeoneering tokens"],
    description:
      "The scroll gives a 20% chance to save one dragon leather when crafting items that use at least three. Bank blue dragonhides until it is unlocked, then craft bodies for the most XP per leather or shields when faster processing matters more.",
  },
  {
    title: "Use the Skull sceptre as a utility teleport",
    prerequisites: ["Four sceptre pieces from the Stronghold of Security"],
    description:
      "Assemble the Skull sceptre for a teleport to Gunnarsgrunn. The destination is useful for Barbarian Village fly fishing, nearby urn pottery, Runecrafting challenge routes and returning to the Stronghold of Security.",
  },
  {
    title: "Train Smithing inside Artisans’ Workshop",
    prerequisites: ["Access to Falador", "Bars for the current metal tier"],
    description:
      "Use the workshop even when another forge looks convenient, because the same long grind also earns Respect for permanent rewards. Make your required equipment first, then use adamant burial sets from 40 and rune burial sets from 50 for XP.",
  },
  {
    title: "Stretch Cooking supplies with a bonfire and urns",
    prerequisites: ["A suitable log", "Cooking urns recommended"],
    description:
      "Cooking on a self-made bonfire provides 5% extra Cooking XP, while cooking urns add another 20%. Equip a Dwarven army axe when available for an additional 3 Cooking XP per item and keep the best fish reserved for HCIM combat.",
  },
];
const dailyTasks = [
  {
    id: "challenges",
    title: "Complete Daily Challenges",
    detail: "Finish today’s three challenges and claim their XP rewards.",
    priority: true,
  },
  {
    id: "feathers",
    title: "Buy feather stock (3 shops)",
    detail:
      "Check Lumbridge Fishing Supplies, Gerrant’s shop in Port Sarim and the Fishing Shop in southern Wendlewick. The two Wendlewick sellers open the same stock.",
    priority: true,
  },
  {
    id: "runes",
    title: "Restock useful runes",
    detail:
      "Buy the elemental, mind, body, nature and law runes your current Magic plan needs.",
    priority: true,
  },
  {
    id: "star",
    title: "Check Shooting Stars",
    detail:
      "Mine convenient F2P stars for Mining XP, coins and runes. Star rewards are no longer limited to once per day.",
  },
  {
    id: "evil-tree",
    title: "Check Evil Tree",
    detail:
      "Join a suitable F2P Evil Tree when available for Woodcutting and Firemaking rewards.",
  },
  {
    id: "event",
    title: "Check active event or minigame",
    detail:
      "Use worthwhile Ironman-compatible daily caps; skip unsafe or members-only activities.",
  },
];
const state = JSON.parse(localStorage.getItem("ironPathState") || "{}");
state.done ||= {};
state.order ||= routeItems.map((x) => x.id);
state.order = state.order.filter((id) =>
  routeItems.some((item) => item.id === id),
);
const canonicalRouteOrder = routeItems.map((item) => item.id);
canonicalRouteOrder.forEach((id, index) => {
  if (state.order.includes(id)) return;
  const previous = [...canonicalRouteOrder.slice(0, index)]
    .reverse()
    .find((candidate) => state.order.includes(candidate));
  const next = canonicalRouteOrder
    .slice(index + 1)
    .find((candidate) => state.order.includes(candidate));
  const insertAt = previous
    ? state.order.indexOf(previous) + 1
    : next
      ? state.order.indexOf(next)
      : state.order.length;
  state.order.splice(insertAt, 0, id);
});
state.grinds ||= {};
const dailyKey = new Date().toISOString().slice(0, 10);
if (state.daily?.date !== dailyKey) state.daily = { date: dailyKey, done: {} };
let currentView = "route",
  currentCategory = "all",
  currentPhase = "all";

const $ = (s) => document.querySelector(s);
const save = () => localStorage.setItem("ironPathState", JSON.stringify(state));
const xpForLevel = (level) => {
  let points = 0;
  for (let i = 1; i < Math.max(1, Math.min(99, level)); i++)
    points += Math.floor(i + 300 * Math.pow(2, i / 7));
  return Math.floor(points / 4);
};
const fmt = (value) => Math.max(0, Math.ceil(value)).toLocaleString("en-GB");
const wikiUrl = (item) => {
  if (item.wiki) return item.wiki;
  if (item.title === "Unlock the Cremation ability")
    return "https://runescape.wiki/w/Cremation";
  if (item.title === "Prepare the green dragon bone route")
    return "https://runescape.wiki/w/Green_dragon";
  if (item.category === "level") {
    const skill = skills.find((name) => item.title.startsWith(name));
    if (!skill) return "https://runescape.wiki/w/Skill_training_guides";
    return `https://runescape.wiki/w/Free-to-play_${encodeURIComponent((skill === "Attack" || skill === "Strength" || skill === "Defence" || skill === "Constitution" ? "melee" : skill).replaceAll(" ", "_"))}_training`;
  }
  if (item.category === "achievement" && item.title.includes("RuneScore"))
    return "https://runescape.wiki/w/List_of_free-to-play_achievements";
  if (
    item.category === "achievement" &&
    item.title.toLowerCase().includes("quest")
  )
    return "https://runescape.wiki/w/List_of_quests_by_membership_status";
  if (item.category === "achievement" && item.title.startsWith("Lumbridge"))
    return "https://runescape.wiki/w/Lumbridge_achievements";
  if (item.category === "achievement" && item.title.startsWith("Varrock"))
    return "https://runescape.wiki/w/Varrock_achievements";
  if (item.category === "achievement" && item.title.startsWith("Daemonheim"))
    return "https://runescape.wiki/w/Daemonheim_achievements";
  if (item.category === "achievement" && item.title.startsWith("Ivar"))
    return "https://runescape.wiki/w/Category:Ivar,_King_of_Bones_achievements";
  if (
    item.category === "achievement" &&
    item.title.toLowerCase().includes("lodestone")
  )
    return "https://runescape.wiki/w/Category:Free_to_Play_Lodestones_achievements";
  if (
    item.category === "achievement" &&
    (item.title.includes("level 99") || item.title.includes("maxed"))
  )
    return "https://runescape.wiki/w/Skill_mastery";
  if (item.category === "achievement")
    return `https://runescape.wiki/w/${encodeURIComponent(item.title.replaceAll(" ", "_"))}`;
  return `https://runescape.wiki/w/${encodeURIComponent(item.title.replaceAll(" ", "_"))}`;
};

function detailsFor(item) {
  if (item.title === "Unlock the Cremation ability")
    return {
      heading: "Early Prayer unlock",
      rows: [
        "Kill ghosts or other ghost-like creatures until the Cremation ability book drops; the unlock is available to free players.",
        "Use a bone on a lit fire after unlocking it. A dragon bone gives 180 Prayer XP and 144 Firemaking XP instead of only 72 Prayer XP from burying.",
        "Farm low-risk ghosts you can kill quickly. The unlock matters more than fighting a stronger ghost with slower kills.",
      ],
    };
  if (item.title === "Prepare the green dragon bone route")
    return {
      heading: "Optional HCIM route",
      rows: [
        "Complete Dragon Slayer and equip an anti-dragon shield before fighting dragons. Use Ranged distance and terrain whenever the chosen spawn permits it.",
        "Cremate each dragon bone on a lit log for 180 Prayer XP and 144 Firemaking XP; bank hides when the trip remains safe.",
        "Green, blue and red F2P dragons are in the Wilderness. Carry replaceable gear and one-click teleport options, keep player attack options restricted, and skip this route entirely if preserving HCIM status is the priority.",
      ],
    };
  if (item.category === "level") {
    const skill = skills.find((name) => item.title.startsWith(name));
    const level = Number(
      item.title.match(/level (\d+)/)?.[1] ||
        item.title.match(/(\d+)$/)?.[1] ||
        0,
    );
    const band =
      level <= 20
        ? "Early game"
        : level <= 50
          ? "Building supplies"
          : level <= 80
            ? "Core grind"
            : "Long-term grind";
    return {
      heading: `${band} method`,
      rows: skillMethods[skill] || [
        "Use the linked F2P training guide for the current best method.",
        "Combine training with supplies needed by another skill.",
        "Bank regularly and avoid dangerous AFK methods on HCIM.",
      ],
    };
  }
  if (item.category === "quest")
    return {
      heading: "Quest preparation",
      rows: [
        questWarnings[item.title] ||
          "Gather every required item before starting and use the linked quick guide to minimise travel.",
        "Complete quests early when their XP rewards skip slow low-level training.",
        "HCIM: bring food for every combat section and keep a one-click teleport when the encounter permits it.",
      ],
    };
  if (item.category === "boss")
    return {
      heading: "HCIM strategy",
      rows: bossDetails[item.title] || [
        "Check the linked strategy page for attacks and required quest items.",
        "Use your best reliable gear and bring more food than the normal recommendation.",
        "Set a supply threshold for teleporting out before the fight starts.",
      ],
    };
  return {
    heading: "Completion notes",
    rows: [
      item.desc,
      "Open the Wiki page to view exact requirements, task tiers and any prerequisite quests.",
      "Some F2P achievements cannot be completed by Ironmen; check the restrictions before gathering supplies.",
    ],
  };
}

function updateStats() {
  const allIds = new Set([...routeItems, ...libraryItems].map((x) => x.id));
  const done = [...allIds].filter((id) => state.done[id]).length;
  const total = allIds.size,
    pct = total ? Math.round((done / total) * 100) : 0;
  $("#doneCount").textContent = done;
  $("#totalCount").textContent = total;
  $("#percentCount").textContent = `${pct}%`;
  $("#progressFill").style.width = `${pct}%`;
  $("#progressText").textContent = `${done} / ${total}`;
  const next = routeItems
    .sort((a, b) => state.order.indexOf(a.id) - state.order.indexOf(b.id))
    .find((x) => !state.done[x.id]);
  $("#nextLabel").textContent = next?.title || "F2P completion!";
}

function renderDaily() {
  const done = dailyTasks.filter((task) => state.daily.done[task.id]).length;
  $("#dailyDate").textContent = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date());
  $("#dailyCount").textContent = `${done} / ${dailyTasks.length}`;
  $("#dailyList").innerHTML = dailyTasks
    .map(
      (task) =>
        `<label class="daily-task ${state.daily.done[task.id] ? "done" : ""}"><input type="checkbox" data-daily="${task.id}" ${state.daily.done[task.id] ? "checked" : ""}><span class="daily-check">✓</span><span><strong>${task.title}${task.priority ? "<b>Important</b>" : ""}</strong><small>${task.detail}</small></span></label>`,
    )
    .join("");
  document.querySelectorAll("[data-daily]").forEach(
    (input) =>
      (input.onchange = (e) => {
        state.daily.done[e.target.dataset.daily] = e.target.checked;
        save();
        renderDaily();
      }),
  );
}

function buildFilters() {
  $(".side-block:nth-child(2)").hidden =
    currentView === "grinds" || currentView === "tips";
  if (currentView === "grinds" || currentView === "tips") return;
  $("#typeFilter").value = currentCategory;
  const source = currentView === "route" ? routeItems : libraryItems;
  const buttons = [
    ["all", "All", source.length],
    ...Object.entries(categories).map(([key, val]) => [
      key,
      val.label,
      source.filter((x) => x.category === key).length,
    ]),
  ];
  $("#categoryFilters").innerHTML = buttons
    .map(
      ([key, label, count]) =>
        `<button class="filter-btn ${currentCategory === key ? "active" : ""}" data-category="${key}">${label}<span>${count}</span></button>`,
    )
    .join("");
  document.querySelectorAll(".filter-btn").forEach(
    (b) =>
      (b.onclick = () => {
        currentCategory = b.dataset.category;
        $("#typeFilter").value = currentCategory;
        buildFilters();
        render();
      }),
  );
}

function buildPhases() {
  $("#phaseNav").hidden = currentView !== "route";
  $("#phaseNav").innerHTML = [
    `<button class="phase-btn ${currentPhase === "all" ? "active" : ""}" data-phase="all">Full route</button>`,
    ...phases.map(
      (p) =>
        `<button class="phase-btn ${currentPhase === p.id ? "active" : ""}" data-phase="${p.id}">${p.short}</button>`,
    ),
  ].join("");
  document.querySelectorAll(".phase-btn").forEach(
    (b) =>
      (b.onclick = () => {
        currentPhase = b.dataset.phase;
        buildPhases();
        render();
      }),
  );
}

function filtered(items) {
  const q = $("#searchInput").value.trim().toLowerCase(),
    status = $("#statusFilter").value;
  return items.filter(
    (x) =>
      (currentCategory === "all" || x.category === currentCategory) &&
      (currentPhase === "all" || x.phase === currentPhase) &&
      (!q || `${x.title} ${x.desc}`.toLowerCase().includes(q)) &&
      (status === "all" || (status === "done") === !!state.done[x.id]),
  );
}

function card(x) {
  const details = detailsFor(x);
  const rewards =
    x.category === "quest" ? questXp[x.title.replaceAll("’", "'")] : null;
  const xpBadges = rewards
    ? rewards.length
      ? rewards
          .map(
            ([skill, xp, note]) =>
              `<span class="xp-badge"><b>${skill}</b><strong>+${typeof xp === "number" ? xp.toLocaleString("en-GB") : xp} XP</strong>${note ? `<small>${note}</small>` : ""}</span>`,
          )
          .join("")
      : '<span class="xp-badge none">No skill XP</span>'
    : "";
  return `<article class="milestone ${state.done[x.id] ? "done" : ""}" draggable="${currentView === "route"}" data-id="${x.id}">
    <span class="drag" title="Drag to reorder">${currentView === "route" ? "⠿" : ""}</span>
    <input class="check" type="checkbox" ${state.done[x.id] ? "checked" : ""} aria-label="Mark ${x.title} as completed">
    <div><div class="milestone-title">${x.title}</div><div class="milestone-desc">${x.desc}</div>${xpBadges ? `<div class="quest-xp" aria-label="Quest experience rewards">${xpBadges}</div>` : ""}</div>
    <div class="milestone-meta"><span class="tag ${x.category}">${categories[x.category].tag}</span><button class="details-toggle" type="button" aria-expanded="false" title="Show details">⌄</button></div>
    <div class="milestone-details" hidden><strong>${details.heading}</strong><ul>${details.rows.map((row) => `<li>${row}</li>`).join("")}</ul><a href="${wikiUrl(x)}" target="_blank" rel="noreferrer">Open full RuneScape Wiki guide <span>↗</span></a></div>
  </article>`;
}

function render() {
  if (currentView === "grinds") {
    renderGrinds();
    return;
  }
  if (currentView === "tips") {
    renderTips();
    return;
  }
  $("#grindTracker").hidden = true;
  $("#tipsPage").hidden = true;
  $("#milestoneList").hidden = false;
  let source =
    currentView === "route"
      ? [...routeItems].sort(
          (a, b) => state.order.indexOf(a.id) - state.order.indexOf(b.id),
        )
      : libraryItems;
  const items = filtered(source),
    list = $("#milestoneList");
  if (
    currentView === "route" &&
    currentPhase === "all" &&
    currentCategory === "all" &&
    !$("#searchInput").value &&
    $("#statusFilter").value === "all"
  ) {
    list.innerHTML = phases
      .map((p, i) => {
        const group = items.filter((x) => x.phase === p.id);
        return `<div class="phase-heading"><span class="phase-number">${i + 1}</span><div><h3>${p.name}</h3><p>${p.desc}</p></div></div>${group.map(card).join("")}`;
      })
      .join("");
  } else list.innerHTML = items.map(card).join("");
  $("#emptyState").hidden = items.length > 0;
  list.querySelectorAll(".check").forEach(
    (c) =>
      (c.onchange = (e) => {
        const id = e.target.closest(".milestone").dataset.id;
        state.done[id] = e.target.checked;
        save();
        render();
        updateStats();
      }),
  );
  list.querySelectorAll(".details-toggle").forEach(
    (button) =>
      (button.onclick = (e) => {
        const panel = e.currentTarget
            .closest(".milestone")
            .querySelector(".milestone-details"),
          open = panel.hidden;
        panel.hidden = !open;
        e.currentTarget.setAttribute("aria-expanded", String(open));
        e.currentTarget.textContent = open ? "⌃" : "⌄";
        e.currentTarget.title = open ? "Hide details" : "Show details";
      }),
  );
  enableDrag();
  updateStats();
}

function renderTips() {
  $("#grindTracker").hidden = true;
  $("#milestoneList").hidden = true;
  $("#emptyState").hidden = true;
  const page = $("#tipsPage");
  page.hidden = false;
  $("#tipList").innerHTML = communityTips.map((tip) => `<article class="tip-card"><span>Community tip</span><h3>${tip.title}</h3><div class="tip-prerequisites"><strong>Prerequisites</strong>${tip.prerequisites.map((item) => `<b>${item}</b>`).join("")}</div><p>${tip.description}</p></article>`).join("");
  const form = $("#tipForm");
  form.onsubmit = async (event) => {
    event.preventDefault();
    const status = $("#tipFormStatus");
    const button = form.querySelector("button");
    button.disabled = true;
    status.textContent = "Submitting…";
    try {
      const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(new FormData(form)).toString() });
      if (!response.ok) throw new Error("Tip submission failed");
      form.reset();
      status.textContent = "Thank you. Your tip was submitted for review.";
    } catch {
      status.textContent = "Submission failed. Please try again later.";
    } finally {
      button.disabled = false;
    }
  };
}

function renderGrinds() {
  const tracker = $("#grindTracker");
  tracker.hidden = false;
  $("#tipsPage").hidden = true;
  $("#milestoneList").hidden = true;
  $("#emptyState").hidden = true;
  tracker.innerHTML = `<div class="grind-summary"><strong>Resource estimates to level 99</strong><p>Enter your current level or exact total XP, choose a method, and record resources already gathered. Estimates exclude bonus XP, failed cooks and method-specific boosts.</p></div>${grindSkills
    .map((g, i) => {
      const s = state.grinds[g.skill] || {},
        level = s.level || 1,
        xp = s.xp ?? xpForLevel(level),
        methodIndex = s.method || 0,
        method = g.methods[methodIndex],
        remaining = Math.max(0, 13034431 - xp),
        urnBlocked =
          (g.skill === "Woodcutting" && method[0].startsWith("Yew")) ||
          (g.skill === "Cooking" && method[0].startsWith("Swordfish")),
        withUrn = !!s.urn && g.urn && !urnBlocked,
        effective = method[1] * (withUrn ? 1.2 : 1),
        needed =
          method[2] === "hours" ? remaining / method[1] : remaining / effective,
        have = s.have || 0,
        urns = withUrn ? Math.ceil(remaining / (g.urn.base * 1.2)) : 0,
        urnHave = s.urnHave || 0;
      return `<section class="grind-card" data-skill="${g.skill}"><header><div><span>${g.type}</span><h3>${g.skill} 99</h3></div><strong>${fmt(remaining)} XP left</strong></header><div class="grind-fields"><label>Current level<input class="grind-level" type="number" min="1" max="99" value="${level}"></label><label>Total XP<input class="grind-xp" type="number" min="0" max="13034431" value="${xp}"></label><label>Training method<select class="grind-method">${g.methods.map((m, mi) => `<option value="${mi}" ${mi === methodIndex ? "selected" : ""}>${m[0]}</option>`).join("")}</select></label></div><div class="resource-result"><div><span>Still required</span><strong>${fmt(Math.max(0, needed - have))} ${method[2]}</strong><small>${fmt(needed)} total at ${method[1].toLocaleString("en-GB")} XP each${withUrn ? " + 20% urn XP" : ""}</small></div><label>Already gathered<input class="grind-have" type="number" min="0" value="${have}"><span>/ ${fmt(needed)}</span></label></div><div class="location-tip"><span>Best location</span><strong>${method[3]}</strong><p>${method[4]}</p></div>${g.urn ? `<div class="urn-row"><label><input class="grind-urn" type="checkbox" ${withUrn ? "checked" : ""} ${urnBlocked ? "disabled" : ""}> Use ${g.urn.name}s</label><span>${withUrn ? `${fmt(Math.max(0, urns - urnHave))} still needed · ${fmt(Math.max(0, urns - urnHave) * 2)} soft clay · ${fmt(Math.max(0, urns - urnHave))} ${g.urn.rune}s` : "Urns unavailable for this method"}</span>${withUrn ? `<label class="urn-progress">Prepared <input class="grind-urn-have" type="number" min="0" value="${urnHave}"> / ${fmt(urns)}</label>` : ""}</div>` : ""}<a href="https://runescape.wiki/w/Free-to-play_${g.skill}_training" target="_blank" rel="noreferrer">Open training guide ↗</a></section>`;
    })
    .join(
      "",
    )}<section class="combat-guide"><header><div><span>Combat training</span><h3>Recommended monster ladder</h3></div><strong>Choose fast, reliable kills</strong></header><p class="combat-intro">These levels are conservative guidelines. For a Hardcore Ironman, accuracy, short bank trips and a tested escape matter more than theoretical XP per hour.</p><div class="combat-spot-list">${combatSpots.map((spot) => `<article><b>${spot.levels}</b><div><strong>${spot.name}</strong><span>${spot.tags}</span><p>${spot.detail}</p></div></article>`).join("")}</div><a href="https://runescape.wiki/w/Free-to-play_melee_training" target="_blank" rel="noreferrer">Open F2P combat training guide ↗</a></section>`;
  tracker.querySelectorAll(".grind-card").forEach((card) => {
    const skill = card.dataset.skill,
      update = (field, value) => {
        state.grinds[skill] ||= {};
        state.grinds[skill][field] = value;
        save();
        renderGrinds();
      };
    card.querySelector(".grind-level").onchange = (e) => {
      const level = Math.max(1, Math.min(99, +e.target.value || 1));
      state.grinds[skill] = {
        ...(state.grinds[skill] || {}),
        level,
        xp: xpForLevel(level),
      };
      save();
      renderGrinds();
    };
    card.querySelector(".grind-xp").onchange = (e) =>
      update("xp", Math.max(0, Math.min(13034431, +e.target.value || 0)));
    card.querySelector(".grind-method").onchange = (e) =>
      update("method", +e.target.value);
    card.querySelector(".grind-have").onchange = (e) =>
      update("have", Math.max(0, +e.target.value || 0));
    const urn = card.querySelector(".grind-urn");
    if (urn) urn.onchange = (e) => update("urn", e.target.checked);
    const urnHave = card.querySelector(".grind-urn-have");
    if (urnHave)
      urnHave.onchange = (e) =>
        update("urnHave", Math.max(0, +e.target.value || 0));
  });
}

function enableDrag() {
  if (currentView !== "route") return;
  let dragged = null;
  document.querySelectorAll(".milestone").forEach((el) => {
    el.addEventListener("dragstart", () => {
      dragged = el.dataset.id;
      el.classList.add("dragging");
    });
    el.addEventListener("dragend", () => el.classList.remove("dragging"));
    el.addEventListener("dragover", (e) => e.preventDefault());
    el.addEventListener("drop", (e) => {
      e.preventDefault();
      const target = el.dataset.id;
      if (!dragged || dragged === target) return;
      const order = state.order.filter((id) => id !== dragged),
        idx = order.indexOf(target);
      order.splice(idx, 0, dragged);
      state.order = order;
      save();
      render();
    });
  });
}

document.querySelectorAll(".view-tab").forEach(
  (b) =>
    (b.onclick = () => {
      currentView = b.dataset.view;
      currentCategory = "all";
      currentPhase = "all";
      document
        .querySelectorAll(".view-tab")
        .forEach((x) => x.classList.toggle("active", x === b));
      const headings = {
        route: [
          "YOUR ROUTE",
          "Recommended path",
          "Drag milestones into your preferred order. Changes are saved automatically on this device.",
        ],
        library: [
          "COMPLETE LIBRARY",
          "All milestones",
          "Every quest, level checkpoint, boss and major achievement goal in one place.",
        ],
        grinds: [
          "RESOURCE PLANNER",
          "99 Grind tracker",
          "Calculate remaining supplies from your current XP and track what you have already gathered.",
        ],
        tips: [
          "COMMUNITY KNOWLEDGE",
          "Community tips",
          "Practical F2P Ironman advice submitted by players and reviewed before publication.",
        ],
      };
      const [kicker, title, intro] = headings[currentView];
      $("#viewKicker").textContent = kicker;
      $("#viewTitle").textContent = title;
      $("#viewIntro").textContent = intro;
      $("#contentTools").hidden =
        currentView === "grinds" || currentView === "tips";
      buildFilters();
      buildPhases();
      render();
    }),
);
$("#searchInput").oninput = render;
$("#statusFilter").onchange = render;
$("#typeFilter").onchange = (e) => {
  currentCategory = e.target.value;
  buildFilters();
  render();
};
$("#exportBtn").onclick = () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: "application/json",
    }),
    a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "iron-path-progress.json";
  a.click();
  URL.revokeObjectURL(a.href);
};
$("#importBtn").onclick = () => $("#importFile").click();
$("#importFile").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      Object.assign(state, JSON.parse(reader.result));
      save();
      render();
    } catch {
      alert("This file does not contain valid Iron Path progress.");
    }
  };
  reader.readAsText(file);
};
$("#resetBtn").onclick = () => {
  if (confirm("Clear all completed milestones and your custom order?")) {
    localStorage.removeItem("ironPathState");
    location.reload();
  }
};
buildFilters();
buildPhases();
render();
renderDaily();

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
    "Follow the retiered F2P bow path: maple shortbows are tier 40 and acadia shortbows are tier 50. Yew bows are now members-only.",
    "Arrow unlocks now match their metal tier: iron at 10, steel at 20, mithril at 30, adamant at 40 and rune at 50 Fletching.",
    "Crossbows now unlock at 3/13/23/33/43/53 Fletching from bronze through rune; a rune crossbow still requires 50 Smithing for its limbs.",
    "Rune arrows give 12.5 Fletching XP each at level 50. Reserve enough ammunition for Ranged before selling surplus arrows.",
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
    "Private boss instances no longer charge an entry fee. Use one, track the Mole's digging phases and leave early if supplies fall below your safety margin.",
  ],
  "King Black Dragon": [
    "Suggested HCIM baseline: 70+ combat stats, dragonfire protection, prayer and strong food.",
    "Private boss instances no longer charge an entry fee. Access through the Grouping System where possible and avoid carrying valuables through the Wilderness.",
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

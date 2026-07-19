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

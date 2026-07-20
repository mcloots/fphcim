const communityTips = [
  {
    title: "Buy both Hardcore extra lives as soon as you qualify",
    prerequisites: ["1,000 total level and 100,000 coins for the first life", "1,600 total level and 10,000,000 coins for the second life", "Speak to Mr Ex in Edgeville before dying"],
    description:
      "Mr Ex sells two divine coins, and each adds one extra Hardcore death. Purchase them before you need them; they protect a future death and cannot restore HCIM status afterwards. Check remaining lives through Items Kept on Death → Death Information. Losing the final life converts the account to a normal Ironman.",
  },
  {
    title: "Build a real F2P emergency teleport setup",
    prerequisites: ["25 Magic for Varrock Teleport or a higher F2P teleport", "Required law and elemental runes", "War’s Retreat Teleport after 10 boss kills"],
    description:
      "Put a rune-funded Magic teleport and War’s Retreat Teleport on easy keybinds and test both before risky combat. Leave with a safe HP margin: lodestone teleports are interrupted by combat, while teleport blocks, stuns, restricted encounters and deep Wilderness can stop other escapes. Ring of life is members-only and is not a safeguard for a strict F2P account.",
  },
  {
    title: "Make early coins through General Stores",
    prerequisites: ["20 Mining and Crafting for uncommon gem rocks", "Or combat levels for Corpse spiders", "A convenient General Store"],
    description:
      "Mine and cut sapphires, emeralds and rubies at the Al Kharid uncommon gem rocks, then sell only surplus gems not needed for jewellery. Alternatively, kill Corpse spiders, craft their silk into spider-silk robe bottoms and sell those. Store offers fall as stock rises, so check the displayed price and sell in sensible batches.",
  },
  {
    title: "High Alch valuable duplicate equipment",
    prerequisites: ["55 Magic", "Nature runes", "44 Runecrafting recommended for self-supply"],
    description:
      "Use High Level Alchemy on items whose return justifies a scarce nature rune: duplicate rune equipment, blue dragonhide bodies or shields, and valuable equipment drops are strong targets. Keep your best gear and future upgrade materials. Alching during travel or other low-input activities also adds Magic XP.",
  },
  {
    title: "Sell rune arrows for repeatable late-game cash",
    prerequisites: ["50 Fletching", "50 Smithing for rune arrowheads", "A sustained feather supply"],
    description:
      "Fletch rune arrows from your ores and feather stock, then sell surplus arrows to a General Store for 153 coins each. This connects Mining, Smithing and Fletching without consuming nature runes. Keep a combat ammunition reserve before selling the rest.",
  },
  {
    title: "Choose General Store or High Alchemy deliberately",
    prerequisites: ["Check the shop offer", "Check the High Alchemy value", "Know your nature-rune needs"],
    description:
      "Use General Stores for low-value bulk products and early cash when nature runes are more useful elsewhere. High Alch compact, valuable equipment once the extra return is worth the rune. Examining a tradeable item on an Ironman shows its High Alchemy value, making the comparison quick; reserve supplies needed for equipment, urns, ammunition and level 99 grinds first.",
  },
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
    title: "Turn leftover rusty coins into Crafting XP",
    prerequisites: ["9 Crafting", "A complexity 6 Daemonheim floor", "The floor objective completed"],
    description:
      "Before ending a floor, spend leftover rusty coins on protomastyx hides and thread from the Smuggler. Craft protoleather bodies, sell them back for more rusty coins and repeat until you can no longer afford another cycle. Rusty coins disappear when you leave, so this adds Crafting XP to Dungeoneering progress without using surface supplies.",
  },
  {
    title: "Build a Daemonheim reward purchase order",
    prerequisites: ["Dungeoneering tokens", "Levels required by each reward"],
    description:
      "Start with the 2,000-token gem bag at 25 Dungeoneering and Crafting. Add the level-30 combat necklaces for 6,500 tokens each, upgrade to the level-50 necklaces for 15,500 each, and buy the 12,500-token Nature staff at 53 Dungeoneering and Magic for a 10% chance to save nature runes.",
  },
  {
    title: "Buy resource-saving Dungeoneering rewards before 99 grinds",
    prerequisites: ["Dungeoneering tokens", "Relevant reward requirements"],
    description:
      "Buy Scroll of efficiency for 20,000 tokens at 55 Dungeoneering and Smithing before mass Smithing. Buy Scroll of dexterity for another 20,000 tokens at 60 Dungeoneering and Crafting before dragonhide Crafting. Permanent material savings are unusually valuable on an Ironman because every refunded bar or hide also saves gathering time.",
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

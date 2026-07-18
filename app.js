const categories = {
  quest: { label: 'Quests', tag: 'Quest' },
  level: { label: 'Levels', tag: 'Level' },
  boss: { label: 'Bosses', tag: 'Boss' },
  achievement: { label: 'Achievements', tag: 'Achievement' }
};

const phases = [
  { id: 'start', name: 'Foundation', short: 'Phase 1', desc: 'Start safely, unlock mobility and collect quick quest XP.' },
  { id: 'setup', name: 'Self-sufficient', short: 'Phase 2', desc: 'Build your resource chain and baseline equipment.' },
  { id: 'quests', name: 'Questing', short: 'Phase 3', desc: 'Complete the more dangerous quest lines with proper preparation.' },
  { id: 'power', name: 'Power-up', short: 'Phase 4', desc: 'Tier 50 equipment, protection prayers and consistent combat.' },
  { id: 'boss', name: 'Bossing', short: 'Phase 5', desc: 'Progress from safe entry bosses to the final F2P tests.' },
  { id: 'max', name: 'The 99 path', short: 'Phase 6', desc: 'Efficient linked grinds towards every F2P level 99.' }
];

const questNames = [
  'Cook’s Assistant','The Blood Pact','Let Them Eat Pie','Rune Mysteries','The Restless Ghost','Imp Catcher','Demon Slayer','Ernest the Chicken','Goblin Diplomacy','Gunnar’s Ground','The Knight’s Sword','Pirate’s Treasure','Vampyre Slayer','Witch’s House','Gertrude’s Cat','Druidic Ritual','Wolf Whistle','What’s Mine is Yours','Stolen Hearts','Diamond in the Rough','Death Plateau','The Death of Chivalry','Perils of Ice Mountain','Myths of the White Lands','Swept Away','Beneath Cursed Tides','A Shadow over Ashdale','Song from the Depths','A Soul’s Bane','One Piercing Note','Missing, Presumed Death','Broken Home','Gower Quest','Dragon Slayer','Chef’s Assistant','Once Upon a Slime','Heartstealer','Violet is Blue','Violet is Blue Too','Necromancy!','Rune Memories','Duck Quest'
];

const skills = ['Attack','Strength','Defence','Constitution','Ranged','Prayer','Magic','Runecrafting','Dungeoneering','Mining','Smithing','Fishing','Cooking','Firemaking','Woodcutting','Crafting','Fletching'];
const skillMethods = {
  Attack: ['Train alongside Strength and Defence using the best self-made melee weapon available.','Burthorpe trolls and Lumbridge Catacombs early; move to hill giants, deadly red spiders or cockroach soldiers when your accuracy is reliable.','Prioritise 100% hit chance and useful drops over fighting the highest-level target.'],
  Strength: ['Use the same route as Attack, switching combat XP to Strength after each weapon-tier unlock.','Burthorpe trolls → hill giants → deadly red spiders or cockroach soldiers.','Keep Attack high enough to maintain accuracy; faster kills mean better XP and less food used.'],
  Defence: ['Train through melee, ranged or magic once your damage skill is at the current equipment tier.','Use low-risk monsters with predictable damage and a nearby bank.','Upgrade armour at 10-level metal tiers and never AFK combat on a Hardcore account.'],
  Constitution: ['Constitution XP is earned automatically while training combat. Do not grind it separately.','Quest rewards such as Witch’s House accelerate the early levels.','Let your other combat 99s carry this skill to 99.'],
  Ranged: ['Use the best bow, crossbow or thrown weapon you can produce consistently.','Burthorpe trolls early, then minotaurs, hill giants, lesser demons or cockroach soldiers.','Fletch ammunition in bulk first and exploit monsters weak to ranged.'],
  Prayer: ['Bury every bone from combat and prioritise big-bone-dropping targets such as hill giants.','Daemonheim prayer training and bone drops from your combat grinds reduce dedicated collection time.','Prayer is supply-limited in F2P; bank bones when the route is safe and never risk them in the Wilderness.'],
  Magic: ['Use combat spells with self-crafted runes; switch to High Level Alchemy at 55 for useful drops when nature runes permit.','Train on targets weak to magic and combine the grind with combat drops.','Runecrafting 44 supports nature runes; staves reduce elemental rune consumption.'],
  Runecrafting: ['Use Runespan for sustained XP, especially after the early altar levels.','Craft elemental and combat runes conventionally when you need supplies for Magic.','Alternate efficient Runespan sessions with supply runs instead of trying to source every Magic rune manually.'],
  Dungeoneering: ['Complete solo floors, reset only after finishing every floor available in your current prestige band.','Use small floors for speed early and larger floors once complexity and XP rewards improve.','Prestige errors cost substantial XP; bind the best weapon you can use.'],
  Mining: ['Mine the highest core ore needed by your Smithing tier and store it in the best ore box available.','Copper/tin → iron → coal/mithril → adamant/luminite → runite; common gem rocks are a strong high-level alternative.','Process ores rather than dropping them: an Ironman needs the bars, gems and Smithing XP.'],
  Smithing: ['Complete The Knight’s Sword early, then smith the highest core metal equipment available.','Use Burthorpe or Lumbridge furnaces/anvils and upgrade your ore box and pickaxe each tier.','Burial armour gives strong XP but destroys the item; first make permanent equipment and tool upgrades.'],
  Fishing: ['Move through crayfish, trout/salmon, lobster and swordfish as levels unlock.','Lumbridge/Barbarian Village early; Karamja or resource-dungeon spots for higher fish.','Bank and cook most catches: food security matters more than maximum fishing XP on HCIM.'],
  Cooking: ['Cook the fish gathered during Fishing and use the Lumbridge Castle range when convenient.','Advance from crayfish and trout to lobster and swordfish; stop using food with excessive burn rates.','Keep a protected bossing-food reserve instead of consuming every high-tier fish during routine training.'],
  Firemaking: ['Burn or bonfire logs gathered through Woodcutting after reserving enough for Fletching.','Use the highest log with a reasonable success rate; bonfires are relaxed while line fires can be faster.','Decide your log split before long sessions so Firemaking does not starve Fletching.'],
  Woodcutting: ['Progress through normal, oak, willow, maple and yew trees.','Draynor willows are convenient; Daemonheim resource dungeons and scattered yews support later levels.','Bank logs for Fletching and Firemaking rather than power-dropping valuable Ironman supplies.'],
  Crafting: ['Use quest XP early, then process clay, leather, silver/gold jewellery and gems obtained from Mining.','Common gem rocks can connect high-level Mining and Crafting progression.','Save cut gems for useful jewellery and urns; gather ingredients in batches to reduce travel.'],
  Fletching: ['Make the highest shortbows available from your Woodcutting logs, then string them when bowstrings are worth sourcing.','Create your own arrows, bolts and bows to support Ranged training.','Shortbows are generally the practical XP route; reserve ammunition supplies before using all logs for bows.']
};

const bossDetails = {
  'Count Draynor': ['Suggested: basic food and any combat style around level 15+.','Fight during Vampyre Slayer. Use the quest item and keep the door route clear.'],
  Delrith: ['Suggested: Silverlight, food and combat stats around 20+.','Fight during Demon Slayer and select the correct incantation from your quest notes.'],
  Elvarg: ['Suggested: 40+ combat stats, rune equipment, anti-dragon shield and strong food.','Keep the shield equipped, watch your food and retain a one-click emergency teleport.'],
  Agoroth: ['Suggested: 40+ combat stats, solid food and familiar combat abilities.','Complete A Shadow over Ashdale; avoid telegraphed attacks rather than trying to absorb them.'],
  'Ivar, King of Bones': ['Suggested HCIM baseline: level 50+ in your chosen combat style, 50+ Defence, 43 Prayer and reliable tier 50 equipment.','Learn his three telegraphed styles: Bone Bludgeon uses melee, Skeletal Shrapnel uses ranged and Conk Blast uses magic. Move out of area attacks and switch to the matching protection prayer before each hit.','Fight him at Hollow Hill as your first repeatable mechanics boss. His bonecrusher maul, magic skull mask, colossal bones and pet drop are available in F2P.'],
  'Giant Mole': ['Suggested HCIM baseline: 60+ combat stats, tier 50 gear, protection prayers and a full food inventory.','Use an instance, track its digging phases and leave early if supplies fall below your safety margin.'],
  'King Black Dragon': ['Suggested HCIM baseline: 70+ combat stats, dragonfire protection, prayer and strong food.','Access through the Grouping System where possible; avoid carrying valuables through the Wilderness.'],
  'Chaos Elemental': ['Suggested: 70+ combat stats, cheap replaceable gear and free inventory spaces.','This is a Wilderness encounter. It is optional and disproportionately risky for a Hardcore account.']
};

const questWarnings = {
  'The Knight’s Sword':'Bring food and avoid unnecessary contact with Ice Warriors and Ice Giants.',
  'Witch’s House':'Prepare food before the experiment’s multiple forms and do not underestimate its final form.',
  'The Death of Chivalry':'Bring combat supplies and keep an emergency teleport available.',
  'Dragon Slayer':'Equip an anti-dragon shield for Elvarg and use your strongest reliable food.',
  'Broken Home':'The normal completion is safe when following the guide; challenge runs can wait.',
  'A Shadow over Ashdale':'Review Agoroth’s telegraphed attacks before entering the final encounter.'
};
const route = [
  ['start','achievement','Activate every F2P lodestone','Unlock Lumbridge, Burthorpe, Taverley, Falador, Port Sarim, Draynor, Varrock, Edgeville, Al Kharid, Ashdale, City of Um, Wendlewick and Wilderness Crater.'],
  ['start','achievement','Set up your daily routine','Complete daily challenges, check Shooting Stars, and buy feather packs from Lumbridge and Port Sarim for future Fishing and Fletching.'],
  ['start','achievement','Join the F2P Ironman community','Use the F2pironmanfc Friends Chat and Star Find community to locate stars and ask current F2P questions.'],
  ['start','quest','The Blood Pact','An early combat introduction that unlocks the Lumbridge Catacombs.'],
  ['start','quest','Cook’s Assistant','Collect a quick Quest Point and learn the basic route around Lumbridge.'],
  ['start','quest','Rune Mysteries','Unlock the Runecrafting path and access to rune essence.'],
  ['start','quest','The Restless Ghost','Important early Prayer XP without dangerous combat.'],
  ['start','level','Fishing & Cooking 20','Fish crayfish in Burthorpe and cook them nearby. Keep a food stack before starting combat quests.'],
  ['start','level','Woodcutting, Firemaking & Fletching 20','Cut normal and oak logs around Burthorpe; split them between fires and your first bows or arrow shafts.'],
  ['start','level','Mining & Smithing 20','Mine copper and tin, smelt bronze bars, and upgrade your pickaxe and ore box as soon as each tier allows.'],
  ['setup','quest','The Knight’s Sword','A major early Smithing XP boost; bring food for the Ice Warriors.'],
  ['setup','quest','What’s Mine is Yours','Unlock Doric and Boric tasks and additional Mining and Smithing progression.'],
  ['setup','level','Mining & Smithing 50','Mine your own ores, upgrade to rune and retain bars for Crafting and Fletching.'],
  ['setup','level','Fishing & Cooking 50','Build a generous stock of swordfish and lobsters for quests and bosses.'],
  ['setup','level','Woodcutting, Firemaking & Fletching 50','Use logs across three skills and make your own ranged ammunition and shortbows.'],
  ['setup','level','Combat stats to 40','Train Attack, Strength, Defence, Ranged and Magic; Constitution will follow naturally.'],
  ['setup','level','Runecrafting 50','Use Runespan for sustained XP, but craft rune supplies conventionally when Magic needs them.'],
  ['setup','level','Magic 55 & High Level Alchemy','Unlock High Level Alchemy for duplicate drops and self-smithed equipment; Runecrafting 44 supports nature runes.'],
  ['setup','level','Crafting urn supply','Mine clay, make skilling urns in batches and use them throughout Mining, Fishing, Cooking, Woodcutting, Firemaking and Runecrafting.'],
  ['quests','quest','Witch’s House','Free Constitution XP; take care during the experiment fight.'],
  ['quests','quest','Death Plateau','Unlock further Burthorpe content and collect useful combat rewards.'],
  ['quests','quest','The Death of Chivalry','Strong early rewards, but bring good food and an emergency teleport.'],
  ['quests','quest','Song from the Depths','Claim its F2P quest rewards and continue the complete quest route; no members-only bossing is required.'],
  ['quests','quest','Broken Home','Complete a relaxed first run before pursuing the challenge rewards later.'],
  ['quests','quest','Dragon Slayer','HCIM checkpoint: rune equipment, an anti-dragon shield, good food and a teleport.'],
  ['quests','achievement','All 42 permanent F2P quests','Finish the remaining safe quests and end with the hardest combat quests.'],
  ['power','level','All combat stats 60+','A sensible safety baseline for Giant Mole, KBD and quest replays.'],
  ['power','level','Prayer 43','Protection prayers are a core layer of HCIM safety.'],
  ['power','achievement','Lumbridge achievements: Beginner → Hard','Work through each tier and claim Explorer’s ring rewards as they become available.'],
  ['power','achievement','Varrock achievements: Easy → Elite','Complete every F2P-compatible task and benefit from Varrock armour.'],
  ['power','achievement','Daemonheim achievements','Combine these with Dungeoneering training and resource dungeons.'],
  ['power','achievement','Unlock F2P resource dungeons','Use Dungeoneering milestones to open convenient ore, monster and banking locations as they become available.'],
  ['power','level','Prepare the long grinds','Stock ore boxes, urns, feathers, logs, runes and food before committing to extended 90–99 sessions.'],
  ['boss','boss','Ivar, King of Bones','Your first repeatable mechanics boss: enter with 50+ in one combat style, 50+ Defence and preferably 43 Prayer. Learn to answer his melee, ranged and magic specials correctly.'],
  ['boss','achievement','Ivar combat achievements','Progress from your first kill through Broken Bones kill-count milestones, then complete Protect from Ivar and the remaining mechanic challenges.'],
  ['boss','boss','Giant Mole','Your first repeatable boss. Use a safe instance and learn its escape phases.'],
  ['boss','boss','King Black Dragon','Bring dragonfire protection, food and a teleport; avoid risky Wilderness routes.'],
  ['boss','boss','Chaos Elemental','Only attempt this if you knowingly accept the Wilderness risk; it is not required for any 99.'],
  ['boss','achievement','Boss collection & kill milestones','Build kill count for each boss; pets and rare drops are optional prestige goals.'],
  ['max','level','Mining → Smithing 99','Mine the ores for your own bars, keep the best ore box, and turn spare bars into burial equipment after permanent upgrades are complete.'],
  ['max','level','Woodcutting → Fletching & Firemaking 99','Distribute logs deliberately between bows and bonfires.'],
  ['max','level','Fishing → Cooking 99','Cook your entire catch and keep a generous HCIM food reserve separate.'],
  ['max','level','Runecrafting → Magic 99','Use Runespan for Runecrafting and your self-made runes for Magic where efficient.'],
  ['max','level','Melee trio + Constitution 99','Train Attack, Strength and Defence in a controlled way; Constitution progresses alongside them.'],
  ['max','level','Ranged 99','Use self-made equipment and choose monsters with useful drops.'],
  ['max','level','Crafting 99','Process gem drops, hides, silver and gold gathered during your other grinds.'],
  ['max','level','Prayer 99','The longest HCIM resource grind: collect bones passively throughout combat training.'],
  ['max','level','Dungeoneering 99','Run solo floors, prestige correctly, bind a strong primary and secondary style, and claim every useful F2P token reward.'],
  ['max','achievement','17 F2P skills at level 99','The ultimate F2P max milestone.'],
  ['max','achievement','Maximum HCIM-compatible F2P RuneScore','Complete every F2P achievement that can actually be earned on a Hardcore Ironman.']
];

const slug = text => text.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const routeItems = route.map((x,i)=>({id:`route-${slug(x[2])}`, phase:x[0], category:x[1], title:x[2], desc:x[3], route:true, original:i}));
const questItems = questNames.map((title,i)=>({id:`quest-${slug(title)}`, phase:'quests', category:'quest', title, desc:'Complete this permanent free-to-play quest.', original:i}));
const levelItems = skills.flatMap((skill,si)=>[10,20,30,40,50,60,70,80,90,99].map((level,li)=>({id:`level-${slug(skill)}-${level}`, phase:'max', category:'level', title:`${skill} level ${level}`, desc:level===99?'Earn 13,034,431 XP and reach the skillcape milestone.':`Reach level ${level} in ${skill}.`, original:si*10+li})));
const bossItems = ['Count Draynor','Delrith','Elvarg','Agoroth','Ivar, King of Bones','Giant Mole','King Black Dragon','Chaos Elemental'].map((title,i)=>({id:`boss-${slug(title)}`,phase:'boss',category:'boss',title,desc:i<4?'Defeat this F2P quest boss without risking your HCIM status.':'Defeat this repeatable F2P boss and record your first kill.',original:i}));
const achievementItems = [
  ['Lodestone Network Free Area','Activate all 13 F2P lodestones.'],['Lumbridge Beginner','Complete every available beginner task.'],['Lumbridge Easy','Complete every available easy task.'],['Lumbridge Medium','Complete every available medium task.'],['Lumbridge Hard','Complete every available hard task.'],['Varrock Easy','Complete every F2P-compatible easy task.'],['Varrock Medium','Complete every F2P-compatible medium task.'],['Varrock Hard','Complete every F2P-compatible hard task.'],['Varrock Elite','Complete every F2P-compatible elite task.'],['Daemonheim Easy','Complete the easy Daemonheim tasks.'],['Daemonheim Medium','Complete the medium Daemonheim tasks.'],['Ivar combat achievements','Complete Ivar’s kill-count and mechanics achievements.'],['All F2P quests','Complete all 42 permanent F2P quests.'],['First level 99','Earn your first F2P skillcape.'],['F2P maxed','Reach level 99 in all 17 F2P skills.'],['Maximum HCIM-compatible RuneScore','Complete every F2P achievement that is obtainable on a Hardcore Ironman.']
].map((x,i)=>({id:`achievement-${slug(x[0])}`,phase:i<5?'start':i<11?'power':'max',category:'achievement',title:x[0],desc:x[1],original:i}));

const libraryItems = [...questItems,...levelItems,...bossItems,...achievementItems];
const grindSkills = [
  {skill:'Mining',type:'Gathering',urn:{name:'Strong mining urn',base:2000,rune:'earth rune'},methods:[['Runite ore (estimate)',400,'ores'],['Luminite (estimate)',340,'ores'],['Common gem rocks (estimate)',120,'gems']]},
  {skill:'Fishing',type:'Gathering',urn:{name:'Plain fishing urn',base:2500,rune:'water rune'},methods:[['Fly fishing, trout/salmon average',60,'feathers'],['Lobster',90,'lobsters'],['Swordfish',100,'swordfish']]},
  {skill:'Woodcutting',type:'Gathering',urn:{name:'Plain woodcutting urn',base:4125,rune:'earth rune'},methods:[['Willow logs',67.5,'logs'],['Maple logs',100,'logs'],['Yew logs (urn does not apply)',175,'logs']]},
  {skill:'Smithing',type:'Artisan',methods:[['Rune burial sets (bar-equivalent estimate)',1600,'rune bars'],['Rune equipment +3 (bar-equivalent estimate)',1200,'rune bars'],['Adamant burial sets (bar-equivalent estimate)',600,'adamant bars']]},
  {skill:'Cooking',type:'Artisan',urn:{name:'Plain cooking urn',base:4750,rune:'fire rune'},methods:[['Swordfish (successful cooks)',140,'swordfish'],['Lobster (successful cooks)',120,'lobsters'],['Salmon (successful cooks)',90,'salmon']]},
  {skill:'Firemaking',type:'Artisan',methods:[['Willow logs',90,'logs'],['Maple logs',135,'logs'],['Yew logs',202.5,'logs']]},
  {skill:'Fletching',type:'Artisan',methods:[['Willow shortbows (u)',33.3,'willow logs'],['Maple shortbows (u)',50,'maple logs'],['Yew shortbows (u)',67.5,'yew logs']]},
  {skill:'Crafting',type:'Artisan',methods:[['Cut diamonds',107.5,'diamonds'],['Cut rubies',85,'rubies'],['Strong mining urns',85.2,'urns']]},
  {skill:'Runecrafting',type:'Artisan',methods:[['Runespan (estimated XP/hour)',60000,'hours'],['Nature runes (estimated XP/essence)',9,'rune essence']]}
];
const state = JSON.parse(localStorage.getItem('ironPathState') || '{}');
state.done ||= {};
state.order ||= routeItems.map(x=>x.id);
state.grinds ||= {};
let currentView='route', currentCategory='all', currentPhase='all';

const $=s=>document.querySelector(s);
const save=()=>localStorage.setItem('ironPathState',JSON.stringify(state));
const xpForLevel=level=>{let points=0;for(let i=1;i<Math.max(1,Math.min(99,level));i++)points+=Math.floor(i+300*Math.pow(2,i/7));return Math.floor(points/4)};
const fmt=value=>Math.max(0,Math.ceil(value)).toLocaleString('en-GB');
const wikiUrl=item=>{
  if(item.category==='level') {
    const skill=skills.find(name=>item.title.startsWith(name));
    if(!skill) return 'https://runescape.wiki/w/Skill_training_guides';
    return `https://runescape.wiki/w/Free-to-play_${encodeURIComponent((skill==='Attack'||skill==='Strength'||skill==='Defence'||skill==='Constitution'?'melee':skill).replaceAll(' ','_'))}_training`;
  }
  if(item.category==='achievement' && item.title.includes('RuneScore')) return 'https://runescape.wiki/w/List_of_free-to-play_achievements';
  if(item.category==='achievement' && item.title.toLowerCase().includes('quest')) return 'https://runescape.wiki/w/List_of_quests_by_membership_status';
  if(item.category==='achievement' && item.title.startsWith('Lumbridge')) return 'https://runescape.wiki/w/Lumbridge_achievements';
  if(item.category==='achievement' && item.title.startsWith('Varrock')) return 'https://runescape.wiki/w/Varrock_achievements';
  if(item.category==='achievement' && item.title.startsWith('Daemonheim')) return 'https://runescape.wiki/w/Daemonheim_achievements';
  if(item.category==='achievement' && item.title.startsWith('Ivar')) return 'https://runescape.wiki/w/Category:Ivar,_King_of_Bones_achievements';
  if(item.category==='achievement' && item.title.toLowerCase().includes('lodestone')) return 'https://runescape.wiki/w/Category:Free_to_Play_Lodestones_achievements';
  if(item.category==='achievement' && (item.title.includes('level 99')||item.title.includes('maxed'))) return 'https://runescape.wiki/w/Skill_mastery';
  if(item.category==='achievement') return `https://runescape.wiki/w/${encodeURIComponent(item.title.replaceAll(' ','_'))}`;
  return `https://runescape.wiki/w/${encodeURIComponent(item.title.replaceAll(' ','_'))}`;
};

function detailsFor(item){
  if(item.category==='level'){
    const skill=skills.find(name=>item.title.startsWith(name));
    const level=Number(item.title.match(/level (\d+)/)?.[1]||item.title.match(/(\d+)$/)?.[1]||0);
    const band=level<=20?'Early game':level<=50?'Building supplies':level<=80?'Core grind':'Long-term grind';
    return {heading:`${band} method`, rows:skillMethods[skill]||['Use the linked F2P training guide for the current best method.','Combine training with supplies needed by another skill.','Bank regularly and avoid dangerous AFK methods on HCIM.']};
  }
  if(item.category==='quest') return {heading:'Quest preparation',rows:[questWarnings[item.title]||'Gather every required item before starting and use the linked quick guide to minimise travel.','Complete quests early when their XP rewards skip slow low-level training.','HCIM: bring food for every combat section and keep a one-click teleport when the encounter permits it.']};
  if(item.category==='boss') return {heading:'HCIM strategy',rows:bossDetails[item.title]||['Check the linked strategy page for attacks and required quest items.','Use your best reliable gear and bring more food than the normal recommendation.','Set a supply threshold for teleporting out before the fight starts.']};
  return {heading:'Completion notes',rows:[item.desc,'Open the Wiki page to view exact requirements, task tiers and any prerequisite quests.','Some F2P achievements cannot be completed by Ironmen; check the restrictions before gathering supplies.']};
}

function updateStats(){
  const allIds=new Set([...routeItems,...libraryItems].map(x=>x.id));
  const done=[...allIds].filter(id=>state.done[id]).length;
  const total=allIds.size, pct=total?Math.round(done/total*100):0;
  $('#doneCount').textContent=done; $('#totalCount').textContent=total; $('#percentCount').textContent=`${pct}%`;
  $('#progressFill').style.width=`${pct}%`; $('#progressText').textContent=`${done} / ${total}`;
  const next=routeItems.sort((a,b)=>state.order.indexOf(a.id)-state.order.indexOf(b.id)).find(x=>!state.done[x.id]);
  $('#nextLabel').textContent=next?.title||'F2P completion!';
}

function buildFilters(){
  $('.side-block:nth-child(2)').hidden=currentView==='grinds';
  if(currentView==='grinds') return;
  const source=currentView==='route'?routeItems:libraryItems;
  const buttons=[['all','All',source.length],...Object.entries(categories).map(([key,val])=>[key,val.label,source.filter(x=>x.category===key).length])];
  $('#categoryFilters').innerHTML=buttons.map(([key,label,count])=>`<button class="filter-btn ${currentCategory===key?'active':''}" data-category="${key}">${label}<span>${count}</span></button>`).join('');
  document.querySelectorAll('.filter-btn').forEach(b=>b.onclick=()=>{currentCategory=b.dataset.category;buildFilters();render();});
}

function buildPhases(){
  $('#phaseNav').hidden=currentView!=='route';
  $('#phaseNav').innerHTML=[`<button class="phase-btn ${currentPhase==='all'?'active':''}" data-phase="all">Full route</button>`,...phases.map(p=>`<button class="phase-btn ${currentPhase===p.id?'active':''}" data-phase="${p.id}">${p.short}</button>`)].join('');
  document.querySelectorAll('.phase-btn').forEach(b=>b.onclick=()=>{currentPhase=b.dataset.phase;buildPhases();render();});
}

function filtered(items){
  const q=$('#searchInput').value.trim().toLowerCase(), status=$('#statusFilter').value;
  return items.filter(x=>(currentCategory==='all'||x.category===currentCategory)&&(currentPhase==='all'||x.phase===currentPhase)&&(!q||`${x.title} ${x.desc}`.toLowerCase().includes(q))&&(status==='all'||(status==='done')===!!state.done[x.id]));
}

function card(x){
  const details=detailsFor(x);
  return `<article class="milestone ${state.done[x.id]?'done':''}" draggable="${currentView==='route'}" data-id="${x.id}">
    <span class="drag" title="Drag to reorder">${currentView==='route'?'⠿':''}</span>
    <input class="check" type="checkbox" ${state.done[x.id]?'checked':''} aria-label="Mark ${x.title} as completed">
    <div><div class="milestone-title">${x.title}</div><div class="milestone-desc">${x.desc}</div></div>
    <div class="milestone-meta"><span class="tag ${x.category}">${categories[x.category].tag}</span><button class="details-toggle" type="button" aria-expanded="false" title="Show details">⌄</button></div>
    <div class="milestone-details" hidden><strong>${details.heading}</strong><ul>${details.rows.map(row=>`<li>${row}</li>`).join('')}</ul><a href="${wikiUrl(x)}" target="_blank" rel="noreferrer">Open full RuneScape Wiki guide <span>↗</span></a></div>
  </article>`;
}

function render(){
  if(currentView==='grinds'){renderGrinds();return;}
  $('#grindTracker').hidden=true; $('#milestoneList').hidden=false;
  let source=currentView==='route'?[...routeItems].sort((a,b)=>state.order.indexOf(a.id)-state.order.indexOf(b.id)):libraryItems;
  const items=filtered(source), list=$('#milestoneList');
  if(currentView==='route'&&currentPhase==='all'&&currentCategory==='all'&&!$('#searchInput').value&&$('#statusFilter').value==='all'){
    list.innerHTML=phases.map((p,i)=>{const group=items.filter(x=>x.phase===p.id);return `<div class="phase-heading"><span class="phase-number">${i+1}</span><div><h3>${p.name}</h3><p>${p.desc}</p></div></div>${group.map(card).join('')}`}).join('');
  } else list.innerHTML=items.map(card).join('');
  $('#emptyState').hidden=items.length>0;
  list.querySelectorAll('.check').forEach(c=>c.onchange=e=>{const id=e.target.closest('.milestone').dataset.id;state.done[id]=e.target.checked;save();render();updateStats();});
  list.querySelectorAll('.details-toggle').forEach(button=>button.onclick=e=>{const panel=e.currentTarget.closest('.milestone').querySelector('.milestone-details'),open=panel.hidden;panel.hidden=!open;e.currentTarget.setAttribute('aria-expanded',String(open));e.currentTarget.textContent=open?'⌃':'⌄';e.currentTarget.title=open?'Hide details':'Show details';});
  enableDrag(); updateStats();
}

function renderGrinds(){
  const tracker=$('#grindTracker'); tracker.hidden=false; $('#milestoneList').hidden=true; $('#emptyState').hidden=true;
  tracker.innerHTML=`<div class="grind-summary"><strong>Resource estimates to level 99</strong><p>Enter your current level or exact total XP, choose a method, and record resources already gathered. Estimates exclude bonus XP, failed cooks and method-specific boosts.</p></div>${grindSkills.map((g,i)=>{
    const s=state.grinds[g.skill]||{},level=s.level||1,xp=s.xp??xpForLevel(level),methodIndex=s.method||0,method=g.methods[methodIndex],remaining=Math.max(0,13034431-xp),urnBlocked=(g.skill==='Woodcutting'&&method[0].startsWith('Yew'))||(g.skill==='Cooking'&&method[0].startsWith('Swordfish')),withUrn=!!s.urn&&g.urn&&!urnBlocked,effective=method[1]*(withUrn?1.2:1),needed=method[2]==='hours'?remaining/method[1]:remaining/effective,have=s.have||0,urns=withUrn?Math.ceil(remaining/(g.urn.base*1.2)):0,urnHave=s.urnHave||0;
    return `<section class="grind-card" data-skill="${g.skill}"><header><div><span>${g.type}</span><h3>${g.skill} 99</h3></div><strong>${fmt(remaining)} XP left</strong></header><div class="grind-fields"><label>Current level<input class="grind-level" type="number" min="1" max="99" value="${level}"></label><label>Total XP<input class="grind-xp" type="number" min="0" max="13034431" value="${xp}"></label><label>Training method<select class="grind-method">${g.methods.map((m,mi)=>`<option value="${mi}" ${mi===methodIndex?'selected':''}>${m[0]}</option>`).join('')}</select></label></div><div class="resource-result"><div><span>Still required</span><strong>${fmt(Math.max(0,needed-have))} ${method[2]}</strong><small>${fmt(needed)} total at ${method[1].toLocaleString('en-GB')} XP each${withUrn?' + 20% urn XP':''}</small></div><label>Already gathered<input class="grind-have" type="number" min="0" value="${have}"><span>/ ${fmt(needed)}</span></label></div>${g.urn?`<div class="urn-row"><label><input class="grind-urn" type="checkbox" ${withUrn?'checked':''} ${urnBlocked?'disabled':''}> Use ${g.urn.name}s</label><span>${withUrn?`${fmt(Math.max(0,urns-urnHave))} still needed · ${fmt(Math.max(0,urns-urnHave)*2)} soft clay · ${fmt(Math.max(0,urns-urnHave))} ${g.urn.rune}s`:'Urns unavailable for this method'}</span>${withUrn?`<label class="urn-progress">Prepared <input class="grind-urn-have" type="number" min="0" value="${urnHave}"> / ${fmt(urns)}</label>`:''}</div>`:''}<a href="https://runescape.wiki/w/Free-to-play_${g.skill}_training" target="_blank" rel="noreferrer">Open training guide ↗</a></section>`;
  }).join('')}`;
  tracker.querySelectorAll('.grind-card').forEach(card=>{
    const skill=card.dataset.skill,update=(field,value)=>{state.grinds[skill]||={};state.grinds[skill][field]=value;save();renderGrinds();};
    card.querySelector('.grind-level').onchange=e=>{const level=Math.max(1,Math.min(99,+e.target.value||1));state.grinds[skill]={...(state.grinds[skill]||{}),level,xp:xpForLevel(level)};save();renderGrinds();};
    card.querySelector('.grind-xp').onchange=e=>update('xp',Math.max(0,Math.min(13034431,+e.target.value||0)));
    card.querySelector('.grind-method').onchange=e=>update('method',+e.target.value);
    card.querySelector('.grind-have').onchange=e=>update('have',Math.max(0,+e.target.value||0));
    const urn=card.querySelector('.grind-urn');if(urn)urn.onchange=e=>update('urn',e.target.checked);
    const urnHave=card.querySelector('.grind-urn-have');if(urnHave)urnHave.onchange=e=>update('urnHave',Math.max(0,+e.target.value||0));
  });
}

function enableDrag(){
  if(currentView!=='route')return; let dragged=null;
  document.querySelectorAll('.milestone').forEach(el=>{
    el.addEventListener('dragstart',()=>{dragged=el.dataset.id;el.classList.add('dragging')});
    el.addEventListener('dragend',()=>el.classList.remove('dragging'));
    el.addEventListener('dragover',e=>e.preventDefault());
    el.addEventListener('drop',e=>{e.preventDefault();const target=el.dataset.id;if(!dragged||dragged===target)return;const order=state.order.filter(id=>id!==dragged),idx=order.indexOf(target);order.splice(idx,0,dragged);state.order=order;save();render();});
  });
}

document.querySelectorAll('.view-tab').forEach(b=>b.onclick=()=>{currentView=b.dataset.view;currentCategory='all';currentPhase='all';document.querySelectorAll('.view-tab').forEach(x=>x.classList.toggle('active',x===b));const grind=currentView==='grinds';$('#viewKicker').textContent=grind?'RESOURCE PLANNER':currentView==='route'?'YOUR ROUTE':'COMPLETE LIBRARY';$('#viewTitle').textContent=grind?'99 Grind tracker':currentView==='route'?'Recommended path':'All milestones';$('#viewIntro').textContent=grind?'Calculate remaining supplies from your current XP and track what you have already gathered.':currentView==='route'?'Drag milestones into your preferred order. Changes are saved automatically on this device.':'Every quest, level checkpoint, boss and major achievement goal in one place.';$('#contentTools').hidden=grind;buildFilters();buildPhases();render();});
$('#searchInput').oninput=render; $('#statusFilter').onchange=render;
$('#exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='iron-path-progress.json';a.click();URL.revokeObjectURL(a.href);};
$('#importBtn').onclick=()=>$('#importFile').click();
$('#importFile').onchange=e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{Object.assign(state,JSON.parse(reader.result));save();render();}catch{alert('This file does not contain valid Iron Path progress.')}};reader.readAsText(file);};
$('#resetBtn').onclick=()=>{if(confirm('Clear all completed milestones and your custom order?')){localStorage.removeItem('ironPathState');location.reload();}};
buildFilters(); buildPhases(); render();

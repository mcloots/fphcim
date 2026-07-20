const SKILLS = [
  "Attack", "Defence", "Strength", "Constitution", "Ranged", "Prayer",
  "Magic", "Cooking", "Woodcutting", "Fletching", "Fishing", "Firemaking",
  "Crafting", "Smithing", "Mining", "Herblore", "Agility", "Thieving",
  "Slayer", "Farming", "Runecrafting", "Hunter", "Construction", "Summoning",
  "Dungeoneering", "Divination", "Invention", "Archaeology", "Necromancy",
];

const response = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": statusCode === 200 ? "public, max-age=300" : "no-store",
  },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  const user = (event.queryStringParameters?.user || "").trim();
  if (!/^[A-Za-z0-9 _-]{1,12}$/.test(user))
    return response(400, { error: "Enter a valid RuneScape display name." });

  const encoded = encodeURIComponent(user);
  try {
    const [profileResult, questResult] = await Promise.all([
      fetch(`https://apps.runescape.com/runemetrics/profile/profile?user=${encoded}&activities=0`),
      fetch(`https://apps.runescape.com/runemetrics/quests?user=${encoded}`),
    ]);
    if (!profileResult.ok) throw new Error("RuneMetrics profile request failed");
    const profile = await profileResult.json();
    if (profile.error || !Array.isArray(profile.skillvalues))
      return response(404, {
        error: "This character was not found or its RuneMetrics profile is private.",
      });

    const questPayload = questResult.ok ? await questResult.json() : [];
    const questList = Array.isArray(questPayload)
      ? questPayload
      : Array.isArray(questPayload.quests)
        ? questPayload.quests
        : [];
    const skills = {};
    profile.skillvalues.forEach((skill) => {
      if (SKILLS[skill.id]) skills[SKILLS[skill.id]] = Number(skill.level) || 1;
    });

    return response(200, {
      name: profile.name || user,
      combatLevel: Number(profile.combatlevel) || null,
      totalLevel: Number(profile.totalskill) || null,
      skills,
      quests: questList.map((quest) => ({
        title: quest.title,
        status: quest.status,
        eligible: Boolean(quest.userEligible),
      })),
      fetchedAt: new Date().toISOString(),
    });
  } catch {
    return response(502, { error: "RuneMetrics is temporarily unavailable. Try again shortly." });
  }
};

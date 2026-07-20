(() => {
  const skills = [
    "Attack", "Defence", "Strength", "Constitution", "Ranged", "Prayer",
    "Magic", "Cooking", "Woodcutting", "Fletching", "Fishing", "Firemaking",
    "Crafting", "Smithing", "Mining", "Runecrafting", "Dungeoneering",
  ];
  const combatSkills = ["Attack", "Defence", "Strength", "Constitution", "Ranged", "Prayer", "Magic"];
  const normalise = (value) => value.toLowerCase().replaceAll("’", "'").replace(/[^a-z0-9]/g, "");

  function requirementsFor(item) {
    const requirements = new Map();
    const text = `${item.title}. ${item.desc}`;
    const add = (skill, level) => {
      if (level > (requirements.get(skill) || 0)) requirements.set(skill, level);
    };

    const exactLevel = item.title.match(/^(.+) level (\d+)$/i);
    if (exactLevel && skills.includes(exactLevel[1])) add(exactLevel[1], Number(exactLevel[2]));

    skills.forEach((skill) => {
      const pattern = new RegExp(`${skill}(?:\\s+level)?[^0-9]{0,22}(\\d{1,3})`, "i");
      const match = text.match(pattern);
      if (match) add(skill, Number(match[1]));
    });

    const combat = item.title.match(/(?:all )?combat stats(?: to)? (\d+)\+?/i);
    if (combat) combatSkills.forEach((skill) => add(skill, Number(combat[1])));
    if (/17 F2P skills at level 99/i.test(item.title)) skills.forEach((skill) => add(skill, 99));
    return [...requirements].map(([skill, level]) => ({ skill, level }));
  }

  function evaluate(item, data) {
    if (!data?.skills) return null;
    if (item.category === "quest") {
      const quest = data.quests?.find((candidate) => normalise(candidate.title) === normalise(item.title));
      if (quest) {
        if (/completed/i.test(quest.status)) return { status: "complete", label: "Quest complete", detail: "Completed in game" };
        return quest.eligible
          ? { status: "ready", label: "Ready", detail: "Quest requirements met" }
          : { status: "locked", label: "Not ready", detail: "Quest requirements not met" };
      }
    }

    const requirements = requirementsFor(item);
    if (!requirements.length) return { status: "info", label: "Check details", detail: "No level gate detected" };
    const missing = requirements.filter(({ skill, level }) => (data.skills[skill] || 1) < level);
    if (!missing.length)
      return { status: "ready", label: "Levels ready", detail: requirements.map(({ skill, level }) => `${skill} ${level}`).join(", ") };
    return {
      status: "locked",
      label: "Missing levels",
      detail: missing.map(({ skill, level }) => `${skill} ${data.skills[skill] || 1}/${level}`).join(", "),
    };
  }

  window.RSProfile = { evaluate };
})();

(() => {
  const skills = [
    "Attack", "Defence", "Strength", "Constitution", "Ranged", "Prayer",
    "Magic", "Cooking", "Woodcutting", "Fletching", "Fishing", "Firemaking",
    "Crafting", "Smithing", "Mining", "Runecrafting", "Dungeoneering",
  ];
  const combatSkills = ["Attack", "Defence", "Strength", "Constitution", "Ranged", "Prayer", "Magic"];
  const normalise = (value) => value.toLowerCase().replaceAll("’", "'").replace(/[^a-z0-9]/g, "");
  const questRequirements = window.F2P_QUEST_REQUIREMENTS || {};
  const requirementsByTitle = new Map(
    Object.entries(questRequirements).map(([title, requirements]) => [normalise(title), requirements]),
  );

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
        const requirements = requirementsByTitle.get(normalise(item.title)) || { skills: [], quests: [] };
        const skillDependencies = requirements.skills.map(({ skill, level }) => ({
          type: "skill",
          title: skill,
          current: data.skills[skill] || 1,
          required: level,
          complete: (data.skills[skill] || 1) >= level,
        }));
        const questDependencies = requirements.quests.map((title) => {
          const dependency = data.quests?.find(
            (candidate) => normalise(candidate.title) === normalise(title),
          );
          return {
            type: "quest",
            title,
            complete: Boolean(dependency && /completed/i.test(dependency.status)),
          };
        });
        const dependencies = [...questDependencies, ...skillDependencies];
        const missingSkills = skillDependencies
          .filter((dependency) => !dependency.complete)
          .map((dependency) => ({
            skill: dependency.title,
            current: dependency.current,
            required: dependency.required,
            remaining: dependency.required - dependency.current,
          }));
        return quest.eligible
          ? { status: "ready", label: "Ready", detail: "Quest requirements met" }
          : {
              status: "locked",
              label: "Not ready",
              detail: "One or more quest or skill requirements are still missing.",
              questLocked: true,
              dependencies,
              missing: missingSkills,
            };
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
      missing: missing.map(({ skill, level }) => ({
        skill,
        current: data.skills[skill] || 1,
        required: level,
        remaining: Math.max(0, level - (data.skills[skill] || 1)),
      })),
    };
  }

  window.RSProfile = { evaluate };
})();

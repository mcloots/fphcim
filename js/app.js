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
state.profile ||= { username: "", data: null, fetchedAt: null };
const dailyKey = new Date().toISOString().slice(0, 10);
if (state.daily?.date !== dailyKey) state.daily = { date: dailyKey, done: {} };
let currentView = "route",
  currentCategory = "all",
  currentPhase = "all",
  routeDisplay = "focus";

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
  const allIds = new Set(
    [...routeItems, ...libraryItems]
      .filter((item) => item.category !== "achievement")
      .map((item) => item.id),
  );
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
  $("#typeFilter").querySelector('option[value="achievement"]').hidden =
    currentView === "route";
  $("#typeFilter").querySelector('option[value="unlock"]').hidden =
    currentView !== "route";
  const buttons = [
    ["all", "All", source.length],
    ...Object.entries(categories).map(([key, val]) => [
      key,
      val.label,
      source.filter((x) => x.category === key).length,
    ]),
  ].filter(([key, , count]) => key === "all" || count > 0);
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
  $("#phaseNav").hidden = currentView !== "route" || routeDisplay === "focus";
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

function renderProfile() {
  const profile = state.profile,
    status = $("#profileStatus"),
    input = $("#rsnInput"),
    clear = $("#profileClear");
  input.value = profile.username || "";
  clear.hidden = !profile.data;
  if (!profile.data) {
    if (!status.classList.contains("error")) status.textContent = "No character connected.";
    return;
  }
  const updated = new Date(profile.fetchedAt || profile.data.fetchedAt);
  status.className = "connected";
  status.textContent = `${profile.data.name} · total level ${profile.data.totalLevel?.toLocaleString("en-GB") || "unknown"} · synced ${updated.toLocaleString("en-GB")}`;
}

async function syncProfile(username, quiet = false) {
  const status = $("#profileStatus"),
    submit = $("#profileForm button[type='submit']");
  submit.disabled = true;
  status.className = "loading";
  if (!quiet) status.textContent = "Loading character levels…";
  try {
    const result = await fetch(`/api/rs-profile?user=${encodeURIComponent(username)}`),
      payload = await result.json();
    if (!result.ok) throw new Error(payload.error || "Could not load this character.");
    state.profile = { username: payload.name || username, data: payload, fetchedAt: Date.now() };
    save();
    renderProfile();
    render();
  } catch (error) {
    status.className = "error";
    status.textContent =
      error instanceof TypeError
        ? "The profile service could not be reached. Profile sync works on the deployed site; local static previews do not run the server function."
        : `${error.message} Check that the display name is correct and the RuneMetrics profile is public.`;
  } finally {
    submit.disabled = false;
  }
}

function renderJourneyDashboard(source) {
  const dashboard = $("#journeyDashboard");
  dashboard.hidden = currentView !== "route";
  if (currentView !== "route") return;

  const completed = source.filter((item) => state.done[item.id]).length;
  const percent = Math.round((completed / source.length) * 100);
  const next = source.find((item) => !state.done[item.id]);
  const activePhase = next?.phase || phases.at(-1).id;
  dashboard.innerHTML = `
    <div class="journey-summary">
      <div><span class="journey-label">JOURNEY MAP</span><h3>${next ? "Your next chapter" : "Journey complete"}</h3><p>${completed} of ${source.length} milestones completed</p></div>
      <div class="route-display" aria-label="Recommended path display">
        <button type="button" data-display="focus" class="${routeDisplay === "focus" ? "active" : ""}">Focus</button>
        <button type="button" data-display="full" class="${routeDisplay === "full" ? "active" : ""}">Full checklist</button>
      </div>
      <div class="journey-progress" aria-label="${percent}% complete"><span style="width:${percent}%"></span></div>
    </div>
    <div class="journey-map">
      ${phases
        .map((phase, index) => {
          const group = source.filter((item) => item.phase === phase.id);
          const done = group.filter((item) => state.done[item.id]).length;
          const phasePercent = group.length ? Math.round((done / group.length) * 100) : 0;
          const status = done === group.length ? "complete" : phase.id === activePhase ? "current" : "";
          return `<button type="button" class="journey-stage ${status}" data-journey-phase="${phase.id}">
            <span class="stage-index">${done === group.length ? "✓" : index + 1}</span>
            <span class="stage-copy"><b>${phase.name}</b><small>${done} / ${group.length}</small><i><em style="width:${phasePercent}%"></em></i></span>
          </button>`;
        })
        .join("")}
    </div>
    ${
      next
        ? `<div class="current-objective">
            <div class="objective-marker"><span>Current objective</span><b>${categories[next.category].tag}</b></div>
            <div><h4>${next.title}</h4><p>${next.desc}</p></div>
            <button type="button" data-complete-next="${next.id}">Mark complete <span>✓</span></button>
          </div>`
        : `<div class="current-objective complete"><div><h4>Every recommended milestone is complete</h4><p>Your full F2P journey remains available as a checklist and can still be reordered.</p></div></div>`
    }
  `;

  dashboard.querySelectorAll("[data-display]").forEach((button) => {
    button.onclick = () => {
      routeDisplay = button.dataset.display;
      currentPhase = "all";
      buildPhases();
      render();
    };
  });
  dashboard.querySelectorAll("[data-journey-phase]").forEach((button) => {
    button.onclick = () => {
      currentPhase = button.dataset.journeyPhase;
      routeDisplay = "full";
      buildPhases();
      render();
      $("#milestoneList").scrollIntoView({ behavior: "smooth", block: "start" });
    };
  });
  const completeNext = dashboard.querySelector("[data-complete-next]");
  if (completeNext)
    completeNext.onclick = () => {
      state.done[completeNext.dataset.completeNext] = true;
      save();
      render();
      updateStats();
    };
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
  const readiness = window.RSProfile?.evaluate(x, state.profile.data);
  const readinessBadge = readiness
    ? `<span class="readiness ${readiness.status}" title="${readiness.detail}">${readiness.label}</span>`
    : "";
  const missingDetails = readiness?.missing?.length
    ? `<div class="missing-requirements"><strong>Levels still required</strong><div>${readiness.missing
        .map(
          (requirement) =>
            `<span class="missing-skill"><b>${requirement.skill}</b><i><em style="width:${Math.min(100, Math.round((requirement.current / requirement.required) * 100))}%"></em></i><small><b>${requirement.current}</b> → ${requirement.required} · ${requirement.remaining} level${requirement.remaining === 1 ? "" : "s"} to go</small></span>`,
        )
        .join("")}</div></div>`
    : readiness?.questLocked
      ? `<div class="missing-requirements quest-locked"><strong>Requirements not met</strong><p>RuneMetrics reports that this quest cannot be started yet. Open the milestone details or Wiki guide to check the missing prerequisite quests and levels.</p></div>`
      : "";
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
    <div><div class="milestone-title">${x.title}</div><div class="milestone-desc">${x.desc}</div>${xpBadges ? `<div class="quest-xp" aria-label="Quest experience rewards">${xpBadges}</div>` : ""}${missingDetails}</div>
    <div class="milestone-meta"><span class="tag ${x.category}">${categories[x.category].tag}</span>${readinessBadge}<button class="details-toggle" type="button" aria-expanded="false" title="Show details">⌄</button></div>
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
  renderJourneyDashboard(source);
  const items = filtered(source),
    list = $("#milestoneList");
  const defaultFocus =
    currentView === "route" &&
    routeDisplay === "focus" &&
    currentPhase === "all" &&
    currentCategory === "all" &&
    !$("#searchInput").value &&
    $("#statusFilter").value === "all";
  if (
    currentView === "route" &&
    !defaultFocus &&
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
  } else {
    const visibleItems = defaultFocus
      ? items.filter((item) => !state.done[item.id]).slice(0, 3)
      : items;
    list.innerHTML = visibleItems.map(card).join("");
    if (defaultFocus && visibleItems.length)
      list.insertAdjacentHTML(
        "afterbegin",
        '<div class="focus-heading"><span>UP NEXT</span><h3>Keep the momentum going</h3><p>Your next three milestones, in your chosen order.</p></div>',
      );
  }
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
  $("#journeyDashboard").hidden = true;
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
  $("#journeyDashboard").hidden = true;
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
$("#profileForm").onsubmit = (event) => {
  event.preventDefault();
  syncProfile($("#rsnInput").value.trim());
};
$("#profileClear").onclick = () => {
  state.profile = { username: "", data: null, fetchedAt: null };
  save();
  $("#profileStatus").className = "";
  renderProfile();
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
      state.profile ||= { username: "", data: null, fetchedAt: null };
      save();
      renderProfile();
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
renderProfile();
render();
renderDaily();
if (
  state.profile.username &&
  (!state.profile.fetchedAt || Date.now() - state.profile.fetchedAt > 60 * 60 * 1000)
)
  syncProfile(state.profile.username, true);

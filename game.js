const skinTones = {
  "skin_porcelain": { top: "#fbe0d0", bottom: "#f1b39a" },
  "skin_olive": { top: "#f1c9aa", bottom: "#d99a72" },
  "skin_bronze": { top: "#e5b28a", bottom: "#c27a4a" },
  "skin_espresso": { top: "#c58c5c", bottom: "#8b4a28" },
};

const events = [
  {
    id: "rave",
    name: "Neon Rave in a Warehouse",
    description:
      "Bass is violent, lasers everywhere, someone brought an inflatable unicorn. Think reflective, breathable, chaotic.",
    idealTags: ["neon", "mesh", "platform", "glow", "mini", "y2k"],
  },
  {
    id: "ball",
    name: "Midnight Masquerade Ball",
    description:
      "String quartet, stolen glances, dramatic staircase entrance. She needs elegance with at least one unhinged detail.",
    idealTags: ["gown", "dramatic", "sparkle", "corset", "heels", "opera"],
  },
  {
    id: "y2k",
    name: "Y2K Dive Bar Night",
    description:
      "Low-rise chaos, flip phones, lip gloss. The vibe is 'I might be in a music video, I might be at a bowling alley.'",
    idealTags: ["low-rise", "denim", "baby-tee", "platform", "glossy"],
  },
  {
    id: "gallery",
    name: "Pretentious Art Gallery Opening",
    description:
      "Free wine, confusing sculptures, everyone pretending to know the artist. She needs something smart, sculptural, a little cold.",
    idealTags: ["structured", "monochrome", "tailored", "minimal", "pointed"],
  },
  {
    id: "beach",
    name: "Sunset Beach Bonfire",
    description:
      "Sand everywhere, guitar guy, someone brought a projector for no reason. She needs cozy, layered, and sand-proof.",
    idealTags: ["flowy", "linen", "sandals", "oversized", "knit"],
  },
  {
    id: "date",
    name: "Chaotic Third Date",
    description:
      "Cocktails that are mostly smoke, maybe karaoke after. Cute but calculated—effortless that took three hours.",
    idealTags: ["slip", "heels", "red", "sheer", "gold"],
  },
];

const closetConfig = [
  {
    id: "skin",
    label: "Skin tone",
    items: [
      { id: "skin_porcelain", label: "Porcelain glow", tags: ["skin", "soft"] },
      { id: "skin_olive", label: "Olive neutral", tags: ["skin", "gallery"] },
      { id: "skin_bronze", label: "Bronzed babe", tags: ["skin", "beach", "glow"] },
      { id: "skin_espresso", label: "Espresso slay", tags: ["skin"] },
    ],
  },
  {
    id: "hair",
    label: "Hair",
    items: [
      { id: "hair_bubble-pigtails", label: "Bubble pigtails", tags: ["y2k", "playful"] },
      { id: "hair_sleek-bun", label: "Sleek bun", tags: ["elegant", "gallery", "ball"] },
      { id: "hair_beach-waves", label: "Salt-kissed waves", tags: ["beach", "flowy"] },
      { id: "hair_space-buns", label: "Glitter space buns", tags: ["neon", "rave", "glow"] },
      { id: "hair_claw-clip", label: "Claw clip updo", tags: ["gallery", "minimal"] },
    ],
  },
  {
    id: "makeup",
    label: "Makeup",
    items: [
      { id: "makeup_soft-glam", label: "Soft glam neutral", tags: ["soft", "glam", "date", "ball"] },
      { id: "makeup_glitter-liner", label: "Neon glitter liner", tags: ["neon", "glitter", "rave", "y2k"] },
      { id: "makeup_sunkissed", label: "Sunkissed bronze", tags: ["beach", "glow"] },
      { id: "makeup_clean-girl", label: "Clean girl minimal", tags: ["gallery", "minimal"] },
      { id: "makeup_siren", label: "Siren smoky eye", tags: ["dramatic", "date", "ball"] },
    ],
  },
  {
    id: "top",
    label: "Tops",
    items: [
      { id: "top_mesh-long-sleeve", label: "Sheer mesh long sleeve", tags: ["mesh", "rave", "layer"] },
      { id: "top_corset", label: "Structured corset top", tags: ["corset", "dramatic", "ball"] },
      { id: "top_baby-tee", label: "Baby tee with rhinestones", tags: ["baby-tee", "y2k"] },
      { id: "top_satin-cami", label: "Bias-cut satin cami", tags: ["slip", "date"] },
      { id: "top_oversized-shirt", label: "Oversized linen shirt", tags: ["linen", "oversized", "beach"] },
    ],
  },
  {
    id: "bottom",
    label: "Bottoms",
    items: [
      { id: "bottom_cargo-mini", label: "Reflective cargo mini", tags: ["neon", "mini", "rave"] },
      { id: "bottom_lowrise-jeans", label: "Low-rise bootcut jeans", tags: ["low-rise", "denim", "y2k"] },
      { id: "bottom_tulle-skirt", label: "Layered tulle skirt", tags: ["gown", "dramatic", "ball"] },
      { id: "bottom_tailored-trousers", label: "Tailored black trousers", tags: ["structured", "tailored", "gallery"] },
      { id: "bottom_knitted-shorts", label: "Soft knit shorts", tags: ["knit", "beach"] },
    ],
  },
  {
    id: "dress",
    label: "Dresses",
    items: [
      { id: "dress_slip-dress", label: "Backless silk slip", tags: ["slip", "date", "heels"] },
      { id: "dress_ballgown", label: "Crushed velvet ballgown", tags: ["gown", "dramatic", "sparkle", "ball"] },
      { id: "dress_metallic-mini", label: "Metallic party mini", tags: ["neon", "mini", "glow", "rave"] },
      { id: "dress_cutout-knit", label: "Cutout knit maxi", tags: ["beach", "flowy", "knit"] },
      { id: "dress_archi-column", label: "Architect column dress", tags: ["structured", "monochrome", "gallery"] },
    ],
  },
  {
    id: "shoes",
    label: "Shoes",
    items: [
      { id: "shoes_holographic-platforms", label: "Holographic platforms", tags: ["platform", "neon", "rave"] },
      { id: "shoes_satin-heels", label: "Strappy satin heels", tags: ["heels", "ball", "date"] },
      { id: "shoes_pointed-flats", label: "Pointed ballet flats", tags: ["minimal", "gallery"] },
      { id: "shoes_beaded-sandals", label: "Beaded flat sandals", tags: ["sandals", "beach"] },
      { id: "shoes_furry-mules", label: "Furry mules", tags: ["y2k", "playful"] },
    ],
  },
  {
    id: "accessories",
    label: "Accessories",
    items: [
      { id: "acc_neon-sunnies", label: "Neon shield sunglasses", tags: ["neon", "rave"] },
      { id: "acc_pearl-choker", label: "Pearl choker", tags: ["ball", "elegant"] },
      { id: "acc_butterfly-clips", label: "Butterfly hair clips", tags: ["y2k", "playful"] },
      { id: "acc_giant-tote", label: "Way-too-big tote", tags: ["beach", "oversized"] },
      { id: "acc_gold-earrings", label: "Gold sculptural earrings", tags: ["gold", "gallery", "date"] },
      { id: "acc_opera-gloves", label: "Satin opera gloves", tags: ["opera", "ball", "dramatic"] },
    ],
  },
];

const state = {
  currentEvent: null,
  selections: {},
};

const el = {
  newEventBtn: document.getElementById("newEventBtn"),
  submitOutfitBtn: document.getElementById("submitOutfitBtn"),
  eventName: document.getElementById("eventName"),
  eventDescription: document.getElementById("eventDescription"),
  categoriesContainer: document.getElementById("categoriesContainer"),
  ratingScore: document.getElementById("ratingScore"),
  ratingBadge: document.getElementById("ratingBadge"),
  ratingNarrative: document.getElementById("ratingNarrative"),
  speechBubble: document.getElementById("speechBubble"),
  avatarSvg: document.getElementById("avatarSvg"),
  characterPortrait: document.querySelector(".character-portrait"),
};

function randomPick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function resetSelections() {
  state.selections = {};
  const tiles = el.categoriesContainer.querySelectorAll(".closet-item");
  tiles.forEach((tile) => tile.classList.remove("selected"));
  renderCharacterLook();
}

function renderCategories() {
  el.categoriesContainer.innerHTML = "";

  closetConfig.forEach((category) => {
    const wrapper = document.createElement("div");
    wrapper.className = "category";
    wrapper.dataset.categoryId = category.id;

    const header = document.createElement("div");
    header.className = "category-header";
    header.innerHTML = `<span>${category.label}</span><span class="category-count">${category.items.length} pcs</span>`;

    const itemsRow = document.createElement("div");
    itemsRow.className = "items-row";

    const shuffled = [...category.items].sort(() => Math.random() - 0.5);

    shuffled.forEach((item) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "closet-item";
      tile.dataset.categoryId = category.id;
      tile.dataset.itemId = item.id;
      tile.title = item.tags.join(", ");

      tile.innerHTML = `
        <div class="closet-item-inner">
          <div class="closet-item-hanger"></div>
          <div class="closet-item-photo closet-visual-${item.id}"></div>
          <div class="closet-item-label">${item.label}</div>
        </div>
      `;

      tile.addEventListener("click", () => {
        const currentlySelected = state.selections[category.id];
        if (currentlySelected === item.id) {
          delete state.selections[category.id];
          tile.classList.remove("selected");
        } else {
          const siblings = wrapper.querySelectorAll(".closet-item");
          siblings.forEach((sib) => sib.classList.remove("selected"));
          state.selections[category.id] = item.id;
          tile.classList.add("selected");
        }
        renderCharacterLook();
      });

      itemsRow.appendChild(tile);
    });

    wrapper.appendChild(header);
    wrapper.appendChild(itemsRow);
    el.categoriesContainer.appendChild(wrapper);
  });
}

function getItemById(itemId) {
  for (const cat of closetConfig) {
    const found = cat.items.find((i) => i.id === itemId);
    if (found) return found;
  }
  return null;
}

function pickNewEvent() {
  const previousId = state.currentEvent?.id;
  const pool = previousId ? events.filter((e) => e.id !== previousId) : events;
  const event = randomPick(pool);
  state.currentEvent = event;

  el.eventName.textContent = event.name;
  el.eventDescription.textContent = event.description;

  el.speechBubble.innerHTML =
    "<p>New crisis unlocked: <strong>" +
    event.name +
    "</strong>. Dig into the closet and make it make sense.</p>";

  applyEventTheme(event.id);

  resetSelections();
  resetRating();
}

function applyEventTheme(eventId) {
  if (!el.characterPortrait) return;

  const allIds = ["rave", "ball", "y2k", "gallery", "beach", "date"];
  allIds.forEach((id) => {
    el.characterPortrait.classList.remove(`event-${id}`);
  });

  if (allIds.includes(eventId)) {
    el.characterPortrait.classList.add(`event-${eventId}`);
  }
}

function resetRating() {
  el.ratingScore.textContent = "– / 100";
  el.ratingNarrative.textContent =
    "She’s waiting. Build a look and lock it in to see if you understood the assignment.";
  el.ratingBadge.textContent = "Waiting for a look…";
  el.ratingBadge.className = "rating-badge rating-badge--idle";
}

function randomizeOutfit() {
  const tiles = el.categoriesContainer.querySelectorAll(".closet-item");
  tiles.forEach((tile) => tile.classList.remove("selected"));

  state.selections = {};

  closetConfig.forEach((category) => {
    const itemsInCat = Array.from(
      el.categoriesContainer.querySelectorAll(
        `.category[data-category-id="${category.id}"] .closet-item`
      )
    );
    if (!itemsInCat.length) return;
    const chosenPill = randomPick(itemsInCat);
    chosenPill.classList.add("selected");
    state.selections[category.id] = chosenPill.dataset.itemId;
  });

  renderCharacterLook();

  if (state.currentEvent) {
    el.speechBubble.innerHTML =
      "<p>Okay, auto-styled. Now decide if this is genius or if we tweak.</p>";
  }
}

function computeRating() {
  if (!state.currentEvent) {
    return {
      score: 0,
      tier: "idle",
      title: "Nowhere to be",
      text: "Give the girl somewhere to go first. Hit “New event” to unlock tonight’s mission.",
    };
  }

  const event = state.currentEvent;
  const chosenItems = Object.values(state.selections)
    .map((id) => getItemById(id))
    .filter(Boolean);

  if (!chosenItems.length) {
    return {
      score: 5,
      tier: "flop",
      title: "Closet paralysis",
      text: "She’s standing in a towel staring at 400 outfits going “I have nothing to wear.” Pick literally anything.",
    };
  }

  let score = 40;

  chosenItems.forEach((item) => {
    const matchCount = item.tags.filter((t) => event.idealTags.includes(t)).length;
    score += matchCount * 10;
  });

  const hasDress = !!state.selections.dress;
  const hasTopBottom = !!state.selections.top && !!state.selections.bottom;
  if (hasDress && hasTopBottom) {
    score -= 15;
  }

  if (event.id === "ball" && hasDress) score += 10;
  if (event.id === "rave" && state.selections.shoes === "shoes_satin-heels") {
    score -= 10;
  }
  if (event.id === "beach" && state.selections.shoes === "shoes_satin-heels") {
    score -= 12;
  }
  if (event.id === "gallery" && state.selections.hair === "hair_bubble-pigtails") {
    score -= 8;
  }

  const varietyBonus = Object.keys(state.selections).length;
  score += varietyBonus * 2;

  score = Math.max(0, Math.min(100, score));

  let tier = "mid";
  if (score >= 78) tier = "slay";
  else if (score <= 45) tier = "flop";

  const { title, text } = buildAnecdote(event, chosenItems, score, tier);

  return {
    score,
    tier,
    title,
    text,
  };
}

function buildAnecdote(event, items, score, tier) {
  const shortLabel = items.length
    ? items
        .slice(0, 3)
        .map((i) => i.label.toLowerCase())
        .join(", ")
    : "the complete absence of an outfit";

  if (tier === "slay") {
    const lines = [
      `“Okay but this is actually insane. For ${event.name.toLowerCase()}, ${shortLabel} is giving main character, unbothered, unreturnable.”`,
      `“Everyone at ${event.name.toLowerCase()} is going to think you had a stylist. Joke’s on them, you just have taste and an overstuffed closet.”`,
      `“I’m obsessed? Like if I see this look on my feed later I’m reposting it with ‘you’re kidding me’ in all caps.”`,
    ];
    return {
      title: "Certified Serve",
      text: lines[Math.floor(Math.random() * lines.length)],
    };
  }

  if (tier === "flop") {
    const lines = [
      `“Love you down but for ${event.name.toLowerCase()} this feels like you got dressed in three different decades at once.”`,
      `“If someone asks ‘what’s the theme?’ just say ‘confused’. The ${shortLabel} combo is fighting itself.”`,
      `“The outfit isn’t bad, it’s just not at the same event as everyone else. She’s at ${event.name.toLowerCase()}, her clothes are somewhere else.”`,
    ];
    return {
      title: "Soft Flop Era",
      text: lines[Math.floor(Math.random() * lines.length)],
    };
  }

  const lines = [
    `“She’s definitely dressed. For ${event.name.toLowerCase()} it’s giving safe choice with delusional confidence.”`,
    `“This is cute but if someone next to you commits harder to the theme… they’re getting the compliments.”`,
    `“She will absolutely go and have fun in this. Will strangers ask for outfit pics? Unclear.”`,
  ];

  return {
    title: "Almost Ate",
    text: lines[Math.floor(Math.random() * lines.length)],
  };
}

function renderRating() {
  const { score, tier, title, text } = computeRating();

  el.ratingScore.textContent = `${score} / 100`;
  el.ratingNarrative.textContent = text;

  el.ratingBadge.className = "rating-badge";
  if (tier === "slay") el.ratingBadge.classList.add("rating-badge--slay");
  else if (tier === "flop") el.ratingBadge.classList.add("rating-badge--flop");
  else if (tier === "mid") el.ratingBadge.classList.add("rating-badge--mid");
  else el.ratingBadge.classList.add("rating-badge--idle");

  el.ratingBadge.textContent = title;

  if (state.currentEvent) {
    if (tier === "slay") {
      el.speechBubble.innerHTML =
        "<p>Oh this is actually sick. Screenshot it before I change my mind.</p>";
    } else if (tier === "flop") {
      el.speechBubble.innerHTML =
        "<p>Okay… at least if it flops we can blame the lighting.</p>";
    } else {
      el.speechBubble.innerHTML =
        "<p>Cute! But I feel like we were one chaotic choice away from greatness.</p>";
    }
  }
}

function renderCharacterLook() {
  if (!el.avatarSvg) return;

  try {
    const allPieces = el.avatarSvg.querySelectorAll(".avatar-piece");
    allPieces.forEach((piece) => piece.classList.remove("visible"));

    const skinId = state.selections.skin || "skin_olive";
    const tone = skinTones[skinId] || skinTones["skin_olive"];
    if (tone) {
      const skinStops = el.avatarSvg.querySelectorAll("#skinGrad stop");
      if (skinStops[0]) skinStops[0].setAttribute("stop-color", tone.top);
      if (skinStops[1]) skinStops[1].setAttribute("stop-color", tone.bottom);
    }

    Object.entries(state.selections).forEach(([categoryId, itemId]) => {
      const artId = `${itemId}_art`;
      const node = el.avatarSvg.querySelector(`#${artId}`);
      if (node) {
        node.classList.add("visible");
      }
    });
  } catch (e) {
    // Fail silently so the app still works even if some older browsers
    // choke on selector features.
  }
}

function init() {
  renderCategories();
  resetRating();

  el.newEventBtn.addEventListener("click", () => {
    pickNewEvent();
  });

  el.submitOutfitBtn.addEventListener("click", () => {
    renderRating();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}


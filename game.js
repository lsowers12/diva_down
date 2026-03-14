const skinTones = {
  "skin_porcelain": { top: "#fbe0d0", bottom: "#f1b39a" },
  "skin_honey": { top: "#f5d4a8", bottom: "#e0a864" },
  "skin_olive": { top: "#f1c9aa", bottom: "#d99a72" },
  "skin_bronze": { top: "#e5b28a", bottom: "#c27a4a" },
  "skin_mocha": { top: "#c99a6d", bottom: "#9d6b3a" },
  "skin_espresso": { top: "#c58c5c", bottom: "#8b4a28" },
};

const events = [
  {
    id: "rave",
    name: "Brat Rave",
    description:
      "Charli XCX is on the aux. Bass is violent, lasers everywhere. Dress to serve cunt—reflective, breathable, chaotic.",
    idealTags: ["neon", "mesh", "platform", "glow", "mini", "y2k"],
  },
  {
    id: "ball",
    name: "Midnight Masquerade Ball",
    description:
      "Anonymous glamour. Masks required, drama optional. Go full gown, corset, sparkle—and at least one detail that makes people whisper.",
    idealTags: ["gown", "dramatic", "sparkle", "corset", "heels", "opera"],
  },
  {
    id: "y2k",
    name: "Night out with Paris Hilton",
    description:
      "That's hot. Y2K vibes only—glossy, sparkly, early 2000s. Low-rise, baby tees, and enough glitter to make it obvious you understood the assignment.",
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
    name: "Mystery Grindr Date",
    description:
      "He might be chopped. You never know. Dress cute either way—effortless that took three hours.",
    idealTags: ["slip", "heels", "red", "sheer", "gold"],
  },
];

const closetConfig = [
  {
    id: "skin",
    label: "Skin tone",
    items: [
      { id: "skin_porcelain", label: "Porcelain glow", tags: ["skin", "soft"] },
      { id: "skin_honey", label: "Honey warmth", tags: ["skin", "soft", "date"] },
      { id: "skin_olive", label: "Olive neutral", tags: ["skin", "gallery"] },
      { id: "skin_bronze", label: "Bronzed babe", tags: ["skin", "beach", "glow"] },
      { id: "skin_mocha", label: "Mocha latte", tags: ["skin", "date"] },
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
      { id: "hair_curtain-bangs", label: "Curtain bangs", tags: ["flowy", "date", "soft"] },
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
      { id: "makeup_bold-red", label: "Bold red lip", tags: ["dramatic", "ball", "date"] },
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
      { id: "top_cropped-hoodie", label: "Cropped zip hoodie", tags: ["y2k", "casual", "layered"] },
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
      { id: "bottom_wide-leg", label: "Wide-leg cargo", tags: ["oversized", "y2k", "casual"] },
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
      { id: "dress_blazer", label: "Suit blazer dress", tags: ["structured", "tailored", "gallery"] },
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
      { id: "shoes_chunky-boots", label: "Chunky platform boots", tags: ["platform", "y2k", "rave"] },
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
  avatarBackSvg: document.getElementById("avatarBackSvg"),
  characterPortrait: document.querySelector(".character-portrait"),
  resultScreen: document.getElementById("resultScreen"),
  resultScore: document.getElementById("resultScore"),
  resultTitle: document.getElementById("resultTitle"),
  resultText: document.getElementById("resultText"),
  resultCloseBtn: document.getElementById("resultCloseBtn"),
  resultAvatarMount: document.getElementById("resultAvatarMount"),
  resultQueenWrap: document.getElementById("resultQueenWrap"),
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
  if (el.ratingScore) {
    el.ratingScore.textContent = "– / 100";
  }
  if (el.ratingNarrative) {
    el.ratingNarrative.textContent =
      "She’s waiting. Build a look and lock it in to see if you understood the assignment.";
  }
  if (el.ratingBadge) {
    el.ratingBadge.textContent = "Waiting for a look…";
    el.ratingBadge.className = "rating-badge rating-badge--idle";
  }
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
      title: "Pick Something. I'm Waiting.",
      text: "Honey. HONEY. I cannot read an empty calendar. Pick a goddamn event so I have something to work with. The audacity of showing up with NOTHING.",
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
      title: "Nothing On. NOTHING.",
      text: "A whole closet. A WHOLE CLOSET. And you come to me with NOTHING ON? Put something on that body before I have a stroke. I cannot read a mannequin, sweetie.",
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
      `“Okay. OKAY. For ${event.name.toLowerCase()} you actually did that. I'm mad about it. ${shortLabel}? Don't get cocky, bitch.”`,
      `“Alright, you ate. I'm not happy about it. Everyone at ${event.name.toLowerCase()} will think you tried. For once they'd be right. Don't let it go to your head.”`,
      `"I was READY to read you to filth and you had to go and do THIS? ${shortLabel} for ${event.name.toLowerCase()}? Unfortunately you ate. I'm upset."`,
    ];
    return {
      title: "Certified Serve",
      text: lines[Math.floor(Math.random() * lines.length)],
    };
  }

  if (tier === "flop") {
    const lines = [
      `“For ${event.name.toLowerCase()}? HONEY. This is a HATE CRIME. ${shortLabel}? Looks like you closed your eyes and grabbed three random hangers. The audacity.”`,
            `"Who HURT you? Who did this to you? The ${shortLabel} combo is giving 'I gave up' and 'please ask me to leave.' I'm gonna need you to do better."`,
      `“She's at ${event.name.toLowerCase()} but her OUTFIT is in a different ZIP CODE. A different DECADE. Refusing to make eye contact. Baby, no.”`,
      `"This is NOT it. This is never it. ${shortLabel} for this? Giving 'I read the invite wrong' or 'I'm the main character in a BAD way.' Oh, you thought?"`,
      `"The theme was RIGHT THERE. You had ONE JOB. ONE. This ${shortLabel} situation? A public service announcement. Do better, sweetie."`,
      `"No. NO. For ${event.name.toLowerCase()}? Girl. The nerve. ${shortLabel}? I'm gonna need you to go back to the closet and think about your choices."`,
    ];
    return {
      title: "Absolutely Not. No.",
      text: lines[Math.floor(Math.random() * lines.length)],
    };
  }

  const lines = [
    `“She's dressed. I'll give you that. For ${event.name.toLowerCase()} it's giving 'I showed up' and 'I did not excel.' MID. Next.”`,
    `“This is the outfit of someone who will stand by the wall all night. Cute? Debatable. MEMORABLE? No. Goodbye.”`,
    `“You'll get in. Will you get compliments? No. ${shortLabel} is fine in the most forgettable way possible. I said what I said.”`,
    `"It's giving 'I had 20 minutes and it shows.' For ${event.name.toLowerCase()} that's not a flex. Do better. Or don't. I don't care. Next."`,
    `"Mid. MID. You'll blend in. You won't stand out. ${shortLabel} is giving 'I showed up' and that's all. Bye."`,
  ];

  return {
    title: "You Tried. It Shows.",
    text: lines[Math.floor(Math.random() * lines.length)],
  };
}

function renderRating() {
  const { score, tier, title, text } = computeRating();

  if (el.ratingScore) {
    el.ratingScore.textContent = `${score} / 100`;
  }
  if (el.ratingNarrative) {
    el.ratingNarrative.textContent = text;
  }
  if (el.ratingBadge) {
    el.ratingBadge.className = "rating-badge";
    if (tier === "slay") el.ratingBadge.classList.add("rating-badge--slay");
    else if (tier === "flop") el.ratingBadge.classList.add("rating-badge--flop");
    else if (tier === "mid") el.ratingBadge.classList.add("rating-badge--mid");
    else el.ratingBadge.classList.add("rating-badge--idle");

    el.ratingBadge.textContent = title;
  }

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

  // Populate and show result overlay
  if (el.resultScore && el.resultTitle && el.resultText && el.resultScreen) {
    el.resultScore.textContent = `${score} / 100`;
    el.resultTitle.textContent = title;
    el.resultText.textContent = text;

    // Clone current avatar into the overlay frame so you see the styled look
    if (el.avatarSvg && el.resultAvatarMount) {
      el.resultAvatarMount.innerHTML = "";
      const clone = el.avatarSvg.cloneNode(true);
      clone.removeAttribute("id");
      el.resultAvatarMount.appendChild(clone);
    }

    if (el.resultQueenWrap) {
      el.resultQueenWrap.dataset.tier = tier;
    }

    el.resultScreen.classList.add("visible");
    el.resultScreen.setAttribute("aria-hidden", "false");
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

    if (el.avatarBackSvg) {
      const backPieces = el.avatarBackSvg.querySelectorAll(".avatar-piece");
      backPieces.forEach((piece) => piece.classList.remove("visible"));
      const backCategories = ["hair", "dress", "top", "bottom", "shoes"];
      backCategories.forEach((cat) => {
        const itemId = state.selections[cat];
        if (itemId) {
          const backId = `${itemId}_back_art`;
          const backNode = el.avatarBackSvg.querySelector(`#${backId}`);
          if (backNode) {
            backNode.classList.add("visible");
          }
        }
      });
    }
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

  if (el.resultCloseBtn && el.resultScreen) {
    el.resultCloseBtn.addEventListener("click", () => {
      el.resultScreen.classList.remove("visible");
      el.resultScreen.setAttribute("aria-hidden", "true");
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}


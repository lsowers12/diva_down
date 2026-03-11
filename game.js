const closetConfig = [
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
  randomizeOutfitBtn: document.getElementById("randomizeOutfitBtn"),
  submitOutfitBtn: document.getElementById("submitOutfitBtn"),
  eventName: document.getElementById("eventName"),
  eventDescription: document.getElementById("eventDescription"),
  categoriesContainer: document.getElementById("categoriesContainer"),
  ratingScore: document.getElementById("ratingScore"),
  ratingBadge: document.getElementById("ratingBadge"),
  ratingNarrative: document.getElementById("ratingNarrative"),
  speechBubble: document.getElementById("speechBubble"),
  avatarSvg: document.getElementById("avatarSvg"),
};

const API_BASE = "http://localhost:4000/api";

function randomPick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function resetSelections() {
  state.selections = {};
  const pills = el.categoriesContainer.querySelectorAll(".item-pill");
  pills.forEach((pill) => pill.classList.remove("selected"));
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
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "item-pill";
      pill.textContent = item.label;
      pill.dataset.categoryId = category.id;
      pill.dataset.itemId = item.id;

      pill.addEventListener("click", () => {
        const currentlySelected = state.selections[category.id];
        if (currentlySelected === item.id) {
          delete state.selections[category.id];
          pill.classList.remove("selected");
        } else {
          const siblings = wrapper.querySelectorAll(".item-pill");
          siblings.forEach((sib) => sib.classList.remove("selected"));
          state.selections[category.id] = item.id;
          pill.classList.add("selected");
        }
        renderCharacterLook();
      });

      itemsRow.appendChild(pill);
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

  fetch(
    `${API_BASE}/events/random${
      previousId ? `?previousId=${encodeURIComponent(previousId)}` : ""
    }`
  )
    .then((res) => res.json())
    .then((event) => {
      state.currentEvent = event;

      el.eventName.textContent = event.name;
      el.eventDescription.textContent = event.description;

      el.speechBubble.innerHTML =
        "<p>New crisis unlocked: <strong>" +
        event.name +
        "</strong>. Dig into the closet and make it make sense.</p>";

      resetSelections();
      resetRating();
    })
    .catch(() => {
      el.speechBubble.innerHTML =
        "<p>My cards and the server are both declining. Try again in a sec.</p>";
    });
}

function resetRating() {
  el.ratingScore.textContent = "– / 100";
  el.ratingNarrative.textContent =
    "She’s waiting. Build a look and lock it in to see if you understood the assignment.";
  el.ratingBadge.textContent = "Waiting for a look…";
  el.ratingBadge.className = "rating-badge rating-badge--idle";
}

function randomizeOutfit() {
  const pills = el.categoriesContainer.querySelectorAll(".item-pill");
  pills.forEach((pill) => pill.classList.remove("selected"));

  state.selections = {};

  closetConfig.forEach((category) => {
    const itemsInCat = Array.from(
      el.categoriesContainer.querySelectorAll(
        `.category[data-category-id="${category.id}"] .item-pill`
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
    return Promise.resolve({
      score: 0,
      tier: "idle",
      title: "Nowhere to be",
      text: "Give the girl somewhere to go first. Hit “New event” to unlock tonight’s mission.",
    });
  }

  return fetch(`${API_BASE}/rate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventId: state.currentEvent.id,
      selections: state.selections,
    }),
  })
    .then((res) => res.json())
    .catch(() => ({
      score: 0,
      tier: "idle",
      title: "Server having a moment",
      text: "If the cards declined and the server crashed, maybe tonight is about self care. Try again.",
    }));
}

function renderRating() {
  computeRating().then(({ score, tier, title, text }) => {
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
  });
}

function renderCharacterLook() {
  if (!el.avatarSvg) return;

  const allPieces = el.avatarSvg.querySelectorAll(".avatar-piece");
  allPieces.forEach((piece) => piece.classList.remove("visible"));

  const catToLayerPrefix = {
    hair: "hair",
    top: "top",
    bottom: "bottom",
    dress: "dress",
    shoes: "shoes",
    accessories: "acc",
  };

  Object.entries(state.selections).forEach(([categoryId, itemId]) => {
    const artId = `${itemId}_art`;
    const node = el.avatarSvg.querySelector(`#${CSS.escape(artId)}`);
    if (node) {
      node.classList.add("visible");
    }
  });
}

function init() {
  renderCategories();
  resetRating();

  el.newEventBtn.addEventListener("click", () => {
    pickNewEvent();
  });

  el.randomizeOutfitBtn.addEventListener("click", () => {
    randomizeOutfit();
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


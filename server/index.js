const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

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

function randomPick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getItemById(itemId) {
  for (const cat of closetConfig) {
    const found = cat.items.find((i) => i.id === itemId);
    if (found) return found;
  }
  return null;
}

function computeRating(payload) {
  const { eventId, selections } = payload;

  if (!eventId) {
    return {
      score: 0,
      tier: "idle",
      title: "Nowhere to be",
      text: "Give the girl somewhere to go first. Hit “New event” to unlock tonight’s mission.",
    };
  }

  const event = events.find((e) => e.id === eventId);
  if (!event) {
    return {
      score: 0,
      tier: "idle",
      title: "Mystery event",
      text: "The event disappeared mid-scroll. Try again.",
    };
  }

  const chosenItems = Object.values(selections || {})
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

  const hasDress = !!selections.dress;
  const hasTopBottom = !!selections.top && !!selections.bottom;
  if (hasDress && hasTopBottom) {
    score -= 15;
  }

  if (event.id === "ball" && hasDress) score += 10;
  if (event.id === "rave" && selections.shoes === "shoes_satin-heels") {
    score -= 10;
  }
  if (event.id === "beach" && selections.shoes === "shoes_satin-heels") {
    score -= 12;
  }
  if (event.id === "gallery" && selections.hair === "hair_bubble-pigtails") {
    score -= 8;
  }

  const varietyBonus = Object.keys(selections || {}).length;
  score += varietyBonus * 2;

  score = Math.max(0, Math.min(100, score));

  let tier = "mid";
  if (score >= 78) tier = "slay";
  else if (score <= 45) tier = "flop";

  const anecdotes = buildAnecdote(event, chosenItems, score, tier);

  return {
    score,
    tier,
    title: anecdotes.title,
    text: anecdotes.text,
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

app.get("/api/events/random", (req, res) => {
  const previousId = req.query.previousId;
  const pool = previousId ? events.filter((e) => e.id !== previousId) : events;
  const event = randomPick(pool);
  res.json(event);
});

app.post("/api/rate", (req, res) => {
  const result = computeRating(req.body || {});
  res.json(result);
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`diva_down backend listening on http://localhost:${PORT}`);
});


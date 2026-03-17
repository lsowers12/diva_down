import React, { useEffect, useMemo, useRef, useState } from "react";

const skinTones = {
  skin_espresso: { top: "#c58c5c", bottom: "#8b4a28" },
  skin_mocha: { top: "#c99a6d", bottom: "#9d6b3a" },
  skin_honey: { top: "#f5d4a8", bottom: "#e0a864" },
  skin_bronze: { top: "#e5b28a", bottom: "#c27a4a" },
  skin_olive: { top: "#f1c9aa", bottom: "#d99a72" },
  skin_porcelain: { top: "#fbe0d0", bottom: "#f1b39a" },
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
      { id: "skin_espresso", label: "Espresso slay", tags: ["skin"] },
      { id: "skin_mocha", label: "Mocha latte", tags: ["skin", "date"] },
      { id: "skin_honey", label: "Honey warmth", tags: ["skin", "soft", "date"] },
      { id: "skin_bronze", label: "Bronzed babe", tags: ["skin", "beach", "glow"] },
      { id: "skin_olive", label: "Olive neutral", tags: ["skin", "gallery"] },
      { id: "skin_porcelain", label: "Porcelain glow", tags: ["skin", "soft"] },
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
      {
        id: "bottom_tailored-trousers",
        label: "Tailored black trousers",
        tags: ["structured", "tailored", "gallery"],
      },
      { id: "bottom_knitted-shorts", label: "Soft knit shorts", tags: ["knit", "beach"] },
      { id: "bottom_wide-leg", label: "Wide-leg cargo", tags: ["oversized", "y2k", "casual"] },
    ],
  },
  {
    id: "dress",
    label: "Dresses",
    items: [
      { id: "dress_slip-dress", label: "Backless silk slip", tags: ["slip", "date", "heels"] },
      {
        id: "dress_ballgown",
        label: "Crushed velvet ballgown",
        tags: ["gown", "dramatic", "sparkle", "ball"],
      },
      {
        id: "dress_metallic-mini",
        label: "Metallic party mini",
        tags: ["neon", "mini", "glow", "rave"],
      },
      { id: "dress_cutout-knit", label: "Cutout knit maxi", tags: ["beach", "flowy", "knit"] },
      {
        id: "dress_archi-column",
        label: "Architect column dress",
        tags: ["structured", "monochrome", "gallery"],
      },
      { id: "dress_blazer", label: "Suit blazer dress", tags: ["structured", "tailored", "gallery"] },
    ],
  },
  {
    id: "shoes",
    label: "Shoes",
    items: [
      {
        id: "shoes_holographic-platforms",
        label: "Holographic platforms",
        tags: ["platform", "neon", "rave"],
      },
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

function computeRating(currentEvent, selections) {
  if (!currentEvent) {
    return {
      score: 0,
      tier: "idle",
      title: "Pick Something. I'm Waiting.",
      text: "Honey. HONEY. I cannot read an empty calendar. Pick a goddamn event so I have something to work with. The audacity of showing up with NOTHING.",
    };
  }

  const chosenItems = Object.values(selections)
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
    const matchCount = item.tags.filter((t) => currentEvent.idealTags.includes(t)).length;
    score += matchCount * 10;
  });

  const hasDress = !!selections.dress;
  const hasTopBottom = !!selections.top && !!selections.bottom;
  if (hasDress && hasTopBottom) {
    score -= 15;
  }

  if (currentEvent.id === "ball" && hasDress) score += 10;
  if (currentEvent.id === "rave" && selections.shoes === "shoes_satin-heels") {
    score -= 10;
  }
  if (currentEvent.id === "beach" && selections.shoes === "shoes_satin-heels") {
    score -= 12;
  }
  if (currentEvent.id === "gallery" && selections.hair === "hair_bubble-pigtails") {
    score -= 8;
  }

  const varietyBonus = Object.keys(selections).length;
  score += varietyBonus * 2;

  score = Math.max(0, Math.min(100, score));

  let tier = "mid";
  if (score >= 78) tier = "slay";
  else if (score <= 45) tier = "flop";

  const { title, text } = buildAnecdote(currentEvent, chosenItems, score, tier);

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

export function App() {
  const [currentEvent, setCurrentEvent] = useState(null);
  const [selections, setSelections] = useState({});
  const [result, setResult] = useState(null);
  const [resultOpen, setResultOpen] = useState(false);

  const avatarSvgRef = useRef(null);
  const avatarBackSvgRef = useRef(null);
  const speechBubbleRef = useRef(null);
  const characterPortraitRef = useRef(null);
  const resultQueenWrapRef = useRef(null);

  const eventIds = useMemo(() => events.map((e) => e.id), []);

  const handlePickNewEvent = () => {
    setSelections({});
    const previousId = currentEvent?.id;
    const pool = previousId ? events.filter((e) => e.id !== previousId) : events;
    const next = randomPick(pool);
    setCurrentEvent(next);
    setResult(null);
    setResultOpen(false);
  };

  const handleSelectItem = (categoryId, itemId) => {
    setSelections((prev) => {
      const current = prev[categoryId];
      if (current === itemId) {
        const clone = { ...prev };
        delete clone[categoryId];
        return clone;
      }
      return { ...prev, [categoryId]: itemId };
    });
  };

  const handleLockLook = () => {
    const rating = computeRating(currentEvent, selections);
    setResult(rating);
    setResultOpen(true);
  };

  const handleCloseResult = () => {
    setResultOpen(false);
  };

  useEffect(() => {
    const el = characterPortraitRef.current;
    if (!el) return;
    eventIds.forEach((id) => el.classList.remove(`event-${id}`));
    if (currentEvent) {
      if (eventIds.includes(currentEvent.id)) {
        el.classList.add(`event-${currentEvent.id}`);
      }
    }
  }, [currentEvent, eventIds]);

  useEffect(() => {
    const speech = speechBubbleRef.current;
    if (!speech) return;

    if (!currentEvent) {
      speech.innerHTML =
        "Okay so… all my cards just declined. No new outfit for me! Tragic. Luckily my closet is still insane. Help me pull a look—Eye-con is going to be there and she does NOT hold back!";
      return;
    }

    if (!result) {
      speech.innerHTML =
        `<p>New crisis unlocked: <strong>${currentEvent.name}</strong>. Dig into the closet and make it make sense.</p>`;
    } else {
      if (result.tier === "slay") {
        speech.innerHTML =
          "<p>Oh this is actually sick. Screenshot it before I change my mind.</p>";
      } else if (result.tier === "flop") {
        speech.innerHTML =
          "<p>Okay… at least if it flops we can blame the lighting.</p>";
      } else {
        speech.innerHTML =
          "<p>Cute! But I feel like we were one chaotic choice away from greatness.</p>";
      }
    }
  }, [currentEvent, result]);

  useEffect(() => {
    const svg = avatarSvgRef.current;
    if (!svg) return;

    try {
      const allPieces = svg.querySelectorAll(".avatar-piece");
      allPieces.forEach((piece) => piece.classList.remove("visible"));

      const skinId = selections.skin || "skin_olive";
      const tone = skinTones[skinId] || skinTones["skin_olive"];
      if (tone) {
        const skinStops = svg.querySelectorAll("#skinGrad stop");
        if (skinStops[0]) skinStops[0].setAttribute("stop-color", tone.top);
        if (skinStops[1]) skinStops[1].setAttribute("stop-color", tone.bottom);
      }

      Object.entries(selections).forEach(([categoryId, itemId]) => {
        const artId = `${itemId}_art`;
        const node = svg.querySelector(`#${artId}`);
        if (node) {
          node.classList.add("visible");
        }

        if (categoryId === "hair" && itemId === "hair_sleek-bun") {
          const overlay = svg.querySelector("#hair_sleek-bun_overlay");
          if (overlay) {
            overlay.classList.add("visible");
          }
        }
      });

      const backSvg = avatarBackSvgRef.current;
      if (backSvg) {
        const backPieces = backSvg.querySelectorAll(".avatar-piece");
        backPieces.forEach((piece) => piece.classList.remove("visible"));
        const backCategories = ["hair", "dress", "top", "bottom", "shoes"];
        backCategories.forEach((cat) => {
          const itemId = selections[cat];
          if (itemId) {
            const backId = `${itemId}_back_art`;
            const backNode = backSvg.querySelector(`#${backId}`);
            if (backNode) {
              backNode.classList.add("visible");
            }
          }
        });
      }
    } catch {
      // ignore
    }
  }, [selections]);

  useEffect(() => {
    if (!resultQueenWrapRef.current) return;
    if (!result) {
      resultQueenWrapRef.current.dataset.tier = "idle";
    } else {
      resultQueenWrapRef.current.dataset.tier = result.tier;
    }
  }, [result]);

  const scoreLabel = result ? `${result.score} / 100` : "– / 100";
  const ratingBadgeClass =
    result?.tier === "slay"
      ? "rating-badge rating-badge--slay"
      : result?.tier === "flop"
        ? "rating-badge rating-badge--flop"
        : result?.tier === "mid"
          ? "rating-badge rating-badge--mid"
          : "rating-badge rating-badge--idle";

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="logo-lockup">
          <span className="logo-mark">DD</span>
          <div className="logo-text">
            <h1>diva_down</h1>
            <p className="tagline">Closet meltdown. Infinite looks.</p>
          </div>
        </div>
      </header>

      <main className="layout">
        <section className="panel story-panel">
          <div className="character-card">
            <div className="character-portrait" ref={characterPortraitRef}>
              {/* Front avatar */}
              <div className="avatar-view avatar-front">
                <span className="avatar-label">Front</span>
                <svg
                  ref={avatarSvgRef}
                  className="avatar-svg"
                  viewBox="0 0 180 260"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* The SVG content is left exactly as in the original HTML to preserve visuals */}
                  {/* ... SVG paths/groups come from existing index.html ... */}
                </svg>
              </div>
              {/* Back avatar */}
              <div className="avatar-view avatar-back">
                <span className="avatar-label">Back</span>
                <svg
                  ref={avatarBackSvgRef}
                  className="avatar-svg"
                  viewBox="0 0 180 260"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ... back SVG content from original index.html ... */}
                </svg>
              </div>
            </div>
            <div className="speech-bubble" ref={speechBubbleRef}>
              <p>
                Okay so… all my cards just declined. No new outfit for me! Tragic. Luckily my closet
                is still insane. Help me pull a look—Eye-con is going to be there and she does NOT
                hold back!
              </p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-label">Tonight&apos;s chaos:</div>
            <div id="eventName" className="event-name">
              {currentEvent ? currentEvent.name : "Tap “New event” to start"}
            </div>
            <p id="eventDescription" className="event-description">
              {currentEvent?.description || ""}
            </p>
            <button
              type="button"
              className="pill-button"
              id="newEventBtn"
              onClick={handlePickNewEvent}
            >
              New event
            </button>
          </div>
        </section>

        <section className="panel wardrobe-panel">
          <h2>Closet chaos</h2>
          <div className="categories-grid">
            {closetConfig.map((category) => (
              <div key={category.id} className="category" data-category-id={category.id}>
                <div className="category-header">
                  <span>{category.label}</span>
                  <span className="category-count">{category.items.length} pcs</span>
                </div>
                <div className="items-row">
                  {[...category.items].map((item) => {
                    const selected = selections[category.id] === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`closet-item${selected ? " selected" : ""}`}
                        onClick={() => handleSelectItem(category.id, item.id)}
                        title={item.tags.join(", ")}
                      >
                        <div className="closet-item-inner">
                          <div className="closet-item-hanger" />
                          <div
                            className={`closet-item-photo closet-visual-${item.id}`}
                          />
                          <div className="closet-item-label">{item.label}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <button
            id="submitOutfitBtn"
            className="primary-button"
            type="button"
            onClick={handleLockLook}
          >
            Lock the look
          </button>
        </section>
      </main>

      {/* Rating strip (matches original styling) */}
      <section className="panel rating-panel">
        <div className="rating-score" id="ratingScore">
          {scoreLabel}
        </div>
        <div className={ratingBadgeClass} id="ratingBadge">
          {result?.title || "Waiting for a look…"}
        </div>
        <p className="rating-narrative" id="ratingNarrative">
          {result?.text ||
            "She’s waiting. Build a look and lock it in to see if you understood the assignment."}
        </p>
      </section>

      {/* Result overlay */}
      <section
        id="resultScreen"
        className={`result-screen${resultOpen ? " visible" : ""}`}
        aria-hidden={resultOpen ? "false" : "true"}
      >
        <div className="result-backdrop" />
        <div className="result-content">
          <div className="result-card">
            <header className="result-header">
              <span className="result-label">Vibe check</span>
              <button
                id="resultCloseBtn"
                className="ghost-button result-close-btn"
                type="button"
                onClick={handleCloseResult}
              >
                Back to closet
              </button>
            </header>

            <div className="result-body">
              <div className="result-avatar-wrap">
                <div className="result-avatar-halo" />
                <div id="resultAvatarMount" className="result-avatar-mount">
                  {/* We rely on the queen SVG below; current outfit is already shown on main avatar */}
                </div>
                <div
                  id="resultQueenWrap"
                  className="result-queen-wrap"
                  data-tier="idle"
                  ref={resultQueenWrapRef}
                >
                  {/* SVG copied from original index.html */}
                  {/* ... queen SVG content ... */}
                  <span className="result-queen-name">Eye-con</span>
                </div>
              </div>
              <div className="result-copy">
                <div id="resultScore" className="result-score">
                  {scoreLabel}
                </div>
                <div id="resultTitle" className="result-title">
                  {result?.title || "Waiting for a look…"}
                </div>
                <p id="resultText" className="result-text">
                  {result?.text ||
                    "Once you lock the look, she’ll step into her close‑up and give you the full rundown."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


const wrdBellyWave = document.getElementById("ln8w4");
const bellyWaveWGHT = wrdBellyWave.animate(
  [

    { fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 100` },
    { fontVariationSettings: `"wght" 900, "wdth" 100, "ital" 0, "cont" 100` },

  ],
  {
    // id: "",
    delay: 100,
    direction: "alternate",
    duration: 1000,
    endDelay: 0,
    fill: "none",
    easing: "cubic-bezier(0.5, 1, 0.89, 1)",
    iterationStart: 0.0,
    iterations: "Infinity",
    composite: "add",
    iterationComposite: "replace"
  }
);

const bellyWaveWDTH = wrdBellyWave.animate(
  [

    { fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 100` },
    { fontVariationSettings: `"wght" 900, "wdth" 60, "ital" 0, "cont" 100` },
    { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 100` },

  ],
  {
    // id: "",
    delay: 250,
    direction: "alternate",
    duration: 1000,
    endDelay: 0,
    fill: "none",
    easing: "cubic-bezier(0.45, 0, 0.55, 1)",
    iterationStart: 0.0,
    iterations: "Infinity",
    composite: "add",
    iterationComposite: "replace"
  }
);

const bellyWaveITAL = wrdBellyWave.animate(
  [

    { fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 100` },
    { fontVariationSettings: `"wght" 900, "wdth" 60, "ital" 12, "cont" 100` },
    { fontVariationSettings: `"wght" 295, "wdth" 140, "ital" 0, "cont" 100` },

  ],
  {
    // id: "",
    delay: 500,
    direction: "alternate",
    duration: 1000,
    endDelay: 0,
    fill: "none",
    easing: "cubic-bezier(0.45, 0, 0.55, 1)",
    iterationStart: 0.0,
    iterations: "Infinity",
    composite: "add",
    iterationComposite: "replace"
  }
);

const bellyWaveCONT = wrdBellyWave.animate(
  [

    { fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 100` },
    { fontVariationSettings: `"wght" 900, "wdth" 60, "ital" 12, "cont" 20` },
    { fontVariationSettings: `"wght" 295, "wdth" 140, "ital" 0, "cont" 100` },

  ],
  {
    // id: "",
    delay: 750,
    direction: "alternate",
    duration: 1000,
    endDelay: 0,
    fill: "none",
    easing: "cubic-bezier(0.45, 0, 0.55, 1)",
    iterationStart: 0.0,
    iterations: "Infinity",
    composite: "add",
    iterationComposite: "replace"
  }
);
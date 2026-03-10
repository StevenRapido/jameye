export const C = {
  base:    "#141A14",
  surface: "#1E261E",
  raised:  "#242E24",
  border:  "#4A6048",
  bone:    "#F5F2EB",
  sage:    "#D4E4D4",
  dim:     "#A0BCA0",
  violet:  "#5B4FE8",
  green:   "#4ADE80",
  red:     "#F87171",
  amber:   "#FBBF24",
};

export const plex  = "'IBM Plex Sans', sans-serif";
export const mono  = "'IBM Plex Mono', monospace";
export const bebas = "'Bebas Neue', sans-serif";

export const LEVELS = [
  { name: "Newcomer",  bg: "#2A2E2A", text: "#B0C0B0", glow: false },
  { name: "Novice",    bg: "#2A2E36", text: "#B8C8D8", glow: false },
  { name: "Aware",     bg: "#1E3040", text: "#90CCEE", glow: false },
  { name: "Promising", bg: "#1A3828", text: "#70DAAA", glow: false },
  { name: "Capable",   bg: "#302818", text: "#E8BE60", glow: false },
  { name: "Skilled",   bg: "#382018", text: "#FF9960", glow: true  },
  { name: "Advanced",  bg: "#301830", text: "#E888E8", glow: true  },
  { name: "Expert",    bg: "#201838", text: "#AA99FF", glow: true  },
  { name: "Master",    bg: "#181828", text: "#DDD0FF", glow: true  },
  { name: "Legend",    bg: "#5B4FE8", text: "#FFFFFF",  glow: true  },
];

export const TOURNAMENTS = [
  { name: "Novice Cup", prize: "10 000", level: "Novice" },
  { name: "Capable Classic", prize: "100 000", level: "Capable" },
  { name: "Expert Invitational", prize: "550 000", level: "Expert" },
  { name: "Legend Tournament", prize: "1 000 000", level: "Legend", flagship: true },
];

/* ============================================
   THEME ENGINE
   Primitive ramps → Semantic tokens → CSS custom properties
   
   Architecture:
     1. Primitive ramps (raw color values, 50–900)
     2. Semantic tokens (role-based, reference primitives)
     3. applyTheme() writes semantic tokens to :root as CSS vars
   
   JS keys are kebab-case and auto-map to CSS vars:
     "color-bg-base" → --color-bg-base
   ============================================ */

/* ============================================
   PRIMITIVE COLOR RAMPS
   Tailwind-style 50–900 steps.
   Every color in the system traces back here.
   ============================================ */

const primitive = {

  /* ---- Neutral (cool gray) ---- */
  neutral: {
    50:  "#FAFAFA",
    100: "#F5F5F5",
    200: "#E9ECEF",
    300: "#DCDBDC",   // dark-mode muted text
    400: "#CCCCCC",   // border-muted
    500: "#868E96",
    600: "#525151",   // light-mode muted text
    700: "#3E3E3E",   // light-mode primary text
    800: "#212121",   // dark-mode bg-base
    900: "#171717",
  },

  /* ---- Warm (tan / khaki) ---- */
  warm: {
    50:  "#FFF5EB",   // surface-alt base (before alpha)
    100: "#F5EBE0",
    200: "#E1D4C7",   // light-mode bg-base
    300: "#D2C5B5",
    400: "#CAC4B4",   // tag-bg
    500: "#B5AFA0",
    600: "#9F9A8C",
    700: "#8A8578",
    800: "#757064",
    900: "#5F5B50",
  },

  /* ---- White ---- */
  white: {
    50:  "#FFFFFF",   // surface, inverse text
    100: "#FEFEFE",
    200: "#FAFAFA",
    300: "#F7F7F7",
    400: "#F2F2F2",
    500: "#EDEDED",
    600: "#E8E8E8",
    700: "#E0E0E0",
    800: "#D9D9D9",
    900: "#D1D1D1",
  },

  /* ---- Blue ---- */
  blue: {
    50:  "#EBF5FF",
    100: "#CFE8FF",   // linkedin/social tag
    200: "#9BD0FF",   // linkedin/social tag hover
    300: "#5BB5F5",
    400: "#2E96D9",
    500: "#1979B9",   // text-link
    600: "#146699",
    700: "#0F527A",
    800: "#0A3D5C",
    900: "#05293D",
  },

  /* ---- Green ---- */
  green: {
    50:  "#F3FFF4",   // bg-positive
    100: "#D4F5D7",
    200: "#A8E8AD",
    300: "#7DDC84",
    400: "#6BC672",
    500: "#5DAE64",   // intent-positive
    600: "#4A9B51",
    700: "#37883E",
    800: "#24752B",
    900: "#116218",
  },

  /* ---- Red ---- */
  red: {
    50:  "#FFF5F3",
    100: "#FFE0DB",
    200: "#FFB8B2",   // bg-negative base color
    300: "#F08070",
    400: "#EF4444",   // deco-red
    500: "#D73A2A",
    600: "#B93715",   // intent-negative
    700: "#9A2E11",
    800: "#7B250D",
    900: "#5C1C0A",
  },

  /* ---- Yellow ---- */
  yellow: {
    50:  "#FFFEF0",
    100: "#FFF9C4",
    200: "#FFF176",
    300: "#FACC15",   // deco-yellow
    400: "#E5B800",
    500: "#C9A200",
    600: "#AD8C00",
    700: "#917600",
    800: "#756000",
    900: "#594A00",
  },

  /* ---- Slate (for github social tag) ---- */
  slate: {
    50:  "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",   // github tag
    300: "#CBD5E0",   // github tag hover
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },

  /* ---- Pink (for email social tag) ---- */
  pink: {
    50:  "#FFF5F7",
    100: "#FED7E2",   // email tag
    200: "#FBB6CE",   // email tag hover
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41",
  },

  /* ---- Alpha (opacity-based overlays) ---- */
  "black-alpha": {
    50:  "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.08)",   // light-mode hover
    200: "rgba(0, 0, 0, 0.16)",
    300: "rgba(0, 0, 0, 0.24)",
    400: "rgba(0, 0, 0, 0.40)",   // image overlay
    500: "rgba(0, 0, 0, 0.50)",
    600: "rgba(0, 0, 0, 0.60)",
    700: "rgba(0, 0, 0, 0.70)",   // modal backdrop
    800: "rgba(0, 0, 0, 0.80)",   // image zoom backdrop
    900: "rgba(0, 0, 0, 0.90)",
  },

  "white-alpha": {
    50:  "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.08)",
    200: "rgba(255, 255, 255, 0.15)",  // dark-mode hover
    300: "rgba(255, 255, 255, 0.24)",
    400: "rgba(255, 255, 255, 0.40)",
    500: "rgba(255, 255, 255, 0.50)",
    600: "rgba(255, 255, 255, 0.60)",
    700: "rgba(255, 255, 255, 0.70)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.90)",
  },

} as const;

/* ============================================
   HELPERS
   ============================================ */

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ============================================
   TYPES
   ============================================ */

interface ColorScheme {
  id: string;
  [key: string]: string;
}

/* ============================================
   SEMANTIC TOKENS
   Every value references a primitive ramp step.
   Keys are kebab-case → auto-map to --{key} CSS vars.
   ============================================ */

export const colorSchemes: { dark: ColorScheme; light: ColorScheme[] } = {

  dark: {
    id: "b1",

    /* ---- Background ---- */
    "color-bg-base":        primitive.neutral[800],
    "color-bg-surface":     primitive.white[50],
    "color-bg-surface-alt": primitive.white[50],

    /* ---- Text ---- */
    "color-text-primary":   primitive.white[50],
    "color-text-secondary": primitive.neutral[700],
    "color-text-muted":     primitive.neutral[300],
    "color-text-inverse":   primitive.white[50],
    "color-text-link":      primitive.blue[500],
    "color-text-accent":    primitive.white[50],

    /* ---- Border & Shadow ---- */
    "color-border-default": primitive.white[50],
    "color-border-muted":   primitive.neutral[400],
    "color-shadow":         primitive.neutral[700],

    /* ---- Intent ---- */
    "color-intent-positive": primitive.green[500],
    "color-intent-negative": primitive.red[600],
    "color-bg-positive":     primitive.green[50],
    "color-bg-negative":     hexToRgba(primitive.red[200], 0.34),

    /* ---- Tags ---- */
    "color-tag-bg": primitive.warm[400],

    /* ---- Interactive ---- */
    "color-bg-hover": primitive["white-alpha"][200],

    /* ---- Overlay ---- */
    "color-overlay-backdrop": primitive["black-alpha"][700],
    "color-overlay-heavy":    primitive["black-alpha"][800],
    "color-overlay-medium":   primitive["black-alpha"][400],
  },

  light: [
    {
      id: "5",

      /* ---- Background ---- */
      "color-bg-base":        primitive.warm[200],
      "color-bg-surface":     primitive.white[50],
      "color-bg-surface-alt": hexToRgba(primitive.warm[50], 0.5),

      /* ---- Text ---- */
      "color-text-primary":   primitive.neutral[700],
      "color-text-secondary": primitive.neutral[700],
      "color-text-muted":     primitive.neutral[600],
      "color-text-inverse":   primitive.white[50],
      "color-text-link":      primitive.blue[500],
      "color-text-accent":    primitive.neutral[700],

      /* ---- Border & Shadow ---- */
      "color-border-default": primitive.neutral[700],
      "color-border-muted":   primitive.neutral[400],
      "color-shadow":         primitive.neutral[700],

      /* ---- Intent ---- */
      "color-intent-positive": primitive.green[500],
      "color-intent-negative": primitive.red[600],
      "color-bg-positive":     primitive.green[50],
      "color-bg-negative":     hexToRgba(primitive.red[200], 0.34),

      /* ---- Tags ---- */
      "color-tag-bg": primitive.warm[400],

      /* ---- Interactive ---- */
      "color-bg-hover": primitive["black-alpha"][100],

      /* ---- Overlay ---- */
      "color-overlay-backdrop": primitive["black-alpha"][700],
      "color-overlay-heavy":    primitive["black-alpha"][800],
      "color-overlay-medium":   primitive["black-alpha"][400],
    },
  ],
};

/* ============================================
   APPLY THEME
   Writes all semantic tokens to :root.
   Keys auto-map: "color-bg-base" → --color-bg-base
   ============================================ */

const applyTheme = (themeType: "light" | "dark" = "light"): void => {
  if (typeof window === "undefined") return;
  if ((window as unknown as Record<string, unknown>).isPasswordModalOpen) return;

  let scheme: ColorScheme;

  if (themeType === "light") {
    const currentId = document.documentElement.style
      .getPropertyValue("--theme-id")
      .trim();
    const others = colorSchemes.light.filter((t) => t.id !== currentId);

    scheme =
      others.length > 0
        ? others[Math.floor(Math.random() * others.length)]
        : colorSchemes.light.find((t) => t.id === currentId) || colorSchemes.light[0];
  } else {
    scheme = colorSchemes.dark;
  }

  const root = document.documentElement.style;
  root.setProperty("--theme-id", scheme.id);

  /* Write every semantic token as a CSS custom property */
  for (const [key, value] of Object.entries(scheme)) {
    if (key === "id") continue;
    root.setProperty(`--${key}`, value);
  }
};

export { primitive, applyTheme };

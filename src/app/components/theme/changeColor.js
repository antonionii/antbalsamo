export const colorNeutralBlack = "#3E3E3E";
export const colorNeutralWhite = "#FFFFFF";

export const colorRed100 = "#FFF5F3";
export const colorRed300 = "#FFB9B2";
export const colorRed500 = "#B93715";

export const colorGreen100 = "#F3FFF4";
export const colorGreen500 = "#5DAE64";

export const colorBlue100 = "#F3F9FF";
export const colorBlue500 = "#1979B9";


export const colorIntentPositivePrimary = "#5DAE64";
export const colorIntentPositiveAccent = "#F3FFF4";

export const colorIntentNegativePrimary = "#B93715";
export const colorIntentNegativeAccent = "#ffb8b257";

export const colorSchemes = {
  dark: {
    id: "b1",
    backgroundColor: "#212121",
    textColor: colorNeutralWhite,
    lineColor: colorNeutralWhite,
    textShadow: colorNeutralBlack,
    accentColor: colorNeutralWhite,
    accentTextColor: colorNeutralWhite,
    colorBackgroundDefault: colorNeutralWhite,
    cardTextColor: colorNeutralBlack,
    linkColor: colorBlue500,
    seccolorBackgroundDefault: colorNeutralWhite,
    mutedTextColor: "#dcdbdc",


      colorForegroundTextBase: colorNeutralWhite,
      colorForegroundTextDefault: colorNeutralBlack,
      colorForegroundTextInverse: colorNeutralWhite,

      colorForegroundBorderDefault: colorNeutralWhite,


      colorBackgroundDefault: colorNeutralWhite,
      colorBackgroundBase: "#212121",
      
      
      colorIntentPositivePrimary: colorIntentPositivePrimary,


      colorBackgroundPositive: colorIntentPositiveAccent,
      colorBackgroundNegative: colorIntentNegativeAccent,

      colorRed500: colorRed500,
      colorIntentNegativePrimary: colorIntentNegativePrimary,
      colorBlue500: colorBlue500,
    

  },
  light: [
   
    {
      //Neutral
      id: "5",
      backgroundColor: "#E1D4C7",

      textColor: colorNeutralBlack,
      lineColor: colorNeutralBlack,
      textShadow: colorNeutralBlack,

      accentColor: colorNeutralWhite,
      accentTextColor: colorNeutralBlack,

      seccolorBackgroundDefault: hexToRgba("#fff5eb", 0.5),

      cardTextColor: colorNeutralBlack,
      
      linkColor: colorBlue500,
      mutedTextColor: "#525151",

      buttonHoverBg: colorNeutralWhite,

      colorForegroundTextBase: colorNeutralBlack,
      colorForegroundTextDefault: colorNeutralBlack,
      colorForegroundTextInverse: colorNeutralWhite,

      colorForegroundBorderDefault: colorNeutralBlack,


      colorBackgroundDefault: colorNeutralWhite,
      colorBackgroundBase: "#E1D4C7",
      
      colorIntentPositivePrimary: colorIntentPositivePrimary,


      colorBackgroundPositive: colorIntentPositiveAccent,
      colorBackgroundNegative: colorIntentNegativeAccent,

      colorRed500: colorRed500,
      colorIntentNegativePrimary: colorIntentNegativePrimary,
      colorBlue500: colorBlue500,

    },
  ],
};
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const changeColor = (themeType = "light") => {
  if (typeof window === "undefined") return;
  if (window.isPasswordModalOpen) return;
  let toBeAppliedScheme;
  if (themeType === "light") {
    const currentSchemeId = document.documentElement.style.getPropertyValue(
      "--theme-id"
    ).trim();
    const nextLightThemes = colorSchemes.light.filter(
      (item) => item.id !== currentSchemeId
    );

    // Fallback: if no other themes, use the current one
    if (nextLightThemes.length === 0) {
      toBeAppliedScheme = colorSchemes.light.find(item => item.id === currentSchemeId) || colorSchemes.light[0];
    } else {
      toBeAppliedScheme =
        nextLightThemes[Math.floor(Math.random() * nextLightThemes.length)];
    }
  } else {
    toBeAppliedScheme = colorSchemes.dark;
  }
  document.documentElement.style.setProperty(
    "--theme-id",
    toBeAppliedScheme.id
  );
  document.documentElement.style.setProperty(
    "--color-Background-Base",
    toBeAppliedScheme.colorBackgroundBase
  );
    document.documentElement.style.setProperty(
    "--color-Foreground-Text-Base",
    toBeAppliedScheme.colorForegroundTextBase
  );
  document.documentElement.style.setProperty(
    "--color-Foreground-Text-Default",
    toBeAppliedScheme.colorForegroundTextDefault
  );
    document.documentElement.style.setProperty(
    "--color-Foreground-Text-Inverse",
    toBeAppliedScheme.colorForegroundTextInverse
  );
  document.documentElement.style.setProperty(
    "--color-Foreground-Border-Default",
    toBeAppliedScheme.colorForegroundBorderDefault
  );
  document.documentElement.style.setProperty(
    "--shadow-color",
    toBeAppliedScheme.textShadow
  );
  document.documentElement.style.setProperty(
    "--accent-color",
    toBeAppliedScheme.accentColor
  );
  document.documentElement.style.setProperty(
    "--color-Background-Default",
    toBeAppliedScheme.colorBackgroundDefault
  );
  document.documentElement.style.setProperty(
    "--accentText-color",
    toBeAppliedScheme.accentTextColor
  );
  document.documentElement.style.setProperty(
    "--mutedText-color",
    toBeAppliedScheme.mutedTextColor
  );
  document.documentElement.style.setProperty(
    "--link-color",
    toBeAppliedScheme.linkColor
  );
  document.documentElement.style.setProperty(
    "--secCard-color",
    toBeAppliedScheme.seccolorBackgroundDefault
  );
  document.documentElement.style.setProperty(
    "--cardText-color",
    toBeAppliedScheme.cardTextColor
  );
  document.documentElement.style.setProperty(
    "--buttonHoverBg",
    toBeAppliedScheme.buttonHoverBg
  );

    document.documentElement.style.setProperty(
    "--color-Neutral-Black",
    toBeAppliedScheme.colorNeutralBlack
  );
    document.documentElement.style.setProperty(
    "--color-Neutral-White",
    toBeAppliedScheme.colorNeutralWhite
  );
  
    document.documentElement.style.setProperty(
    "--color-Red-100",
    toBeAppliedScheme.colorRed100
  );
    document.documentElement.style.setProperty(
    "--color-Red-500",
    toBeAppliedScheme.colorRed500
  );   
    document.documentElement.style.setProperty(
    "--color-Red-100",
    toBeAppliedScheme.colorRed100
  );
    document.documentElement.style.setProperty(
    "--color-Red-500",
    toBeAppliedScheme.colorRed500
  );   
      document.documentElement.style.setProperty(
    "--color-Green-100",
    toBeAppliedScheme.colorGreen100
  );
    document.documentElement.style.setProperty(
    "--color-Green-500",
    toBeAppliedScheme.colorGreen500
  );    
    document.documentElement.style.setProperty(
    "--color-Intent-Base",
    toBeAppliedScheme.colorIntentBase
  );    
    document.documentElement.style.setProperty(
    "--color-Intent-Positive-Primary",
    toBeAppliedScheme.colorIntentPositivePrimary
  );

  
    document.documentElement.style.setProperty(
    "--color-Intent-Positive-Accent",
    toBeAppliedScheme.colorIntentPositiveAccent
  );
    document.documentElement.style.setProperty(
    "--color-Intent-Negative-Primary",
    toBeAppliedScheme.colorIntentNegativePrimary
  );
    document.documentElement.style.setProperty(
    "--color-Intent-Negative-Accent",
    toBeAppliedScheme.colorIntentNegativeAccent
  );
  document.documentElement.style.setProperty(
    "--color-Background-Positive",
    toBeAppliedScheme.colorBackgroundPositive
  );
  document.documentElement.style.setProperty(
    "--color-Background-Negative",
    toBeAppliedScheme.colorBackgroundNegative
  );

  document.documentElement.style.setProperty(
    "--color-Blue-500",
    toBeAppliedScheme.colorBlue500
  );
};

export { changeColor };

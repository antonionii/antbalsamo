export const colorSchemes = {
  dark: {
    id: "b1",
    backgroundColor: "#4a4a4a",
    textColor: "#ffffff",
    lineColor: "#ffffff",
    textShadow: "black",
    accentColor: "#ffffff",
    accentTextColor: "black",
    cardColor: "white",
    linkColor: "#ff4062",
    secCardColor: "white",
    mutedTextColor: "#dcdbdc"

  },
  light: [
   
    {
      //Yellow
      id: "1",
      backgroundColor: "#F0C865",
      textColor: "black",
      lineColor: "black",
      textShadow: "white",
      accentColor: "black",
      accentTextColor: "black",
      cardColor: "white",
      linkColor: "#ff4062",
      secCardColor: "white",
      mutedTextColor: "#525151"

    },

    
      /*
      {
      //Green
      id: "2",
      backgroundColor: "#B1BF93",
      textColor: "black",
      lineColor: "black",
      textShadow: "white",
      accentColor: "black",y
      accentTextColor: "black",

      cardColor: "white"

    },*/
    {
      //Blue
      id: "3",
      backgroundColor: "#0061FC",
      textColor: "black",
      lineColor: "white",
      textShadow: "black",
      accentColor: "white",
      accentTextColor: "black",
      cardColor: "white",
      linkColor: "#ff4062",
      secCardColor: "white",
      mutedTextColor: "#dcdbdc"


    },
    {
      //Cream
      id: "4",
      backgroundColor: "#fff5eb",
      textColor: "black",
      lineColor: "black",
      textShadow: "black",
      accentColor: "#28c074",
      accentTextColor: "black",
      cardColor: "#28c074",
      linkColor: "#000050",
      secCardColor: hexToRgba("#28c074", 0.5),
      mutedTextColor: "#525151"


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
  let toBeAppliedScheme;
  if (themeType === "light") {
    const currentSchemeId = document.documentElement.style.getPropertyValue(
      "--theme-id"
    ).trim();
    const nextLightThemes = colorSchemes.light.filter(
      (item) => item.id !== currentSchemeId
    );

    toBeAppliedScheme =
      nextLightThemes[Math.floor(Math.random() * nextLightThemes.length)];
  } else {
    toBeAppliedScheme = colorSchemes.dark;
  }
  document.documentElement.style.setProperty(
    "--theme-id",
    toBeAppliedScheme.id
  );
  document.documentElement.style.setProperty(
    "--background-color",
    toBeAppliedScheme.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--text-color",
    toBeAppliedScheme.textColor
  );
  document.documentElement.style.setProperty(
    "--line-color",
    toBeAppliedScheme.lineColor
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
    "--card-color",
    toBeAppliedScheme.cardColor
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
    toBeAppliedScheme.secCardColor
  );
};

export { changeColor };

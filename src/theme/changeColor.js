export const colorSchemes = {
  dark: {
    id: "b1",
    backgroundColor: "#4a4a4a",
    textColor: "#ffffff",
    lineColor: "#ffffff",
    textShadow: "black"
  },
  light: [
   
    {
      id: "1",
      backgroundColor: "#F0C865",
      textColor: "black",
      lineColor: "black",
      textShadow: "white"
    },

    {
      id: "2",
      backgroundColor: "#B1BF93",
      textColor: "black",
      lineColor: "black",
      textShadow: "white"
    },
    {
      id: "3",
      backgroundColor: "#0061FC",
      textColor: "white",
      lineColor: "white",
      textShadow: "black"

    },
  ],
};

const changeColor = (themeType = "light") => {
  let toBeAppliedScheme;
  if (themeType === "light") {
    const currentSchemeId = document.documentElement.style.getPropertyValue(
      "--theme-id"
    );
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
};

export { changeColor };

export const colorSchemes = {
  dark: {
    id: "b1",
    backgroundColor: "#4a4a4a",
    textColor: "#ffffff",
    lineColor: "#ffffff",
    textShadow: "black",
    accentColor: "red"
  },
  light: [
   
    {
      //Yellow
      id: "1",
      backgroundColor: "#ffde00",
      textColor: "black",
      lineColor: "black",
      textShadow: "white",
      accentColor: "red"
    },

    {
      //Green
      id: "2",
      backgroundColor: "#cef79f",
      textColor: "black",
      lineColor: "black",
      textShadow: "white",
      accentColor: "#ff1f1c"

    },
    {
      //Blue
      id: "3",
      backgroundColor: "#0061FC",
      textColor: "white",
      lineColor: "white",
      textShadow: "black",
      accentColor: "black"

    },
    {
      //Red
      id: "4",
      backgroundColor: "#ff0000",
      textColor: "#FCF0DE",
      lineColor: "#FCF0DE",
      textShadow: "black",
      accentColor: "black"

    },
  ],
};

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
};

export { changeColor };

export const colorSchemes = {
  dark: {
    id: "b1",
    backgroundColor: "#4a4a4a",
    textColor: "#ffffff",
    lineColor: "#ffffff",
  },
  light: [
    {
      id: "1",
      backgroundColor: "#D9BDAD",
      textColor: "black",
      lineColor: "black",
    },
    {
      id: "2",
      backgroundColor: "#c6ddd9",
      textColor: "#e83c38",
      lineColor: "#e83c38",
    },

    {
      id: "3",
      backgroundColor: "#B1BF93",
      textColor: "#384001",
      lineColor: "black",
    },
    {
      id: "4",
      backgroundColor: "#0061FC",
      textColor: "white",
      lineColor: "white",
    },
    {
      id: "5",
      backgroundColor: "#4a4a4a",
      textColor: "#ffffff",
      lineColor: "#ffffff",
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
};

export { changeColor };

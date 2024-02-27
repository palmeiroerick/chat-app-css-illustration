import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      paleViolet: "hsl(276, 100%, 81%)",
      moderateViolet: "hsl(276, 55%, 52%)",
      desaturatedDarkViolet: "hsl(271, 15%, 43%)",
      grayishBlue: "hsl(206, 6%, 79%)",
      veryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
      darkGrayishViolet: "hsl(270, 7%, 64%)",
      white: "hsl(0, 0%, 100%)",
      lightGrayishViolet: "hsl(270, 20%, 96%)",
      veryLightMagenta: "hsl(289, 100%, 72%)",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
    backgroundImage: {
      "gradient-right":
        "linear-gradient(to right, hsl(264, 100%, 61%), hsl(293, 100%, 63%))",
      "gradient-left":
        "linear-gradient(to left, hsl(264, 100%, 61%), hsl(293, 100%, 63%))",
      "gradient-top":
        "linear-gradient(to top, hsl(264, 100%, 61%), hsl(293, 100%, 63%))",
    },
  },
};

export default config;

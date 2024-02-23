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

      lightMagenta: "hsl(293, 100%, 63%)",
      lightViolet: "hsl(264, 100%, 61%)",

      white: "hsl(0, 0%, 100%)",
      lightGrayishViolet: "hsl(270, 20%, 96%)",
      veryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
      veryLightMagenta: "hsl(289, 100%, 72%)",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
  },
};

export default config;

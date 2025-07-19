import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#d81010d3", //ACA CAMBIO COLOR DE LAS LETRAS
        darkBg: "#000000ff",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(236, 234, 234, 0.5) -5.91%, rgba(0, 0, 0, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;

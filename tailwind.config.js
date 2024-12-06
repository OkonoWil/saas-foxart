/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p: {
          1: "#D6E4FE",
          2: "#689EFF",
          3: "#0059F7",
          4: "#00308F",
          5: "#001A57",
        },
        n: {
          1: "#FFFFFF",
          2: "#F4F7FF",
          3: "#CCD2E9",
          5: "#7E8BB6",
          6: "#4E5A85",
          7: "#162044",
          8: "#081131",
          9: "#070E27",
        },
        stroke: {
          // couleur traits
          1: "#1c243f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".hero": {
          "@apply font-bold text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[5rem]":
            {},
        },
        ".h1": {
          "@apply font-bold text-[1.75rem] leading-[2rem] sm:text-[2.5rem] sm:leading-[3rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[3.5rem] lg:leading-[4rem]":
            {},
        },
        ".h2": {
          "@apply font-bold text-[1.5rem] leading-[2rem] sm:text-[2rem] sm:leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[3rem] lg:leading-[4rem]":
            {},
        },
        ".h3": {
          "@apply font-bold text-[1.25rem] leading-[1.5rem] sm:text-[1.5rem] sm:leading-[2rem] md:text-[2rem] md:leading-[2.25rem] lg:text-[2.25rem] lg:leading-[2.5rem]":
            {},
        },
        ".h4": {
          "@apply font-bold text-[1rem] leading-[1.25rem] sm:text-[1.25rem] sm:leading-[1.5rem] md:text-[1.5rem] md:leading-[1.75rem] lg:text-[1.5rem] lg:leading-[2rem]":
            {},
        },
        ".h5": {
          "@apply font-bold text-[0.875rem] leading-[1rem] sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.125rem] lg:leading-[1.75rem]":
            {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1rem] font-light sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.25rem] lg:leading-[2rem]":
            {},
        },
        ".body-2": {
          "@apply text-[0.75rem] leading-[1rem] font-light sm:text-[0.875rem] sm:leading-[1.25rem] md:text-[1rem] md:leading-[1.5rem] lg:text-[1rem] lg:leading-[1.5rem]":
            {},
        },
        ".body-3": {
          "@apply text-[0.625rem] leading-[0.875rem] font-light sm:text-[0.75rem] sm:leading-[1rem] md:text-[0.875rem] md:leading-[1.25rem] lg:text-[0.875rem] lg:leading-[1.5rem]":
            {},
        },
        ".caption-1": {
          "@apply text-[0.875rem] leading-[1rem] font-light sm:text-[1rem] sm:leading-[1.25rem] md:text-[1.125rem] md:leading-[1.5rem] lg:text-[1.25rem] lg:leading-[2rem]":
            {},
        },
        ".caption-2": {
          "@apply text-[0.75rem] leading-[0.875rem] font-light sm:text-[0.875rem] sm:leading-[1rem] md:text-[1rem] md:leading-[1.25rem] lg:text-[0.875rem] lg:leading-[1rem]":
            {},
        },
        ".button": {
          "@apply font-sora text-xs sm:text-sm lg:text-base font-normal tracking-wider animate":
            {},
        },
        ".animate": {
          "@apply duration-300 ease-in-out": {},
        },
      });
    }),
  ],
};
